import CloseIcon from './CloseIcon'

type Props = {
  open: boolean
  handleClose: (param: boolean) => void
}

const Drawer: React.FC<Props> = ({ open, handleClose }) => {
  return (
    <>
      <div
        onClick={() => handleClose(false)}
        className={`overlay bg-opacity-50 bg-gray-500 w-screen transition-all fixed top-0 ${
          open ? 'opacity-100 h-screen' : 'h-0 opacity-0'
        }`}
      ></div>
      <div
        className={`fixed top-0 drawer bg-white dark:bg-primary dark:text-gray-200 p-4 transition-all h-screen  duration-500 shadow-lg w-[70vw] md:w-[50vw] lg:w-[40vw] ${
          open ? 'right-0' : 'right-[-200%]'
        }`}
      >
        <CloseIcon openDrawer={handleClose} />
        <h4 className="text-4xl">Drawer!</h4>
      </div>
    </>
  )
}

export default Drawer
