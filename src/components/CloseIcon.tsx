type Props = {
  openDrawer: (arg: boolean) => void
}
const CloseIcon: React.FC<Props> = ({ openDrawer }) => {
  return (
    <span onClick={() => openDrawer(false)} className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-blue-600 icon icon-tabler icon-tabler-square-x"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M10 10l4 4m0 -4l-4 4" />
      </svg>
    </span>
  )
}

export default CloseIcon
