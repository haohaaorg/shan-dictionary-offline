import { Dispatch, SetStateAction } from 'react'
import { T } from './lang'
import { notyf } from './notyf'

export const hitAPIOnPageLoading = async (
  setPageLoading: Dispatch<SetStateAction<boolean>>
): Promise<void> => {
  try {
    // Just hit the API to make it fast in the next call
    await fetch(import.meta.env.VITE_APP_ENG_TO_SHN_API)
    await fetch(import.meta.env.VITE_APP_SHN_TO_ENG_API)
    await fetch(import.meta.env.VITE_APP_SHN_TO_SHN_API)
    await fetch(import.meta.env.VITE_APP_SHN_TO_BUR_API)
    await fetch(import.meta.env.VITE_APP_BUR_TO_SHN_API)
    await fetch(import.meta.env.VITE_APP_THA_TO_SHN_API)
    await fetch(import.meta.env.VITE_APP_PLI_TO_SHN_API)

    await fetch(import.meta.env.VITE_APP_ENG_TO_SHN_WORDS_API)
    await fetch(import.meta.env.VITE_APP_SHN_TO_ENG_WORDS_API)
    await fetch(import.meta.env.VITE_APP_SHN_TO_SHN_WORDS_API)
    await fetch(import.meta.env.VITE_APP_SHN_TO_BUR_WORDS_API)
    await fetch(import.meta.env.VITE_APP_BUR_TO_SHN_WORDS_API)
    await fetch(import.meta.env.VITE_APP_THA_TO_SHN_WORDS_API)
    await fetch(import.meta.env.VITE_APP_PLI_TO_SHN_WORDS_API)

    setPageLoading(false)
  } catch {
    notyf.error(T('app_error'))
  }
}
