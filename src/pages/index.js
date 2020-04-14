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
              <h1>We make digital money safe, stable and accessible</h1>
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
                From debt markets to derivatives, finance is being rebuilt, repackaged, and shipped on Ethereum. This is decentralised finance (DeFi): open, transparent and built entirely with software.
              </p>
              <p>
                Each DeFi application relies on assets that are compatible with smart contracts.
              </p>
              <p>
                But today, tokenised assets are highly fragmented and display dangerously concentrated counter-party risk.
              </p>
              <p>
                mStable is built to unite the tokenised asset economy into one standard that is more secure and usable than the sum of its parts.
              </p>
              <p>
                DeFi needs sustainable and secure assets. Help us build them.
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
                  mStable assets are each backed 1:1 by a basket of existing
                  tokens of the same asset type.
                </p>
                <p>
                  mStable unites existing tokenised assets into one optimised
                  token per-peg.
                </p>
                <p>
                  Our first assets include a fiat currency (mUSD), a commodity
                  (mGLD), and Bitcoin.
                </p>
                <p>
                  mUSD will be launched with a native interest rate from day one.
                </p>
                <a href="https://docs.mstable.org/mstable-assets/massets" title="mStable assets">
                  <span>learn more</span>
                </a>
              </div>

              <div id="stage-2">
                <h2>Meta</h2>
                <p>Meta is the mStable system token that:</p>
                <ul>
                  <li>Pays redemption fees across mStable assets</li>
                  <li>Coordinates decentralised governance</li>
                  <li>Incentivises mStable asset growth</li>
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
                <p>mStable unites tokenised assets for end users.</p>
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
                  20% of Meta (MTA) will be paid out as part of this open reward pool.
                </p>
                <p>
                  Receive Meta for minting mStable assets. Minting is simply
                  swapping tokens of equal value.
                </p>
                <p>Receive additional Meta for contributing to DeFi.</p>
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
