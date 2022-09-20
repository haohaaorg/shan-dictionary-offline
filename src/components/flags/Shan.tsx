import { CSSProperties } from 'react'

const ShanFlag = () => {
  const WhiteColor: CSSProperties = {
    stroke: 'none',
    fill: '#FFFFFF',
    strokeMiterlimit: '10'
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ isolation: 'isolate' }}
      viewBox="645 306 512 335.45"
      width="30"
      height="30"
    >
      <defs>
        <clipPath id="_clipPath_iNjCN0RxUAl0znxe666ehn27yhLH2WfX">
          <rect x="645" y="306" width="512" height="335.45" />
        </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_iNjCN0RxUAl0znxe666ehn27yhLH2WfX)">
        <path
          d="M 680.222 306 L 1121.778 306 C 1141.217 306 1157 321.783 1157 341.222 L 1157 606.228 C 1157 625.667 1141.217 641.45 1121.778 641.45 L 680.222 641.45 C 660.783 641.45 645 625.667 645 606.228 L 645 341.222 C 645 321.783 660.783 306 680.222 306 Z"
          style={WhiteColor}
        />
        <clipPath id="_clipPath_WjcML27PGSW3XBntsXK9HpkrHmmbywvT">
          <path
            d="M 680.222 306 L 1121.778 306 C 1141.217 306 1157 321.783 1157 341.222 L 1157 606.228 C 1157 625.667 1141.217 641.45 1121.778 641.45 L 680.222 641.45 C 660.783 641.45 645 625.667 645 606.228 L 645 341.222 C 645 321.783 660.783 306 680.222 306 Z"
            style={WhiteColor}
          />
        </clipPath>
        <g clipPath="url(#_clipPath_WjcML27PGSW3XBntsXK9HpkrHmmbywvT)">
          <rect
            x="645"
            y="524.5"
            width="512"
            height="117"
            transform="matrix(1,0,0,1,0,0)"
            fill="rgb(255,0,0)"
          />
          <rect
            x="645"
            y="418"
            width="512"
            height="106.5"
            transform="matrix(1,0,0,1,0,0)"
            fill="rgb(2,134,0)"
          />
          <rect
            x="645"
            y="306"
            width="512"
            height="112"
            transform="matrix(1,0,0,1,0,0)"
            fill="rgb(255,200,0)"
          />
          <circle
            vectorEffect="non-scaling-stroke"
            cx="892.5"
            cy="474.5"
            r="70.5"
            fill="rgb(235,235,235)"
          />
        </g>
      </g>
    </svg>
  )
}

export default ShanFlag
