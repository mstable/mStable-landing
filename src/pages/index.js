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
              <h1>Radically safer and more useful assets</h1>
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
                An open source protocol for unifying, securing and governing
                tokenised assets.
              </p>
              <p>
                An SDK for DApps and exchanges to expand and simplify stablecoin
                user experience.
              </p>
              <p>
                An open reward pool to bootstrap liquidity, utility and a
                decentralised community of governors.
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
                  mStable unites existing tokenised assets into one optimised
                  token per-peg.
                </p>
                <p>
                  Our first assets include a fiat currency (mUSD), a commodity
                  (mGLD), and Bitcoin.
                </p>
                <a href="https://docs.mstable.org">
                  <span>learn more</span>
                </a>
              </div>

              <div id="stage-2">
                <h2>Meta</h2>
                <p>Meta is the mStable system token that:</p>
                <br />
                <ul>
                  <li>Pays redemption fees across mStable assets</li>
                  <li>Coordinates decentralised governance</li>
                  <li>Incentivises mStable asset growth</li>
                </ul>
                <br />
                <a href="https://docs.mstable.org">
                  <span>learn more</span>
                </a>
              </div>

              <div id="stage-3">
                <h2>SDK</h2>
                <p>
                  mStable is a product that can be integrated into any
                  application or exchange as an SDK. mStable unites tokenised
                  assets for end users.
                </p>
                <a href="https://docs.mstable.org">
                  <span>learn more</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="rewards">
          <div className="wrap">
            <h2>Earn rewards for contributing to mStable</h2>

            <div>
              <div className="left">
                <p className="large">Sign up and get notified</p>
                <Signup />
              </div>

              <div className="right">
                <p>
                  20% of Meta will be emitted as part of this open reward pool.
                </p>
                <p>
                  Receive Meta for minting mStable assets. Minting is just
                  swapping tokens of equal value.
                </p>
                <p>
                  Receive additional Meta for contributing to our liquidity or
                  lending markets.
                </p>
                <a href="https://docs.mstable.org">
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
                    href="https://docs.mstable.org"
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
                    href="https://discord.gg/raSYRj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Join Our Discord</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.mstable.org"
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
