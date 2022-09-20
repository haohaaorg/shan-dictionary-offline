import { useContext, useState } from 'react'
import { AppContext } from '../context'
import EnglishFlag from './flags/English'
import ShanFlag from './flags/Shan'

type Props = {
  position?: string
}
const LanguageDropdown: React.FC<Props> = ({ position }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { language, setLanguage } = useContext(AppContext)
  return (
    <div className="relative inline-block text-left translate-y-2 mx-2">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        type="button"
        className="inline-flex w-full justify-center items-center gap-2 rounded-md text-sm font-medium text-white shadow-sm focus:outline-none"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {language === 'English' ? <EnglishFlag /> : <ShanFlag />}
        <svg
          className={`-mr-1 h-5 w-5 transition-all ${
            showDropdown ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`transform  ${position === 'left' ? 'left-0' : 'right-4'} ${
          !showDropdown ? `opacity-0 scale-95 hidden` : `opacity-100 scale-100`
        } transition ease-out absolute z-30 mt-2 origin-top-right rounded-md bg-white dark:bg-primary dark:text-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <a
            href="#"
            onClick={() => {
              setLanguage('English')
              setShowDropdown(false)
            }}
            className={`text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-black ${
              language === 'Shan' ? 'block' : 'hidden'
            } px-4 py-2 text-sm`}
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            <EnglishFlag />
          </a>
          <a
            href="#"
            onClick={() => {
              setLanguage('Shan')
              setShowDropdown(false)
            }}
            className={`text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-black ${
              language === 'English' ? 'block' : 'hidden'
            } px-4 py-2 text-sm`}
            role="menuitem"
            tabIndex={-1}
            id="menu-item-2"
          >
            <ShanFlag />
          </a>
        </div>
      </div>
    </div>
  )
}

export default LanguageDropdown
