import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFavoritesFromLocal, removeFavoriteFromLocal } from '../helpers/db'
import { notyf } from '../helpers/notyf'
import { Favourite } from '../types'

const Favorite = () => {
  const [favorites, setFavorites] = useState(getFavoritesFromLocal())

  const removeWord = async (id: string) => {
    const favorites = await removeFavoriteFromLocal(id)
    console.log(favorites)
    setFavorites(favorites)
    notyf.success('Successfully removed from favorites')
  }

  return (
    <div className="m-4 p-4 bg-white shadow-lg rounded dark:bg-primary">
      <h3 className="text-2xl my-4 font-bold dark:text-white">
        Favorite Words
      </h3>
      <div className="favorites max-w-[500px]">
        <ul className="flex flex-col">
          {favorites &&
            favorites.map((f: Favourite) => {
              return (
                <li key={f._id} className="w-full py-1 relative">
                  <Link
                    className="p-2 dark:text-white dark:bg-black hover:text-blue-600 block border dark:border-gray-800 rounded-md transition shadow hover:shadow-blue-600"
                    to={`${f.link}`}
                  >
                    {f.word}
                  </Link>
                  <button
                    className="absolute top-0 right-0 z-10 p-2"
                    onClick={() => removeWord(f._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trash-x transition stroke-red-500 hover:stroke-red-700 hover:fill-red-200"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7h16" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      <path d="M10 12l4 4m0 -4l-4 4" />
                    </svg>
                  </button>
                </li>
              )
            })}

          {favorites.length == 0 ? (
            <div className="dark:text-gray-300">No Favorite Words Yet.</div>
          ) : (
            ''
          )}
        </ul>
      </div>
    </div>
  )
}
export default Favorite
