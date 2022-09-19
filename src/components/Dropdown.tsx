import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context'
import { notyf } from '../helpers/notyf'
import Bur2shn from './logos/Bur2shn'
import Eng2shn from './logos/Eng2shn'
import Pli2shn from './logos/Pli2shn'
import Shn2bur from './logos/Shn2bur'
import Shn2eng from './logos/Shn2eng'
import Shn2shn from './logos/Shn2shn'
import Tha2shn from './logos/Tha2shn'

const Dropdown = () => {
  type DropdownType = {
    label: string
    value: string
  }

  const { dropdownLists, dictType, setDictType } = useContext(AppContext)

  const [showDropdown, setShowDropdown] = useState(false)
  const [setSelected] = useState<DropdownType | undefined>({
    label: 'Shan to English',
    value: 'shn2eng'
  })

  const [options, setOptions] = useState<DropdownType[]>(
    dropdownLists.filter((e) => e.value !== 'shn2eng')
  )

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const changeValue = (value: string) => {
    const theRestOptions = dropdownLists.filter((e) => e.value !== value)
    const selectedOption = dropdownLists.find((e) => e.value === value)
    setSelected(selectedOption)

    const selectedValue = selectedOption?.value || 'shn2eng'

    setDictType(selectedValue)
    setOptions(theRestOptions)
    localStorage.setItem('sd_dict_type_lang', selectedValue)
    notyf.success('Switched to ' + selectedOption?.label)

    setShowDropdown(false)
  }

  useEffect(() => {
    const currentDictType = localStorage.getItem('sd_dict_type_lang')
    if (currentDictType) {
      setDictType(currentDictType)
    }
  }, [])

  return (
    <div className="absolute">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="ml-1 inline-flex items-center justify-center rounded-md p-[.4rem] bg-transparent dark:text-gray-200 text-sm font-medium text-gray-700 focus:outline-none dark:focus:ring-blue-900 focus:ring-blue-600"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {dictType === 'shn2eng' ? <Shn2eng size={32} /> : ''}
          {dictType === 'eng2shn' ? <Eng2shn size={32} /> : ''}
          {dictType === 'shn2shn' ? <Shn2shn size={32} /> : ''}
          {dictType === 'shn2bur' ? <Shn2bur size={32} /> : ''}
          {dictType === 'bur2shn' ? <Bur2shn size={32} /> : ''}
          {dictType === 'tha2shn' ? <Tha2shn size={32} /> : ''}
          {dictType === 'pli2shn' ? <Pli2shn size={32} /> : ''}

          <svg
            className={`-mr-1 ml-2 h-5 w-5 transition-all duration-300 ${
              showDropdown ? '-rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          showDropdown
            ? 'opacity-100 scale-100 ease-out duration-100'
            : 'opacity-0 scale-95 ease-in duration-75 pointer-events-none'
        } transition z-10 transform origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          {options.map((option) => {
            return (
              <span
                key={option.value}
                className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                tabIndex={-1}
                onClick={() => changeValue(option.value)}
                id="menu-item-2"
              >
                {option.label}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
