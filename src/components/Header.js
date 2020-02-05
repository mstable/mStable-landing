/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React from "react";

const logoW = 1108,
  logoH = 192;

const cols = 15,
  rows = 6;

const rowH = 200;

const dashW = 192,
  dashH = 28;

const dashOffsetX = 10,
  dashOffsetY = 154;

const width = logoW * 2.48,
  height = logoH * 7;

const colsOffset = -5,
  rowsOffset = -3;

const viewBox = [(width - logoW) / -2, (height - logoH) / -2, width, height];

const dashes = [];

const clearance = 60;
const clear = {
  minX: 0 - clearance,
  minY: 0 - clearance,
  maxX: logoW + clearance,
  maxY: logoH + clearance
};

const isWithin = (x, y) =>
  x > clear.minX && x < clear.maxX && y > clear.minY && y < clear.maxY;

for (let y = rowsOffset; y < rows + rowsOffset; y++) {
  for (let x = colsOffset; x < cols + colsOffset; x++) {
    const coors = {
      x: x * (dashW + 30) + dashOffsetX,
      y: y * rowH + dashOffsetY
    };
    if (
      (!(y % 2) && x % 2) ||
      (y % 2 && !(x % 2)) ||
      isWithin(coors.x, coors.y) ||
      isWithin(coors.x + dashW, coors.y) ||
      isWithin(coors.x + dashW, coors.y + dashH) ||
      isWithin(coors.x, coors.y + dashH)
    )
      continue;
    dashes.push(coors);
  }
}

// const colorDice = () => {
// 	const rand = Math.random()
// 	if (rand < 0.1) {
// 		return 'blue'
// 	} else if (rand < 0.25) {
// 		return 'yellow'
// 	}
// 	return 'black'
// }

for (let i = 0; i < 7; i++) {
  const index = Math.round(Math.random() * (dashes.length - 1));
  dashes[index].color = "yellow";
}

for (let i = 0; i < 3; i++) {
  const index = Math.round(Math.random() * (dashes.length - 1));
  dashes[index].color = "blue";
}

export default () => (
  <svg
    id="header"
    viewBox={viewBox.join(" ")}
    preserveAspectRatio="xMidYMid slice"
    alt="mStable"
  >
    <g id="header-logo">
      <use xlinkHref={`#logo-m`} x="0" y="0" width="216" height="192" />
      <use xlinkHref={`#logo-stable`} x="216" y="0" width="892" height="192" />
    </g>

    {dashes.map((coors, idx) => (
      <rect
        key={idx}
        className="dash"
        fill={`var(--${coors.color || "black"})`}
        width={dashW}
        height={dashH}
        x={coors.x}
        y={coors.y}
        onMouseOver={e =>
          e.target.classList.add(`wiggle-${Math.round(Math.random() * 3)}`)
        }
        style={{
          animation: `arotate-${Math.round(Math.random() * 3)} ${Math.round(
            Math.random() * 3000 + 500
          )}ms ease 1`
        }}
      />
    ))}
  </svg>
);
