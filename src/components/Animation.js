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
      <g className="coin quid">
        <Coin x="68" y="155">
          £
        </Coin>
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
