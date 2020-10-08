import React from "react";

export default () => (
  <nav>
    <svg viewBox="0 0 216 192">
      <use href={`#logo-m`} />
    </svg>

    <ul>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#rewards">Rewards</a>
      </li>
      <li>
        <a href="#more">More</a>
      </li>
      <li>
        <a id="app-button" href="https://app.mstable.org">
          Go to App
        </a>
      </li>
      <li>
        <a id="app-button" href="https://governance.mstable.org">
          Governance
        </a>
      </li>
    </ul>
  </nav>
);
