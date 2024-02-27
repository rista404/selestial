import type { MetaFunction } from '@remix-run/cloudflare'
import { useState } from 'react'
import {
	renaultGroupLogo,
	publicLogo,
	trustMachinesLogo,
	wordpressLogo,
	foundersFundLogo,
} from '~/logos'
import { Slider } from '~/slider'

const FEATURES = [
	'Unlimited iterations',
	'One request at the time',
	'No meetings',
	'No contracts',
	'Cancel anytime',
	'Private Slack channel',
	'Async communication',
]

const EMAIL = 'hi@selestial.co'

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

			{/* Logos */}
			<section id="logos">
				<Slider>
					<div className="relative flex items-center justify-center bg-black">
						{renaultGroupLogo}
						<a
							className="2xl:opacity-0 transition 2xl:group-hover:opacity-100 fs-small absolute bottom leading-none bottom-4 left-5 text-white"
							href="https://www.renaultgroup.com"
							target="_blank"
							rel="noreferrer"
						>
							renaultgroup.com
						</a>
					</div>
					<div className="relative flex items-center justify-center bg-white">
						{publicLogo}
						<a
							className="2xl:opacity-0 transition 2xl:group-hover:opacity-100 fs-small absolute bottom leading-none bottom-4 left-5 text-black"
							href="https://public.com"
							target="_blank"
							rel="noreferrer"
						>
							public.com
						</a>
					</div>
					<div className="relative flex items-center justify-center bg-black">
						{trustMachinesLogo}
						<a
							className="2xl:opacity-0 transition 2xl:group-hover:opacity-100 fs-small absolute bottom leading-none bottom-4 left-5 text-white"
							href="https://trustmachines.co/"
							target="_blank"
							rel="noreferrer"
						>
							trustmachines.co
						</a>
					</div>
					<div className="relative flex items-center justify-center bg-white">
						{foundersFundLogo}
						<a
							className="2xl:opacity-0 transition 2xl:group-hover:opacity-100 fs-small absolute bottom leading-none bottom-4 left-5 text-black"
							href="https://foundersfund.com/"
							target="_blank"
							rel="noreferrer"
						>
							foundersfund.com
						</a>
					</div>
					<div className="relative flex items-center justify-center bg-[#0073AA]">
						{wordpressLogo}
						<a
							className="2xl:opacity-0 transition 2xl:group-hover:opacity-100 fs-small absolute bottom leading-none bottom-4 left-5 text-white"
							href="https://wordpress.org/"
							target="_blank"
							rel="noreferrer"
						>
							wordpress.org
						</a>
					</div>
				</Slider>
			</section>

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
					<p className="select-none text-black tracking-[-0.08em] font-bold leading-[0.9] text-[7.9vw] pr-2">
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
			<section id="faq" className="bg-[#EDEDED]">
				<FAQBlock />
			</section>

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
						className="absolute h-full object-contain transition group-hover:opacity-0 group-hover:invisible max-2xl:!invisible"
					/>
					<p className="absolute top-0 transition invisible opacity-0 group-hover:opacity-100 group-hover:visible max-2xl:!visible max-2xl:!opacity-100">
						Working with them was seamless—they guided us in
						refining our vision and exploring our ideas, bringing us
						closer to our desired result with each iteration. We
						were thrilled with the final product!
					</p>
				</div>
				<p>— George, Bondin</p>
			</section>

			<section id="misc" className="relative">
				<video
					className="bg-[#C248A0] -z-10 w-full h-full object-cover absolute inset-0 pointer-events-none rounded-2xl"
					autoPlay
					muted
					loop
					playsInline
				>
					<source src="/infinity.webm" type="video/webm" />
					<source src="/infinity.mp4" type="video/mp4" />
				</video>
				<div className="group w-full h-full flex items-center justify-center z-20">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="group-hover:invisible group-hover:opacity-0 transition max-h-[40%] max-w-[40%] w-full h-full object-contain"
						fill="none"
						viewBox="0 0 135 67"
					>
						<path
							fill="#fff"
							d="M125.118 9.858C118.753 3.508 110.378 0 101.501 0c-8.04 0-15.912 3.843-23.449 11.194l-.167.168L67.5 22.055 55.608 34.419 45.223 45.112c-2.345 2.34-6.197 5.013-11.724 5.013-4.523 0-8.71-1.671-11.892-4.846-3.183-3.174-4.858-7.351-4.858-11.863 0-4.51 1.675-8.688 4.858-11.862 3.182-3.175 7.37-4.846 11.892-4.846 4.355 0 8.71 3.509 11.724 6.35l6.03 6.181L62.81 17.21l-5.695-5.847-.167-.168C49.41 3.676 41.538 0 33.498 0 24.623 0 16.08 3.509 9.883 9.858 3.517 16.207 0 24.56 0 33.416c0 8.856 3.517 17.377 9.882 23.56 6.365 6.348 14.74 9.857 23.617 9.857 8.71 0 17.084-3.509 23.449-10.025l.167-.167 9.715-10.025 12.897-13.367 10.217-10.526c2.847-2.84 7.202-6.349 11.557-6.349 4.523 0 8.71 1.67 11.892 4.846 3.183 3.174 4.858 7.351 4.858 11.862s-1.675 8.689-4.858 11.863c-3.182 3.509-7.537 5.18-11.892 5.18-5.36 0-9.38-2.674-11.557-5.013l-6.03-6.182L72.19 50.96l5.695 5.848.167.167C84.417 63.325 92.792 67 101.501 67c8.877 0 17.42-3.509 23.617-9.858C131.483 50.793 135 42.44 135 33.583c0-9.022-3.517-17.543-9.882-23.725Z"
						/>
					</svg>
					<p className="text-white leading-none fs-heading absolute transition opacity-0 invisible group-hover:visible group-hover:opacity-100">
						<strong className="font-bold">Infinite</strong>{' '}
						<span>Requests</span>
					</p>
				</div>
			</section>

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

const FAQ = [
	{
		question: 'How this works?',
		className: 'bg-dust',
		answer: (
			<p>
				1. Once you subscribe we’ll add you to the private Slack
				channel, where you can immediately start sending your design
				requests.
				<br />
				<br />
				2. You can send as much design requests as you like.
				<br />
				<br />
				3. We’ll start working on requests, 1 by 1. You can pause your
				subscription anytime you want, and come back once you need
				design help again.
			</p>
		),
	},
	{
		question: 'What services do you provide?',
		className: 'bg-white',
		answer: (
			<p>
				We are experts in branding, graphic design, and web design. We{' '}
				<strong>don’t</strong> provide 3D services, animation, or
				development* work.
				<br />
				<br />
				With a note that landing pages, we can code/develop.
			</p>
		),
	},
	{
		question: 'What’s the timeline per request?',
		className: 'bg-creme',
		answer: (
			<p>
				Depends on the type of request and its complexity. For most
				design requests we deliver within 48 hrs. For a full startup
				kit, which includes a logo, colors, a few brand assets, a deck,
				and a landing page, we’ll need more time to deliver the first
				iterations.
			</p>
		),
	},
	{
		question: 'Who’s behind this?',
		className: 'bg-yellow',
		answer: (
			<p>
				Joint efforts of three experts who have experience in helping
				(big-time) startups position and raise funds. A website, a
				brand, and a graphic designer.
				<br />
				<br />
				Our CEO of web and everything is Alexandra. You’ll be chatting
				with her.
			</p>
		),
	},
	{
		question: 'Are there any refunds?',
		className: 'bg-black text-white',
		answer: (
			<p>
				High-quality work for a reasonable price leaves us no room for
				any refunds.
			</p>
		),
	},
	{
		question: 'Contact!',
		className: 'bg-dust',
		answer: (
			<div>
				<p>If you wish to ask us any questions, write us at:</p>
				<button
					className="pt-6 text-red flex w-full items-center justify-between font-bold fs-p"
					onClick={() => {
						navigator.clipboard.writeText(EMAIL)
					}}
				>
					<span>{EMAIL}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1.2em"
						fill="none"
						viewBox="0 0 19 22"
					>
						<path
							fill="currentColor"
							d="M17 18H6c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 16V2c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 6 0h7l6 6v10c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 18ZM12 7V2H6v14h11V7h-5ZM2 22c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 0 20V6h2v14h11v2H2Z"
						/>
					</svg>
				</button>
			</div>
		),
	},
]

function FAQBlock() {
	const [active, setActive] = useState('')
	const q = FAQ.find(qq => qq.question === active)

	const borderColor = q?.className?.includes('bg-black')
		? 'divide-white/10 border-white/10'
		: 'divide-black/10 border-black/10'

	let content = (
		<div
			className={`fs-p font-medium flex-1 basis-full flex flex-col items-start justify-stretch divide-y border-y ${borderColor}`}
		>
			{FAQ.map(qq => {
				return (
					<button
						className="py-[1em] 2xl:py-[0.5em] flex-1 block w-full text-left hover:font-bold hover:text-red"
						key={qq.question}
						onClick={() => setActive(qq.question)}
					>
						{qq.question}
					</button>
				)
			})}
		</div>
	)

	if (q) {
		content = (
			<>
				<div
					className={`fs-p font-medium overflow-scroll no-scrollbar py-5 border-y ${borderColor}`}
				>
					<span className="block pb-4">{q.question}</span>
					{q.answer}
				</div>
				<button
					onClick={() => setActive('')}
					className="flex w-full pt-5 fs-p flex-shrink-0 items-center mt-auto gap-[10px] font-bold fs-p"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="0.9em"
						fill="none"
						viewBox="0 0 22 16"
					>
						<path
							fill="currentColor"
							d="M21 7a1 1 0 1 1 0 2V7ZM.293 8.707a1 1 0 0 1 0-1.414L6.657.929A1 1 0 0 1 8.07 2.343L2.414 8l5.657 5.657a1 1 0 1 1-1.414 1.414L.293 8.707ZM21 9H1V7h20v2Z"
						/>
					</svg>
					<span className="leading-none">Back</span>
				</button>
			</>
		)
	}

	return (
		<div className={'flex flex-col p-5 h-full ' + (q ? q.className : '')}>
			<div className="flex flex-shrink-0 items-center pb-5">
				<p className="fs-small flex items-center gap-[10px] font-bold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.5em"
						height="1.5em"
						fill="none"
						viewBox="0 0 20 20"
					>
						<circle cx="10" cy="10" r="10" fill="currentColor" />
						<path
							fill="#fff"
							stroke="#fff"
							strokeWidth=".25"
							d="m10.36 5.613.007.007c.163.17.366.255.603.255.28 0 .525-.103.729-.302.21-.207.31-.486.31-.823a.804.804 0 0 0-.263-.623.828.828 0 0 0-.616-.252.977.977 0 0 0-.696.302l-.003.003c-.198.206-.291.478-.291.803 0 .239.073.45.22.63ZM8.793 15.659v.002c.176.313.474.464.863.464.268 0 .543-.101.823-.288.289-.191.567-.514.839-.954.285-.457.54-1.067.766-1.827.038-.103.061-.217.02-.313-.05-.117-.164-.151-.267-.151a.314.314 0 0 0-.223.089.485.485 0 0 0-.12.214c-.288.82-.545 1.363-.766 1.645-.22.284-.396.385-.527.385a.23.23 0 0 1-.127-.03.144.144 0 0 1-.056-.078c-.025-.118-.018-.29.033-.523l1.186-5.283c.071-.317.106-.594.104-.83-.003-.233-.044-.433-.132-.591-.176-.326-.486-.482-.895-.482-.258 0-.528.102-.807.288-.289.192-.567.514-.84.955v.002c-.263.445-.512 1.054-.749 1.824-.038.103-.061.218-.02.314.05.117.164.15.267.15.085 0 .162-.03.223-.089a.486.486 0 0 0 .12-.213c.289-.82.54-1.358.75-1.629.232-.296.413-.402.543-.402.062 0 .097.014.117.03.02.014.038.039.05.09h-.001l.003.01c.033.102.033.264-.019.502l-1.186 5.283c-.14.626-.145 1.116.028 1.436Z"
						/>
					</svg>
					<span>FAQ</span>
				</p>
			</div>

			{content}
		</div>
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
