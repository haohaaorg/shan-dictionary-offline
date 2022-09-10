import SearchBox from './SearchBox'

const SecondNav = () => {
  return (
    <div className="bg-white dark:bg-primary rounded shadow w-full">
      <div className="search-wrap max-w-[600px] p-4 w-full">
        <SearchBox />
      </div>
    </div>
  )
}

export default SecondNav
