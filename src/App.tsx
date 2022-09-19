import { ReactElement, useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppContext } from './context'
import Home from './pages/Home'
import Loading from './components/Loading'
import { hitAPIOnPageLoading } from './helpers/setUp'
import SingleWord from './pages/SingleWord'
import { useLocation } from 'react-router-dom'
import Credit from './pages/Credit'
import Favorites from './pages/Favorites'
import Developers from './pages/Developers'
import Layout from './default/Layout'
import Qna from './pages/Qna'

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
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/credit" element={<Credit />}></Route>
              <Route path="/developers" element={<Developers />}></Route>
              <Route path="/qna" element={<Qna />}></Route>
              <Route path="/favorites" element={<Favorites />}></Route>
              <Route
                path="/words/:id/:dicttype"
                element={<SingleWord />}
              ></Route>
            </Routes>
          </Layout>
        </>
      )}
    </>
  )
}

export default App
