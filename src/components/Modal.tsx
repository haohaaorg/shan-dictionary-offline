import { useEffect, useState } from 'react'
import Xicon from './Xicon'

type Props = {
  open: boolean
  title: string
  showCloseIcon: boolean
  handleClose: (param: boolean) => void
  children?: React.ReactNode
}

const Modal: React.FC<Props> = ({
  open,
  showCloseIcon,
  handleClose,
  title,
  children
}) => {
  const [closIcon, setCloseIcon] = useState(false)

  useEffect(() => {
    if (!showCloseIcon) return
    setCloseIcon(true)
  }, [showCloseIcon])

  return (
    <div
      className={`fixed bg-[#00000020] top-0 left-0 w-screen h-screen z-50 flex justify-center items-center ${
        !open ? 'hidden' : ''
      }`}
    >
      <div className="modal w-full dark:bg-black dark:text-white max-w-[400px] mx-auto bg-white shadow-lg rounded p-4">
        <div className="head flex gap-2 justify-between p-2">
          <h4 className="ml-2 text-xl">{title}</h4>
          {closIcon && (
            <button onClick={() => handleClose(false)}>
              <Xicon />
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
