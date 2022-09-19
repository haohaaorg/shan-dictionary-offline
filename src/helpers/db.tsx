import { Favourite, Word, WordDetail } from '../types'

const GetAPIURL = (dictType: string): string => {
  switch (dictType) {
    case 'shn2eng':
      return import.meta.env.VITE_APP_SHN_TO_ENG_API
    case 'eng2shn':
      return import.meta.env.VITE_APP_ENG_TO_SHN_API
    case 'shn2shn':
      return import.meta.env.VITE_APP_SHN_TO_SHN_API
    case 'shn2bur':
      return import.meta.env.VITE_APP_SHN_TO_BUR_API
    case 'bur2shn':
      return import.meta.env.VITE_APP_BUR_TO_SHN_API
    case 'tha2shn':
      return import.meta.env.VITE_APP_THA_TO_SHN_API
    case 'pli2shn':
      return import.meta.env.VITE_APP_PLI_TO_SHN_API
    default:
      return import.meta.env.VITE_APP_SHN_TO_ENG_API
  }
}

const getWordAPIURL = (dictType: string): string => {
  switch (dictType) {
    case 'shn2eng':
      return import.meta.env.VITE_APP_SHN_TO_ENG_WORDS_API
    case 'eng2shn':
      return import.meta.env.VITE_APP_ENG_TO_SHN_WORDS_API
    case 'shn2shn':
      return import.meta.env.VITE_APP_SHN_TO_SHN_WORDS_API
    case 'shn2bur':
      return import.meta.env.VITE_APP_SHN_TO_BUR_WORDS_API
    case 'bur2shn':
      return import.meta.env.VITE_APP_BUR_TO_SHN_WORDS_API
    case 'tha2shn':
      return import.meta.env.VITE_APP_THA_TO_SHN_WORDS_API
    case 'pli2shn':
      return import.meta.env.VITE_APP_PLI_TO_SHN_WORDS_API
    default:
      return import.meta.env.VITE_APP_SHN_TO_ENG_WORDS_API
  }
}

export const fetchDetailData = async (id: string, dictType: string) => {
  const res = await fetch(GetAPIURL(dictType))
  const data = await res.json()
  const wordObj: WordDetail = data.find((e: WordDetail) => e._id === id)
  return wordObj
}

export const fetchWordData = async (dictType: string) => {
  const res = await fetch(getWordAPIURL(dictType))
  const wordsOnly = await res.json()
  const wordLists: Word[] = wordsOnly
  return wordLists
}

export const fullTextSearch = async (
  searchValue: string,
  dictType: string
): Promise<Word[]> => {
  const wordLists = await fetchWordData(dictType)
  return wordLists
    .filter((w) => {
      if (!w.word) return false
      return w.word.includes(searchValue)
    })
    .sort((a, b) => a.word.length - b.word.length)
}

export const getWordById = async (
  id: string,
  dictType: string
): Promise<Word> => {
  const wordLists = await fetchWordData(dictType)
  const filtered: Word = (await wordLists.find((w) => w._id === id)) || {
    _id: '',
    word: ''
  }
  return filtered
}

export const getFavoritesFromLocal = () => {
  return localStorage.getItem('sd_favourites')
    ? JSON.parse(localStorage.getItem('sd_favourites') || '[]')
    : []
}

export const setFavoritesToLocal = async (obj: Favourite) => {
  const prev_favorites = await getFavoritesFromLocal()
  prev_favorites.push(obj)
  localStorage.setItem('sd_favourites', JSON.stringify(prev_favorites))
}

export const removeFavoriteFromLocal = async (id: string) => {
  const prev_favorites = await getFavoritesFromLocal()
  const favorites = prev_favorites.filter((f: any) => f._id !== id)
  localStorage.setItem('sd_favourites', JSON.stringify(favorites))
  return favorites
}

export const announcement = async () => {
  if (!navigator.onLine) {
    return
  }

  const e = await fetch(
    `${
      import.meta.env.VITE_APP_SHAN_DICTIONARY_API
    }/api/collections/entries/announcement`
  )
  const { entries } = await e.json()
  if (entries.length === 0) {
    return
  }

  return entries[0]
}
