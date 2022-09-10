import { Link } from 'react-router-dom'

type Props = {
  id: string
  word: string
  dictType: string
}
const WordList: React.FC<Props> = ({ id, word, dictType }) => {
  return (
    <li
      id={id}
      className="p-1 transition-all 
                fadeInUp bg-white 
                dark:bg-black
                dark:text-gray-200
                dark:hover:bg-primary-hover
                border-gray-300
                dark:border-gray-700
                cursor-pointer 
                rounded
                border-b
                hover:bg-blue-50"
    >
      <Link className="w-full p-1 block" to={`/words/${id}/${dictType}`}>
        {word}
      </Link>
    </li>
  )
}

export default WordList
