const {
    app,
    Menu,
    BrowserWindow,
    shell
} = require('electron')
const path = require('path')
const url = require('url')
const { autoUpdater } = require("electron-updater");
const isDev = require("electron-is-dev");
// const log = require('electron-log');
const { dialog } = require('electron')

// Log
// autoUpdater.logger = log;
// autoUpdater.logger.transports.file.level = 'debug';
// log.info('App starting...');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
    var template = [{
        label: "About",
        submenu: [
            {
                label: "Shan Dictionary",
                click: function () {
                    shell.openExternal('https://shandictionary.com')
                }
            },
            {
                label: "Haohaa",
                click: function () {
                    shell.openExternal('https://www.haohaa.com')
                }
            },
            {
                label: "SIIT",
                click: function () {
                    shell.openExternal('https://shaniit.org')

                }
            },
            {
                label: "Check Update",
                click: function () {
                    const dialogOpts = {
                        type: 'info',
                        buttons: ['OK'],
                        title: 'Check Version',
                        message: 'Shan Dictionary',
                        detail: 'Version - ' + app.getVersion()
                    }
                    dialog.showMessageBox(dialogOpts, (response) => {
                    });

                    autoUpdater.checkForUpdates();

                }
            },
            {
                label: "Quit",
                accelerator: "Command+Q",
                click: function () {
                    app.quit();
                }
            }
        ]
    },
    {
        label: "Contribute",
        submenu: [
            {
                label: "Documentation",
                click: function () {
                    shell.openExternal('https://docs.shandictionary.com')

                }
            },
            {
                label: "Our Github",
                click: function () {
                    shell.openExternal('https://github.com/haohaaorg')

                }
            }
        ]
    },
    {
        label: "Edit",
        submenu: [
            {
                label: "Undo",
                accelerator: "CmdOrCtrl+Z",
                selector: "undo:"
            },
            {
                label: "Redo",
                accelerator: "Shift+CmdOrCtrl+Z",
                selector: "redo:"
            },
            {
                type: "separator"
            },
            {
                label: "Cut",
                accelerator: "CmdOrCtrl+X",
                selector: "cut:"
            },
            {
                label: "Copy",
                accelerator: "CmdOrCtrl+C",
                selector: "copy:"
            },
            {
                label: "Paste",
                accelerator: "CmdOrCtrl+V",
                selector: "paste:"
            },
            {
                label: "Select All",
                accelerator: "CmdOrCtrl+A",
                selector: "selectAll:"
            }
        ]
    },
    {
        label: "Donate",
        click: function () {
            shell.openExternal('https://shandictionary.com/donate')
        }
    }
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

    // Create the browser window.
    win = new BrowserWindow({
        'node-integration': false,
        width: 1200,
        height: 680
    })

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, `/dist/index.html`),
        protocol: 'file:',
        slashes: true
    }))


    if (isDev) {
        // debuging
        win.webContents.openDevTools()
    }
    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })

    // if (!isDev) {
    //     autoUpdater.checkForUpdates();
    // };
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})


autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
    const dialogOpts = {
        type: 'info',
        buttons: ['OK'],
        title: 'Application Update',
        message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: 'A new version is being downloaded.'
    }
    dialog.showMessageBox(dialogOpts, (response) => {

    });
})

autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
    const dialogOpts = {
        type: 'info',
        buttons: ['Restart'],
        title: 'Application Update',
        message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: 'A new version has been downloaded. Restart the application to apply the updates.'
    };
    dialog.showMessageBox(dialogOpts).then((returnValue) => {
        // if (returnValue.response === 0) 
        autoUpdater.quitAndInstall();
    })
});