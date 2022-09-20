import { useContext, useEffect, useRef, useState } from 'react'
import Loading from '../components/Loading'
import Noresult from '../components/Noresult'
import SearchIcon from '../components/SearchIcon'
import WordList from '../components/WordList'
import Xicon from '../components/Xicon'
import { fullTextSearch } from '../helpers/db'
import { Word } from '../types'
import { AppContext } from '../context'
import Dropdown from '../components/Dropdown'
import { useLocation } from 'react-router-dom'
import { T } from '../helpers/lang'

const SearchBox = () => {
  const { pathname } = useLocation()

  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [disableInput] = useState(false)
  const [noResult, setNoResult] = useState(false)
  const { dictType } = useContext(AppContext)

  const [searchingWordList, setSearchingWordList] = useState<Word[]>([])
  const isFirstRun = useRef(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const resetSearch = (): void => {
    setSearchValue('')
    setSearchingWordList([])
    setNoResult(false)
    ;(inputRef.current as HTMLInputElement).value = ''
  }

  useEffect(() => {
    resetSearch()
  }, [pathname])

  useEffect(() => {
    //skip first run on component mount
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }

    const timeout = setTimeout(() => {
      triggerSearch()
    }, 400) //2000 - timeout to execute this function if timeout will be not cleared

    return () => clearTimeout(timeout) //clear timeout (delete function execution)
  }, [searchValue])

  const afterSearchAndNotFound = () => {
    if (loading) {
      setNoResult(true)
    }
    setSearchingWordList([])
    setLoading(false)
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const value = (e.target as HTMLInputElement).value
    setLoading(value !== '')
    setNoResult(false)
    setSearchingWordList([])
    setSearchValue(value)
  }

  const triggerSearch = async () => {
    if (!searchValue) {
      setSearchingWordList([])
      setLoading(false)
      return
    }

    const filtered = await fullTextSearch(searchValue, dictType)
    if (filtered.length == 0) {
      afterSearchAndNotFound()
      return
    }

    const getTenArray = filtered.slice(0, 10)
    setSearchingWordList(getTenArray)
    setLoading(false)
  }

  return (
    <div className="w-full relative">
      <Dropdown />
      <input
        disabled={disableInput}
        onKeyUp={handleSearch}
        type="text"
        ref={inputRef}
        placeholder={T('search')}
        className="pl-[5rem] disabled:cursor-not-allowed bg-white dark:bg-primary-hover dark:text-gray-200 w-full pr-8 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-blue-600"
      />
      {searchValue.length === 0 && <SearchIcon />}
      {searchValue.length > 0 && (
        <span
          onClick={resetSearch}
          className="cursor-pointer absolute top-3 right-2"
        >
          <Xicon />
        </span>
      )}
      <ul className="md:ml-[4rem] p-0 mt-2 bg-white dark:bg-black overflow-y-auto overflow-x-hidden no-scrollbar">
        {searchingWordList &&
          searchingWordList.map(({ _id, word }) => (
            <WordList key={_id} id={_id} dictType={dictType} word={word} />
          ))}
      </ul>
      {loading && <Loading message={T('searching')} />}
      {noResult && <Noresult searchValue={searchValue} />}
    </div>
  )
}

export default SearchBox
