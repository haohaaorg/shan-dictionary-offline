import { Dispatch, SetStateAction } from 'react'

interface Word {
  word: string
  _id: string
}

interface WordDetail {
  word: string
  _id: string
  type: string
  pronunciation: string | null
  definition: string
}

type DropdownOption = {
  label: string
  value: string
}

interface initialStateType {
  words: Word[]
  setWords: Dispatch<SetStateAction<WordDetail[]>>
  pageLoading: boolean
  setPageLoading: Dispatch<SetStateAction<boolean>>
  dropdownLists: DropdownOption[]
  dictType: string
  setDictType: Dispatch<SetStateAction<string>>
  language: string
  setLanguage: Dispatch<SetStateAction<string>>
}

interface Favourite {
  _id: string
  link: string
  word: string
}

export type { Word, WordDetail, initialStateType, Favourite }
