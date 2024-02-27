import type { MetaFunction } from '@remix-run/cloudflare'
import { useState } from 'react'

const FEATURES = [
	'Unlimited iterations',
	'One request at the time',
	'No meetings',
	'No contracts',
	'Cancel anytime',
	'Private Slack channel',
	'Async communication',
]

export const meta: MetaFunction = () => {
	return [
		{ title: 'Selestial' },
		{ name: 'description', content: 'Welcome to Remix!' },
	]
}

export default function Index() {
	return (
		<main className="gap-5 p-5 w-full">
			<section
				id="intro"
				className="text-black flex flex-col justify-between gap-3 rounded-none"
			>
				<div className="flex justify-between items-stretch">
					{logo}
					<div className="bg-white rounded-[100px] font-extrabold h-full px-2 flex items-center font-[system-ui,sans-serif]">
						©‘{new Date().getFullYear().toString().slice(2)}
					</div>
				</div>
				<h1 className="sr-only">Selestial</h1>
				<p className="fs-p">
					We help startups raise funds with branding, web and graphic
					design. Subscribe to our services and we will become a
					crucial part of your team to drive you home.
				</p>
			</section>

			{/* Sat */}
			<section
				id="watch"
				className="bg-black text-white flex items-center justify-center"
			>
				{watch}
			</section>

			{/* Latest Work */}
			<section id="latest-work" className="bg-[#FFCC33]"></section>

			{/* Recognitions */}
			<section id="recognitions" className="bg-[#FF4500]"></section>

			{/* Clients */}
			<section
				id="clients"
				style={{ gridArea: 'đ' }}
				className="bg-[black]"
			></section>

			{/* Video */}

			<section id="video" className="bg-[#CDC3B3]"></section>

			{/* Vrlo jednostavno */}
			<section
				id="slogan"
				className="flex-1 flex-shrink-0 flex items-center justify-center bg-[#DFD1B4] text-center p-5"
			>
				<p className="leading-none">
					<strong className="text-white font-bold">Shockingly</strong>
					<br />
					<span className="text-black">Straightforward</span>
				</p>
			</section>

			{/* Milijarde */}
			<section
				id="milijarde"
				className="flex-1 flex-shrink-0 bg-white text-black p-4 relative flex flex-col justify-end"
			>
				<sup className="font-medium text-[1.8vw] absolute top-8 left-4 z-20">
					$
				</sup>
				<div className="relative bg-white overflow-hidden">
					<p className="select-none text-black tracking-[-0.08em] font-bold leading-[0.9] text-[7.5vw] pr-2">
						.5b
					</p>
					<video
						className="w-full h-full absolute inset-0 mix-blend-lighten pointer-events-none"
						autoPlay
						muted
						loop
						playsInline
					>
						<source src="/5b.mp4" type="video/mp4" />
					</video>
				</div>
				<p className="font-medium line-clamp-1 leading-tight fs-small">
					We helped our clients raise $0.5 billion
				</p>
			</section>

			{/* FAQ */}
			<section id="faq" className="bg-[#EDEDED]"></section>

			{/* Djordje */}
			<section
				id="djordje"
				className="group flex-1 flex gap-4 flex-col bg-[#ECE5D6] p-5 font-medium"
			>
				<div>{smallStar}</div>
				<div className="flex relative justify-center items-center h-full">
					<img
						src="/djordje.png"
						alt="George, Bondin"
						className="absolute h-full object-contain transition group-hover:opacity-0 group-hover:invisible"
					/>
					<p className="absolute top-0 transition invisible opacity-0 group-hover:opacity-100 group-hover:visible">
						Working with them was seamless—they guided us in
						refining our vision and exploring our ideas, bringing us
						closer to our desired result with each iteration. We
						were thrilled with the final product!
					</p>
				</div>
				<p>— George, Bondin</p>
			</section>

			<section id="misc" className="bg-red-100"></section>

			{/* Features */}
			<section id="features" className="flex-1 bg-white p-5">
				<ul className="h-full flex flex-col justify-between">
					{FEATURES.map(f => (
						<li
							key={f}
							className="group flex gap-[0.6em] text-black items-center hover:font-bold hover:text-[#FF4500] font-medium"
						>
							<i className="h-[1.2em] w-[1.2em]">{featureStar}</i>{' '}
							{f}
						</li>
					))}
				</ul>
			</section>

			{/* Subscribe */}
			<SubscribeBlock />
		</main>
	)
}

function SubscribeBlock() {
	const [quarterly, setQuarterly] = useState(false)

	const price = quarterly ? '$4,400' : '$4,995'

	const url = quarterly
		? 'https://buy.stripe.com/9AQ2bJ3Q81va2ly28c'
		: 'https://buy.stripe.com/3csg2zbiA4Hm9O07sv'

	return (
		<section
			id="subscribe"
			data-quarterly={quarterly}
			className="bg-white text-black accent-black data-[quarterly=true]:bg-black data-[quarterly=true]:text-white data-[quarterly=true]:accent-white flex flex-col p-5 gap-2 justify-between transition-colors"
		>
			<div className="flex items-center justify-between">
				<label className="flex items-center gap-[10px] cursor-pointer select-none">
					<input
						hidden
						type="checkbox"
						checked={quarterly}
						onChange={e => setQuarterly(e.target.checked)}
					/>
					<button className="pointer-events-none bg-dust w-[60px] h-[30px] relative rounded-[100px]">
						<span
							data-quarterly={quarterly}
							className="bg-black rounded-full w-[28px] h-[28px] absolute top-[1px] left-[2px] transition-transform data-[quarterly=true]:translate-x-[29px]"
						/>
					</button>
					{quarterly ? 'quarterly' : 'monthly'}
				</label>
				<div
					hidden={!quarterly}
					aria-hidden={!quarterly}
					className="flex items-center gap-[10px] fs-small aria-hidden:invisible transition-none text-white"
				>
					<i className="h-[1.5em] w-[1.5em]">{subscribeSaveStar}</i>{' '}
					<span>save $1k+</span>
				</div>
			</div>
			<div className="space-y-2">
				<p className="fs-heading">
					<span className="font-[800]">{price}</span> / month
				</p>
				<p className="fs-p">
					Perfect for startups that need on-going work that needs to
					be dealt with great urgency.
				</p>
			</div>
			<a
				href={url}
				className="bg-dust fs-heading w-full py-[0.4em] rounded-[100px] text-center leading-none font-bold text-black hover:bg-red hover:text-white transition-colors"
			>
				Subscribe
			</a>
		</section>
	)
}

const smallStar = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="21"
		height="21"
		fill="none"
		viewBox="0 0 21 21"
	>
		<path
			fill="currentColor"
			d="M9.577 1.22c.341-.821 1.505-.821 1.846 0l2.149 5.165a1 1 0 0 0 .843.613l5.577.447c.886.071 1.246 1.178.57 1.756l-4.248 3.64a1 1 0 0 0-.323.991l1.299 5.442c.206.865-.735 1.55-1.494 1.085l-4.775-2.916a1 1 0 0 0-1.042 0L5.205 20.36c-.76.464-1.7-.22-1.494-1.085l1.298-5.442a1 1 0 0 0-.323-.991L.438 9.2c-.676-.578-.316-1.685.57-1.756l5.577-.447a1 1 0 0 0 .843-.613L9.577 1.22Z"
		/>
	</svg>
)

const logo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40%"
		viewBox="0 0 400 90"
		fill="none"
	>
		<path
			fill="currentColor"
			d="M127.727 87.698V0h16.591v87.697h-16.591ZM300.321 19.752v12.641h-11.588v55.305h-16.46V0h16.46v19.751h11.588ZM300.321 87.698V19.752h16.591v67.946h-16.591Zm.132-75.056V0h16.327v12.64h-16.327ZM383.409 87.698V0H400v87.697h-16.591ZM0 66.102h16.196c.922 8.427 5.136 11.587 15.143 11.587 8.954 0 13.431-2.765 13.431-8.163 0-4.873-3.16-7.243-13.3-8.955l-7.768-1.316c-14.88-2.502-22.254-9.35-22.254-20.542 0-12.773 10.14-20.542 28.18-20.542 19.356 0 29.363 7.638 30.022 23.044H43.98c-.395-8.296-5.267-11.193-14.353-11.193-7.9 0-11.85 2.634-11.85 7.901 0 4.74 3.423 6.847 11.324 8.296l8.559 1.316c16.46 3.029 23.57 9.086 23.57 20.674 0 13.694-11.061 21.331-30.154 21.331S.922 81.771 0 66.102ZM108.897 66.102c-.922 8.427-5.135 11.588-15.143 11.588-8.954 0-13.43-2.765-13.43-8.164 0-4.872 3.16-7.242 13.299-8.954l7.768-1.317c14.88-2.502 22.254-9.35 22.254-20.542 0-12.772-10.139-20.541-28.179-20.541-19.357 0-29.364 7.637-30.022 23.043v7.76h15.67v-7.76c.394-8.296 5.266-11.192 14.352-11.192 7.901 0 11.851 2.633 11.851 7.9 0 4.74-3.424 6.847-11.324 8.296l-8.56 1.317c-16.459 3.028-23.57 9.085-23.57 20.673 0 13.694 11.061 21.332 30.154 21.332 19.094 0 30.155-7.77 31.076-23.439h-16.196ZM208.41 66.102h16.196c.922 8.427 5.135 11.588 15.143 11.588 8.954 0 13.431-2.765 13.431-8.164 0-4.872-3.16-7.242-13.3-8.954l-7.769-1.317c-14.879-2.502-22.253-9.35-22.253-20.542 0-12.772 10.139-20.541 28.179-20.541 19.356 0 29.364 7.637 30.022 23.043H252.39c-.395-8.296-5.267-11.192-14.353-11.192-7.901 0-11.851 2.633-11.851 7.9 0 4.74 3.424 6.847 11.324 8.296l8.559 1.317c16.46 3.028 23.57 9.085 23.57 20.673 0 13.694-11.06 21.332-30.154 21.332-19.093 0-30.154-7.77-31.075-23.439ZM191.976 66.102c-.921 8.427-5.135 11.587-15.143 11.587-8.954 0-13.431-2.765-13.431-8.163 0-4.873 3.161-7.243 13.3-8.955l7.769-1.316c14.879-2.502 22.253-9.35 22.253-20.542 0-12.773-10.139-20.542-28.179-20.542-19.356 0-29.364 7.638-30.022 23.044v7.76h15.669v-7.76c.395-8.296 5.267-11.193 14.353-11.193 7.901 0 11.851 2.634 11.851 7.901 0 4.74-3.423 6.847-11.324 8.296l-8.559 1.316c-16.46 3.029-23.57 9.086-23.57 20.674 0 13.694 11.061 21.331 30.154 21.331s30.154-7.769 31.076-23.438h-16.197ZM364.579 57.411v8.69c-.922 8.428-5.136 11.588-15.143 11.588-8.954 0-13.431-2.765-13.431-8.163 0-4.873 3.16-7.243 13.299-8.955l7.769-1.316c14.88-2.502 22.254-9.35 22.254-20.542 0-12.773-10.139-20.542-28.179-20.542-19.357 0-29.364 7.638-30.023 23.044h15.67c.395-8.296 5.267-11.193 14.353-11.193 7.9 0 11.851 2.634 11.851 7.901 0 4.74-3.424 6.847-11.325 8.296l-8.559 1.316c-16.459 3.029-23.57 9.086-23.57 20.674 0 13.694 11.061 21.331 30.154 21.331s30.154-7.769 31.076-23.438v-8.69h-16.196Z"
		/>
	</svg>
)

const watch = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-h-[50%] max-w-[50%] w-full h-full object-contain"
		fill="none"
		viewBox="0 0 110 110"
	>
		<path
			fill="currentColor"
			d="M57 22a2 2 0 1 0-4 0h4Zm-4 0v33h4V22h-4Z"
		/>
		<path
			fill="currentColor"
			d="M69.142 71.97a2 2 0 0 0 2.829-2.828l-2.829 2.829Zm2.829-2.828L56.414 53.586l-2.828 2.828 15.556 15.557 2.829-2.829Z"
		/>
		<path
			fill="#FF4500"
			d="M87.173 23.354a.5.5 0 0 0-.707-.708l.707.708Zm-.707-.708-31.82 31.82.707.707 31.82-31.82-.707-.707Z"
		/>
		<circle cx="55" cy="55" r="5" fill="currentColor" />
		<circle cx="55" cy="55" r="53" stroke="currentColor" strokeWidth="4" />
	</svg>
)

const featureStar = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		fill="none"
		viewBox="0 0 20 20"
	>
		<circle cx="10" cy="10" r="10" className="fill-current" />
		<path
			className="fill-white"
			d="M9.95 1C9.95 5.98 5.95 10 1 10C5.96 10 9.95 14.04 9.95 19C9.95 14.04 14.01 10 19 10C14.01 10 9.95 5.98 9.95 1Z"
		/>
	</svg>
)

const subscribeSaveStar = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		fill="none"
		viewBox="0 0 20 20"
	>
		<circle cx="10" cy="10" r="10" className="fill-white" />
		<path
			className="fill-black"
			d="M9.95 1C9.95 5.98 5.95 10 1 10C5.96 10 9.95 14.04 9.95 19C9.95 14.04 14.01 10 19 10C14.01 10 9.95 5.98 9.95 1Z"
		/>
	</svg>
)
