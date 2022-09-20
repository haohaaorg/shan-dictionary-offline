import { createContext, useState } from 'react'
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
  },
  language: 'English',
  setLanguage: (): void => {
    /* */
  }
}

export const AppContext = createContext<initialStateType>(initialState)

type Props = {
  children?: React.ReactNode
}

export const AppProvider: React.FC<Props> = (props) => {
  const [words, setWords] = useState<WordDetail[]>([])
  const [pageLoading, setPageLoading] = useState(false)
  const [dictType, setDictType] = useState('shn2eng')
  const currentLanguage =
    localStorage.getItem('sd_current_language') || 'English'

  const [language, setLanguage] = useState(currentLanguage)

  return (
    <AppContext.Provider
      value={{
        words,
        setWords,
        pageLoading,
        setPageLoading,
        dropdownLists: initialState.dropdownLists,
        dictType,
        setDictType,
        language,
        setLanguage
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
