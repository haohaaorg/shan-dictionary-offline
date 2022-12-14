import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import SpeakIcon from '../components/SpeakIcon'
import {
  fetchDetailData,
  getFavoritesFromLocal,
  setFavoritesToLocal
} from '../helpers/db'
import { decryptMe } from '../helpers/encryption'
import { T } from '../helpers/lang'
import { notyf } from '../helpers/notyf'
import { Favourite, WordDetail } from '../types'

const SingleWord = () => {
  const { id, dicttype } = useParams()
  const { pathname } = useLocation()

  const [ttsAvailable, setTTSAvailable] = useState<boolean>(false)
  const [noResult, setNoResult] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [wordDetail, setWordDetail] = useState<WordDetail>({
    _id: '',
    word: '',
    type: '',
    pronunciation: null,
    definition: ''
  })

  const checkIfTTSAvailable = (dicttype: string) => {
    const TTSDict = [
      'shn2eng',
      'eng2shn',
      'shn2shn',
      'shn2bur',
      'bur2shn',
      'tha2shn',
      'shn2pli'
    ]
    const isAvailable = TTSDict.includes(dicttype)
    setTTSAvailable(isAvailable)
  }

  useEffect(() => {
    ;(async () => {
      setNoResult(false)
      setLoading(true)
      if (!id) return

      const wordDetail = await fetchDetailData(id, dicttype || 'shn2eng')
      if (!wordDetail) {
        setNoResult(true)
        return
      }
      const { _id, word, type, definition } = wordDetail
      const decrypted = {
        _id,
        word,
        type,
        pronunciation: wordDetail?.pronunciation,
        definition: decryptMe(definition, import.meta.env.VITE_APP_KEY)
      }
      setWordDetail(decrypted)
      setLoading(false)
      checkIfTTSAvailable(dicttype || 'eng2shn')
    })()
  }, [pathname])

  useEffect(() => {
    window.speechSynthesis.getVoices()
  }, [])

  const isExitInFavorite = (id: string) => {
    const prev_favorites = getFavoritesFromLocal()
    const found = prev_favorites.filter((f: Favourite) => f._id === id)
    return found.length > 0
  }

  const addToFavorite = (wordDetail: WordDetail) => {
    if (!pathname) return

    if (isExitInFavorite(wordDetail?._id)) {
      notyf.error(T('already_added_to_favorites'))
      return
    }

    const _id = wordDetail?._id
    const link = pathname
    const word = wordDetail?.word
    setFavoritesToLocal({ _id, link, word })
    notyf.success(T('added_to_favorite'))
  }

  return (
    <>
      {noResult && (
        <p className="mx-4 bg-red-200 p-2 rounded shadow">
          {T('no_result_and_error')}
        </p>
      )}

      {loading && !noResult && <Loading message={T('searching')} />}

      {!noResult && !loading && (
        <div className="word-details bg-white dark:bg-primary p-4 rounded shadow mx-4 dark:bg-black">
          <div className="flex gap-2 items-center justify-between mb-2 py-2 border-b dark:border-gray-700">
            <div className="flex gap-2 items-center">
              <h2 className="my-3 dark:text-gray-200 text-4xl font-bold">
                {wordDetail?.word}{' '}
              </h2>
              {ttsAvailable && (
                <SpeakIcon
                  speech={wordDetail?.word}
                  lang={dicttype || 'eng2shn'}
                />
              )}
            </div>
            <div>
              <button onClick={() => addToFavorite(wordDetail)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-heart stroke-blue-600 hover:fill-blue-700 hover:stroke-blue-700"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
              </button>
            </div>
          </div>
          {wordDetail?.pronunciation && (
            <p className="dark:text-gray-200">
              <i>{wordDetail?.pronunciation}</i>
            </p>
          )}
          {wordDetail?.type && (
            <p className="dark:text-gray-200">
              <strong>({wordDetail?.type})</strong>
            </p>
          )}
          <p className="dark:text-gray-200">{wordDetail?.definition}</p>
        </div>
      )}
    </>
  )
}

export default SingleWord
