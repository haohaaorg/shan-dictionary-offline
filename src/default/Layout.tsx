import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { announcement } from '../helpers/db'
import Xicon from '../components/Xicon'
import Modal from '../components/Modal'

type Props = {
  children?: React.ReactNode
}

type Message = {
  message: string
  status: string
}

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation()
  const homePage = pathname === '/'
  const [showMessage, setShowMessage] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState<Message>({
    message: '',
    status: 'disable'
  })

  useEffect(() => {
    ;(async () => {
      const notShowing = localStorage.getItem('not-showing')
      if (notShowing === 'true') {
        return
      }
      const msg = await announcement()
      setMessage(msg)
      setShowMessage(true)
    })()
  }, [])

  const dontShowAgain = () => {
    localStorage.setItem('not-showing', 'true')
  }

  const homePageClasses =
    'mt-[10vh] h-[90vh] dark:bg-primary overflow-x-hidden overflow-y-auto'
  const otherPageClasses = 'mt-[24vh] dark:bg-primary p-4 max-w-[800px] mx-auto'

  return (
    <div>
      <Navbar />
      {message?.status === 'enable' && showMessage && (
        <div className="fixed mt-[10vh] z-40 top-0 left-0 w-full">
          <div className="w-[80%] bg-white dark:bg-black dark:text-white p-4 shadow mx-auto text-center flex gap-2 justify-between">
            <div dangerouslySetInnerHTML={{ __html: message?.message }}></div>
            <button onClick={() => setShowModal(true)}>
              <Xicon />
            </button>
          </div>
        </div>
      )}
      <div className={homePage ? homePageClasses : otherPageClasses}>
        {children}
      </div>
      {!homePage ? <Footer /> : ''}
      <Modal
        title="Want to close the message?"
        open={showModal}
        handleClose={() => setShowModal(false)}
        showCloseIcon={false}
      >
        <div className="flex my-2 p-2 mt-5 gap-2 justify-between">
          <button
            className="bg-yellow-100 px-4 py-1 rounded-2xl hover:bg-yellow-200 dark:bg-yellow-700 dark:hover:bg-yellow-800 dark:text-white"
            onClick={() => {
              setShowModal(false)
              setShowMessage(false)
              dontShowAgain()
            }}
          >
            Don't show this message again
          </button>
          <button
            className="bg-blue-100 px-4 py-1 rounded-2xl hover:bg-blue-200 dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white"
            onClick={() => {
              setShowModal(false)
              setShowMessage(false)
            }}
          >
            Ok
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Layout
