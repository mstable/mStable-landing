
import React from "react"

import "../styles/index.styl"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Logo from '../components/Logo'
import Header from '../components/Header'
import Animation from '../components/Animation'



const pauseAnimationEvent = e => {
	e.target.style.animationPlayState = 'paused'
}

export default () => {
	
	const [stage, setStage] = React.useState(1)
	const [isYellow, setYellow] = React.useState(false)

	React.useEffect(() => {
		
		const checkPosition = () => {
			const windowH = window.innerHeight
			const stage2 = document.getElementById('stage-2').getBoundingClientRect().bottom - windowH
			const stage3 = document.getElementById('stage-3').getBoundingClientRect().bottom - windowH
			const aboutTop = document.getElementById('about').getBoundingClientRect().top - windowH*0.5
			const aboutBottom = document.getElementById('about').getBoundingClientRect().bottom - windowH*0.7

			if (aboutTop < 0 && aboutBottom > 0) {
				if (!isYellow) setYellow(true)
			} else {
				if (isYellow) setYellow(false)
			}

			if (stage3 < 0) {
				if (stage !== 3)
					setStage(3)
			} else if (stage2 < 0) {
				if (stage !== 2) {
					setStage(2)
					const coins = document.getElementsByClassName('coin')
					for (let i = 0; i < coins.length; i++) {
						coins[i].addEventListener('animationiteration', pauseAnimationEvent)
					}
					document.getElementById('animation').classList.add('stage-2-start')
				}
			} else {
				if (stage !== 1) {
					setStage(1)
					const coins = document.getElementsByClassName('coin')
					for (let i = 0; i < coins.length; i++) {
						coins[i].style.animationPlayState = 'running'
						coins[i].removeEventListener('animationiteration', pauseAnimationEvent)
					}
					document.getElementById('animation').classList.remove('stage-2-start')
				}
			}
		}

		window.addEventListener('scroll', checkPosition)
		return () => window.removeEventListener('scroll', checkPosition)

	}, [stage, isYellow])
	
	return (
		<div className={isYellow ? 'yellow' : 'not-yellow'}>

			<SEO />

			<Navbar />

			<main>

				<Header />

				<section id='intro'>

					<div className='wrap'>

						<div className='left'>
							<h1>mSTABLE unites stablecoins into radically safer and more usable assets </h1>
							<a href='https://docs.mstable.org'><span>Read our docs</span></a>
						</div>

						<div className='right'>
							<p>A open source protocol for unifying, securing and governing the stablecoins ecosystem</p>
							<p>An SDK for dapps and exchanges to unite stablecoins for end users</p>
							<p>An open reward pool to bootstrap liquidity, utility and decentralised community of governors</p>
						</div>

					</div>

				</section>

				<section id='about'>

					<div className='wrap'>

						<div className='left'>
							<Animation stage={stage} />
						</div>
						
						<div className='right'>

							<div id='stage-1'>
								<h4>Components</h4>
								<h2>mSTABLE Assets</h2>
								<p>
									mStable enables the decentralised creation of multiple stablecoins.<br />
									Our first two assets are mUSD and mGLD.
								</p>
								<a href='https://docs.mstable.org'><span>learn more</span></a>
							</div>
							
							<div id='stage-2'>
								<h4>Components</h4>
								<h2>meta</h2>
								<p>
									Meta is used to pay redemption fees and incentivise the rapid growth of the liquidity and utility of mStable assets.<br />
									Holders of Meta will be able to participate in system governance. mStable will be progressively controlled not by a single entity but by a global community of Meta Governors.<br />
								</p>
								<a href='https://docs.mstable.org'><span>learn more</span></a>
							</div>
							
							<div id='stage-3'>
								<h4>Components</h4>
								<h2>SDK</h2>
								<p>
									The mStable SDK unifies stablecoins for your dapp or exchange.
								</p>
								<a href='https://docs.mstable.org'><span>learn more</span></a>
							</div>

						</div>

					</div>

				</section>

				<section id='rewards'>

					<div className='wrap'>

						<h2>Get rewarded for contributing to mSTABLE</h2>

						<div>

							<div className='left'>
								<p className='large'>The first reward pool will be limited to 100 participants.</p>
								<p>
									<a href='http://eepurl.com/gogePn' 
										target='_blank' 
										rel='noopener noreferrer'
										id='signup'
									>
										<svg xmlns="http://www.w3.org/2000/svg"
											aria-label="Email" role="img"
											viewBox="0 0 512 512"
											width='40px' height='40px'>
											<rect width="356" height="256" x="78" y="128" fill="white" stroke="black" strokeWidth="20" rx="2%"/>
											<path fill="white" stroke="black" strokeWidth="20" d="M434 128L269 292c-7 8-19 8-26 0L78 128m0 256l129-128m227 128L305 256"/>
										</svg><span>Sign up here</span>
									</a>
								</p>
							</div>

							<div className='right'>
								<p>Receive MTA for minting mUSD or mGLD. Minting is just swapping stablecoins of equal value.</p>
								<p>Receive additional MTA for contributing to our Uniswap pool or lending markets.</p>
								<p>
									20% of Meta will be emitted as part of this open reward pool. <a href='https://docs.mstable.org'><span>learn more</span></a>
								</p>
							</div>

						</div>

					</div>

				</section>

				<section id="more">

					<div className='wrap'>

						<div className='left'>
							<h2 className='left'>Find Out <br />More</h2>
						</div>

						<div className='right'>
							<ul>
								<li><a href='https://docs.mstable.org' target='_blank' rel='noopener noreferrer'><span>About Us</span></a></li>
								<li><a href='https://angel.co/mstable/' target='_blank' rel='noopener noreferrer'><span>We’re Hiring</span></a></li>
								<li><a href='https://discord.gg/raSYRj' target='_blank' rel='noopener noreferrer'><span>Join Our Discord</span></a></li>
								<li><a href='https://docs.mstable.org' target='_blank' rel='noopener noreferrer'><span>Roadmap</span></a></li>
							</ul>
						</div>

					</div>

				</section>

			</main>

			<Footer />

			<Logo />

	</div>)
}
