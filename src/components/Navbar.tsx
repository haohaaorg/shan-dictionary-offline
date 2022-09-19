import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import SecondNav from './SecondNav'

const Navbar = () => {
  const { pathname } = useLocation()
  const [darkMode, setDarkMode] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const menus = [
    {
      label: 'Home',
      to: '/',
      component: 'Link',
      newTab: false
    },
    {
      label: 'Credit',
      to: '/credit',
      component: 'Link',
      newTab: false
    },
    {
      label: 'Developers',
      to: '/developers',
      component: 'Link',
      newTab: false
    },
    {
      label: 'Q&A',
      to: '/qna',
      component: 'Link',
      newTab: false
    },
    {
      label: 'Favorites',
      to: '/favorites',
      component: 'Link',
      newTab: false
    }
    // {
    //   label: 'Shan Dictionary',
    //   to: 'https://shandictionary.com',
    //   component: 'a',
    //   newTab: true
    // },
    // {
    //   label: 'Github',
    //   to: 'https://github.com/haohaaorg/shan-dictionary-offline',
    //   component: 'a',
    //   newTab: true
    // }
  ]

  const changeDarkMode = () => {
    const dm = !darkMode
    setDarkMode(dm)
  }

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    }
    if (!darkMode) {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <>
      <div
        className={`nav-wrap fixed w-screen z-20 top-0 left-0 dark:bg-primary ${
          pathname !== '/' ? 'h-[18vh]' : 'h-[10vh]'
        }`}
      >
        <div className="nav flex p-4 bg-blue-600 justify-between items-center">
          <div className="flex items-center">
            <Link className="ml-2 text-white dark:text-gray-200" to="/">
              <Logo width="100" />
            </Link>
          </div>
          <ul className="hidden transition-all md:pt-0 md:w-auto md:h-auto md:block">
            {menus.map((m, index) => {
              return (
                <li key={index} className="md:inline-block">
                  {m.component === 'Link' ? (
                    <Link
                      className="mx-2 text-white dark:text-gray-200"
                      to={m.to}
                    >
                      {m.label}
                    </Link>
                  ) : (
                    <a
                      className="mx-2 text-white dark:text-gray-200"
                      target={m.newTab ? '_blank' : '_self'}
                      href={m.to}
                    >
                      {m.label}
                    </a>
                  )}
                </li>
              )
            })}
            <li className="md:inline-block">
              {!darkMode && (
                <span
                  className="flex justify-center cursor-pointer"
                  onClick={changeDarkMode}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 translate-y-2 icon icon-tabler icon-tabler-moon stroke-white dark:stroke-gray-200"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                  </svg>
                </span>
              )}
              {darkMode && (
                <span
                  className="flex justify-center cursor-pointer"
                  onClick={changeDarkMode}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 translate-y-2 icon icon-tabler icon-tabler-sun stroke-white dark:stroke-gray-200"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                  </svg>
                </span>
              )}
            </li>
          </ul>
          <span className="z-30 md:hidden cursor-pointer" onClick={toggleMenu}>
            {showMobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-square-x stroke-white"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M10 10l4 4m0 -4l-4 4" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-align-right stroke-white"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="10" y1="12" x2="20" y2="12" />
                <line x1="6" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </span>
        </div>

        {pathname !== '/' && <SecondNav />}
      </div>
      <div
        className={`${
          showMobileMenu
            ? 'top-1/2  -translate-y-1/2'
            : '-top-[-200%] translate-y-0'
        } transition duration-300 fixed p-4 shadow-lg left-1/2 -translate-x-1/2 w-[80%] bg-blue-600 dark:bg-black z-30 mobile-meu block md:hidden`}
      >
        <ul>
          {menus.map((m, index) => {
            return (
              <li
                key={index}
                className="border-b p-2"
                onClick={(): void => setShowMobileMenu(false)}
              >
                {m.component === 'Link' ? (
                  <Link
                    className="mx-2 text-white dark:text-gray-200"
                    to={m.to}
                  >
                    {m.label}
                  </Link>
                ) : (
                  <a
                    className="mx-2 text-white dark:text-gray-200"
                    target={m.newTab ? '_blank' : '_self'}
                    href={m.to}
                  >
                    {m.label}
                  </a>
                )}
              </li>
            )
          })}
          <li className="pb-4">
            {!darkMode && (
              <span
                className="flex justify-center cursor-pointer"
                onClick={changeDarkMode}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 translate-y-2 icon icon-tabler icon-tabler-moon stroke-white dark:stroke-gray-200"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
              </span>
            )}
            {darkMode && (
              <span
                className="flex justify-center cursor-pointer"
                onClick={changeDarkMode}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 translate-y-2 icon icon-tabler icon-tabler-sun stroke-white dark:stroke-gray-200"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                </svg>
              </span>
            )}
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
