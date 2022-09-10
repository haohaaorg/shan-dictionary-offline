import SearchBox from '../components/SearchBox'

const Home = () => {
  return (
    <div className="dark:bg-primary wrapper clear-both sm:clear-none w-full h-full p-4 flex items-center justify-center">
      <div className="bg-white dark:bg-primary transition-all border border-gray-50 dark:border-gray-900 dark:bg-black max-w-[600px] w-full mx-auto rounded p-4 shadow-xl">
        <SearchBox />
      </div>
    </div>
  )
}

export default Home
