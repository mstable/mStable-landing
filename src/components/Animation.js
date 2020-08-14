import React from "react";

const Coin = ({ x = "0", y = "0", children }) => (
  <svg x={x} y={y} viewBox="0 0 100 100" width="29" height="29">
    <defs>
      <mask id={`mask-${children}`}>
        <rect x="0" y="0" fill="white" width="100" height="100" />
        <text
          x="50"
          y="48"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="black"
        >
          {children}
        </text>
        <line x1="18" y1="82" x2="82" y2="82" stroke="black" strokeWidth="10" />
      </mask>
    </defs>

    <rect
      x="0"
      y="0"
      fill="var(--black)"
      width="100"
      height="100"
      mask={`url(#mask-${children})`}
    />
  </svg>
);

export default ({ stage }) => (
  <svg
    viewBox="-140 -150 500 500"
    preserveAspectRatio="xMidYMid meet"
    alt="mStable"
    id="animation"
    className={`stage-${stage}`}
  >
    <use
      xlinkHref={`#logo-m`}
      id="aniMeta"
      x="0"
      y="0"
      width="216"
      height="192"
    />

    <g className="coins">
      <g className="coin buck">
        <Coin x="24" y="155">
          $
        </Coin>
      </g>
      <g className="coin bit">
        <svg x="68" y="155" viewBox="0 0 100 100" width="29" height="29">
          <defs>
            <mask id="mask-mbtc">
              <rect x="0" y="0" fill="white" width="100" height="100" />
              <line x1="18" y1="82" x2="82" y2="82" stroke="black" strokeWidth="10" />
              <g transform="translate(25, 10)">
                <g transform="scale(0.18)">
                  <path fill="black" d="M217.021 167.042c18.631-9.483 30.288-26.184 27.565-54.007-3.667-38.023-36.526-50.773-78.006-54.404l-.008-52.741h-32.139l-.009 51.354c-8.456 0-17.076.166-25.657.338l-.007-51.685-32.11-.003-.006 52.728c-6.959.142-13.793.277-20.466.277v-.156l-44.33-.018.006 34.282s23.734-.446 23.343-.013c13.013.009 17.262 7.559 18.484 14.076l.01 60.083v84.397c-.573 4.09-2.984 10.625-12.083 10.637.414.364-23.379-.004-23.379-.004l-6.375 38.335h41.817c7.792.009 15.448.13 22.959.19l.028 53.338 32.102.009-.009-52.779c8.832.18 17.357.258 25.684.247l-.009 52.532h32.138l.018-53.249c54.022-3.1 91.842-16.697 96.544-67.385 3.79-40.809-15.434-59.025-46.105-66.379zM109.535 95.321c18.126 0 75.132-5.767 75.14 32.064-.008 36.269-56.996 32.032-75.14 32.032V95.321zm-.014 167.126l.014-70.672c21.778-.006 90.085-6.261 90.094 35.32.009 39.876-68.316 35.336-90.108 35.352z"/>
                </g>
              </g>
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            fill="var(--black)"
            width="100"
            height="100"
            mask={`url(#mask-mbtc)`}
          />
        </svg>
      </g>
      <g className="coin euro">
        <Coin x="114" y="155">
          €
        </Coin>
      </g>
      <g className="coin gold">
        <Coin x="158" y="155">
          G
        </Coin>
      </g>
    </g>

    <path
      id="aniSdk"
      d="M 105,169.5 H 246 V -32 H -32 V 169.5 Z"
      fill="none"
      stroke="var(--black)"
      strokeWidth="30"
    />
  </svg>
);
