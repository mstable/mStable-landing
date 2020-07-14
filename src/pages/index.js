import React from "react";

import "../styles/index.styl";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Animation from "../components/Animation";
import Signup from "../components/Signup";

const pauseAnimationEvent = e => {
  e.target.style.animationPlayState = "paused";
};

export default () => {
  const [stage, setStage] = React.useState(1);
  const [isYellow, setYellow] = React.useState(false);

  React.useEffect(() => {
    const checkPosition = () => {
      const windowH = window.innerHeight;
      const stage2 =
        document.getElementById("stage-2").getBoundingClientRect().bottom -
        windowH;
      const stage3 =
        document.getElementById("stage-3").getBoundingClientRect().bottom -
        windowH;
      const aboutTop =
        document.getElementById("about").getBoundingClientRect().top -
        windowH * 0.5;
      const aboutBottom =
        document.getElementById("about").getBoundingClientRect().bottom -
        windowH * 0.7;

      if (aboutTop < 0 && aboutBottom > 0) {
        if (!isYellow) setYellow(true);
      } else {
        if (isYellow) setYellow(false);
      }

      if (stage3 < 0) {
        if (stage !== 3) setStage(3);
      } else if (stage2 < 0) {
        if (stage !== 2) {
          setStage(2);
          const coins = document.getElementsByClassName("coin");
          for (let i = 0; i < coins.length; i++) {
            coins[i].addEventListener(
              "animationiteration",
              pauseAnimationEvent
            );
          }
          document.getElementById("animation").classList.add("stage-2-start");
        }
      } else {
        if (stage !== 1) {
          setStage(1);
          const coins = document.getElementsByClassName("coin");
          for (let i = 0; i < coins.length; i++) {
            coins[i].style.animationPlayState = "running";
            coins[i].removeEventListener(
              "animationiteration",
              pauseAnimationEvent
            );
          }
          document
            .getElementById("animation")
            .classList.remove("stage-2-start");
        }
      }
    };

    window.addEventListener("scroll", checkPosition);
    return () => window.removeEventListener("scroll", checkPosition);
  }, [stage, isYellow]);

  return (
    <div className={isYellow ? "yellow" : "not-yellow"}>
      <SEO />

      <Navbar />

      <main>
        <Header />

        <section id="intro">
          <div className="wrap">
            <div className="left">
              <h1>mStable unites stablecoins, lending and swapping into one standard.</h1>
              <a
                href="https://docs.mstable.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Read our docs</span>
              </a>
            </div>

            <div className="right">
              <p>
                By reducing complexity and fragmentation, mStable is a step-change in the usability of stablecoins.
              </p>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="left">
              <Animation stage={stage} />
            </div>

            <div className="right">
              <div id="stage-1">
                <h2>mStable assets</h2>
                <p>
                  mStable assets are liquidity shares that also function as stablecoins in their own right.
                </p>
                <p>
                  Our first asset is mUSD.
                </p>
                <p>
                  <span style={{ fontWeight: 700 }}>MINT</span> mUSD assets with your stablecoin, at a 1:1 ratio
                </p>
                <p>
                  <span style={{ fontWeight: 700 }}>SAVE</span> mUSD in the mStable savings contract
                </p>
                <p>
                  <span style={{ fontWeight: 700 }}>SWAP</span> USD stablecoins at zero slippage
                </p>
                <p>
                  <a href="https://docs.mstable.org/mstable-assets/massets" title="mStable assets">
                    <span>learn more</span>
                  </a> or
                  <a id="app-link" href="https://app.mstable.org" title="mStable App">
                    <span>Go to App</span>
                  </a>
                </p>
              </div>

              <div id="stage-2">
                <h2>Meta</h2>
                <p>Meta is the mStable protocol token that:</p>
                <ul>
                  <li><span style={{ fontWeight: 700 }}>Earns</span> mStable assets for <span style={{ fontWeight: 700 }}>insuring</span> mStable</li>
                  <li><span style={{ fontWeight: 700 }}>Rewards</span> early users</li>
                </ul>
                <br />
                <a href="https://docs.mstable.org/mstable-assets/functions">
                  <span>learn more</span>
                </a>
              </div>

              <div id="stage-3">
                <h2>SDK</h2>
                <p>
                  mStable is a product that can be integrated into applications
                  or exchanges as an SDK.
                </p>
                <p>mStable unites stablecoins for end users.</p>
                <a href="https://docs.mstable.org/mstable-assets/interfacing-with-mstable/sdk" title="mStable SDK">
                  <span>learn more</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="rewards">
          <div className="wrap">
            <h2>Earn Rewards</h2>

            <div>
              <div className="left">
                <p className="large">Get notified when rewards begin</p>
                <Signup />
              </div>

              <div className="right">
                <p>
                  Earn mStable's protocol token, Meta, when you contribute to mStable's growth.
                </p>
                <a href="https://docs.mstable.org/meta-rewards-1/introduction" title="DeFi ecosystem rewards">
                  <span>learn more</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="more">
          <div className="wrap">
            <div className="left">
              <h2 className="left">
                Find Out <br />
                More
              </h2>
            </div>

            <div className="right">
              <ul>
                <li>
                  <a
                    href="https://docs.mstable.org/appendix/about-us"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://angel.co/mstable/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>We’re Hiring</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/pgCVG7e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Join Our Discord</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.mstable.org/appendix/roadmap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Roadmap</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Logo />
    </div>
  );
};
