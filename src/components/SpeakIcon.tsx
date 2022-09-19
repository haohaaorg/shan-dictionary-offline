import { FC } from 'react'
import { speakMe } from '../helpers/speak'

type Props = {
  speech: string
  lang: string
}

const SpeakIcon: FC<Props> = ({ speech, lang }) => {
  return (
    <span
      className="group cursor-pointer"
      onClick={() => speakMe(speech, lang)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-blue-600 group-hover:stroke-blue-700 icon icon-tabler icon-tabler-volume"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 8a5 5 0 0 1 0 8" />
        <path d="M17.7 5a9 9 0 0 1 0 14" />
        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
      </svg>
    </span>
  )
}

export default SpeakIcon
