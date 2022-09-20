import { T } from '../helpers/lang'

type Props = { searchValue: string }
const Noresult: React.FC<Props> = ({ searchValue }) => {
  return (
    <div className="p-2 my-2 bg-blue-100 rounded shadow">
      <strong className="p-1 text-sm rounded bg-blue-700 text-white">
        {searchValue}
      </strong>{' '}
      {T('no_result')}
    </div>
  )
}

export default Noresult
