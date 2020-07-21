import React from "react";

export default () => (
  <footer>
    <div className="wrap">
      <p>
        Stability Labs Pty Ltd
      </p>

      <p>
        Powered by Ethereum
      </p>

      <p className="address">
        Full Node Skalitzer Str. 85
        <br />
        Berlin, Germany
      </p>

      <div id="social">
        <a
          href="https://twitter.com/mstable_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Twitter"
            role="img"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M437 152a72 72 0 0 1-40 12 72 72 0 0 0 32-40 72 72 0 0 1-45 17 72 72 0 0 0-122 65 200 200 0 0 1-145-74 72 72 0 0 0 22 94 72 72 0 0 1-32-7 72 72 0 0 0 56 69 72 72 0 0 1-32 1 72 72 0 0 0 67 50 200 200 0 0 1-105 29 200 200 0 0 0 309-179 200 200 0 0 0 35-37"
            />
          </svg>
        </a>

        <a
          href="https://medium.com/mstable"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Medium"
            role="img"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M125 173c0-4-2-9-5-11l-31-38v-6h98l75 166 67-166h93v6l-27 26c-2 1-3 4-3 7v190c0 3 1 6 3 8l27 25v6H289v-6l27-26c3-3 3-4 3-8V193l-76 192h-10l-88-192v129c-1 5 1 11 5 15l35 43v5H85v-5l35-43c4-4 6-10 5-15z"
            />
          </svg>
        </a>

        <a
          href="https://discord.gg/pgCVG7e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Discord"
            role="img"
            viewBox="0 0 512 512"
          >
            <path
              d="m346 392-21-25c41-11 57-39 57-39-52 49-194 51-249 0 0 0 14 26 56 39l-23 25c-70-1-97-48-97-48 0-104 46-187 46-187 47-33 90-33 90-33l3 4c-58 16-83 42-83 42 68-46 208-42 263 0 1-1-33-28-86-42l5-4s43 0 90 33c0 0 46 83 46 187 0 0-27 47-97 48z"
              fill="currentColor"
            />
            <ellipse cx="196" cy="279" rx="33" ry="35" />
            <ellipse cx="312" cy="279" rx="33" ry="35" />
          </svg>
        </a>

        <a href="mailto:info@mstable.org ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Email"
            role="img"
            viewBox="0 0 512 512"
          >
            <rect
              width="356"
              height="256"
              x="78"
              y="128"
              fill="currentColor"
              rx="8%"
            />
            <path
              fill="currentColor"
              stroke="black"
              strokeWidth="20"
              d="M434 128L269 292c-7 8-19 8-26 0L78 128m0 256l129-128m227 128L305 256"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);
