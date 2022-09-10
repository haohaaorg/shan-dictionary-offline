import { ReactElement, useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AppContext } from './context'
import Home from './pages/Home'
import Loading from './components/Loading'
import { hitAPIOnPageLoading } from './helpers/setUp'
import SingleWord from './pages/SingleWord'
import { useLocation } from 'react-router-dom'
import Credit from './pages/Credit'
import Favorites from './pages/Favorites'

function App(): ReactElement {
  const { pathname } = useLocation()
  const { pageLoading, setPageLoading } = useContext(AppContext)

  useEffect(() => {
    ;(async () => {
      await hitAPIOnPageLoading(setPageLoading)
    })()
  }, [])

  return (
    <>
      {pageLoading && (
        <div className="w-full h-screen flex items-center justify-center">
          <Loading message="Loading..." />
        </div>
      )}
      {!pageLoading && (
        <>
          <div className="absolute top-0 left-0 wrapper bg-[url('bg.svg')] opacity-10 h-screen w-full bg-fixed bg-center bg-no-repeat bg-cover -z-10 dark:bg-primary dark:opacity-100"></div>
          <Navbar />
          <div
            className={`${
              pathname === '/' ? 'mt-[10vh]' : 'mt-[32vh] md:mt-[24vh]'
            } flex  flex-col ${
              pathname === '/' ? 'h-[90vh]' : 'h-[68h] md:h-[76vh]'
            } dark:bg-primary overflow-x-hidden overflow-y-auto`}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>; ; ;
              <Route path="/credit" element={<Credit />}></Route>;
              <Route path="/favorites" element={<Favorites />}></Route>
              <Route
                path="/words/:id/:dicttype"
                element={<SingleWord />}
              ></Route>
            </Routes>
          </div>
        </>
      )}
    </>
  )
}

export default App
