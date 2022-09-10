type Props = {
  message: string
}
const Loading: React.FC<Props> = ({ message }) => {
  return (
    <div className="loading p-2 flex gap-8">
      <div className="book">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="dark:text-gray-200">{message}</div>
    </div>
  )
}

export default Loading
