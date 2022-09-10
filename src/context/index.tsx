import { createContext, useEffect, useState } from 'react'
import { initialStateType, WordDetail } from '../types'

const initialState = {
  pageLoading: false,
  setWords: (): void => {
    /* */
  },
  words: [],
  setPageLoading: (): void => {
    /* */
  },
  dropdownLists: [
    { label: 'Shan - English', value: 'shn2eng' },
    { label: 'English - Shan', value: 'eng2shn' },
    { label: 'Shan - Shan', value: 'shn2shn' },
    { label: 'Shan - Burmese', value: 'shn2bur' },
    { label: 'Burmese - Shan', value: 'bur2shn' },
    { label: 'Thai - Shan', value: 'tha2shn' },
    { label: 'Pali - Shan', value: 'pli2shn' }
  ],
  dictType: 'shn2eng',
  setDictType: (): void => {
    /* */
  }
}

export const AppContext = createContext<initialStateType>(initialState)

type Props = {
  children?: React.ReactNode
}

export const AppProvider: React.FC<Props> = (props) => {
  const [words, setWords] = useState<WordDetail[]>([])
  const [pageLoading, setPageLoading] = useState(true)
  const [dictType, setDictType] = useState('shn2eng')

  useEffect(() => {
    // const fetchData = async () => {
    //   const e = await fetch('https://example.com/products')
    //   const res = await e.json()
    //   setWords(res.entries)
    // }
    // fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        words,
        setWords,
        pageLoading,
        setPageLoading,
        dropdownLists: initialState.dropdownLists,
        dictType,
        setDictType
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
