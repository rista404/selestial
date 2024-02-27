import { useState } from 'react'

const EMAIL = 'hi@selestial.co'

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

export function FAQBlock() {
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
							fill={
								q?.className.includes('bg-black')
									? '#000'
									: '#fff'
							}
							stroke={
								q?.className.includes('bg-black')
									? '#000'
									: '#fff'
							}
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
