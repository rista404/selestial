import type { MetaFunction } from '@remix-run/cloudflare'

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
		<main className="grid gap-5 p-5 w-full h-full max-h-screen">
			<section
				id="intro"
				style={{ gridArea: 'a' }}
				className="text-[#EDEDED] flex flex-col justify-between gap-3 rounded-none"
			>
				<p className="text-[#133200] font-medium">
					We help startups raise their funds with branding, web and
					graphic design. Subscribe to our services and we’ll become
					an integral part of your team to drive you home.
				</p>
				<h1 className="sr-only">Selestial</h1>
				{logo}
			</section>

			{/* Sat */}
			<section
				style={{ gridArea: 'b' }}
				className="bg-[#F0F0F0] flex items-center justify-center"
			>
				{watch}
			</section>

			{/* Tim */}
			<section
				style={{ gridArea: 'v' }}
				className="bg-[#F0F0F0]"
			></section>

			<section
				style={{ gridArea: 'g' }}
				className="bg-neutral-700"
			></section>

			<section
				style={{ gridArea: 'd' }}
				className="bg-[#0A70F8]"
			></section>

			{/* Our services */}

			<section
				id="our-services"
				style={{ gridArea: 'đ' }}
				className="group bg-[#F0F0F0] text-[#151515] flex flex-col justify-between p-4"
			>
				<small className="opacity-0 group-hover:opacity-100 transition-opacity">
					Our Services
				</small>
				<p className="leading-none font-bold">
					<span className="block text-[#FF4500]">Brand,</span>
					<span className="block text-[#0A70F8]">Graphic,</span>
					<span className="block text-[#008800]">Website,</span>
					<span className="block text-[#151515]">Design!</span>
				</p>
			</section>

			{/* Second line */}

			<section
				style={{ gridArea: 'e' }}
				className="bg-[#FF4500]"
			></section>

			{/* Video */}

			<section
				style={{ gridArea: 'ž' }}
				className="bg-[#151515]"
			></section>

			<section
				style={{ gridArea: 'z' }}
				className="flex flex-col items-stretch justify-between gap-5"
			>
				{/* Vrlo jednostavno */}
				<div
					id="straightforward"
					className="flex-1 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#80E244] text-[#151515] text-center p-5"
				>
					<p>
						<strong className="font-bold">Shockingly</strong>{' '}
						Straightforward
					</p>
				</div>
				{/* Milijarde */}
				<div
					id="milijarde"
					className="flex-1 flex-shrink-0 rounded-2xl bg-[#F5D925] text-[#151515] p-4 relative flex flex-col justify-end"
				>
					<sup className="font-medium text-[1.8vw] absolute top-8 left-4">
						$
					</sup>
					<p className="tracking-[-0.08em] font-bold leading-[0.9] text-right text-[9vw] pr-2">
						0.5b
					</p>
					<p className="font-medium line-clamp-1 leading-tight text-[0.83vw]">
						After collaborating with us, our clients raised 0.3
						billion dollars to date
					</p>
				</div>
			</section>

			{/* Third line */}

			{/* FAQ */}
			<section
				style={{ gridArea: 'i' }}
				className="bg-[#EDEDED]"
			></section>

			<section style={{ gridArea: 'k' }} className="flex gap-5">
				{/* Djordje */}
				<div
					id="djordje"
					className="group flex-1 flex gap-4 flex-col rounded-2xl bg-[#A4D9D9] p-5 font-medium"
				>
					<div>{smallStar}</div>
					<div className="flex relative justify-center items-center flex-1">
						<img
							src="/djordje.png"
							alt="George, Bondin"
							className="w-[50%] transition group-hover:opacity-0 group-hover:invisible"
						/>
						<p className="absolute top-0 transition invisible opacity-0 group-hover:opacity-100 group-hover:visible">
							Working with them was seamless—they guided us in
							refining our vision and exploring our ideas,
							bringing us closer to our desired result with each
							iteration. We were thrilled with the final product!
						</p>
					</div>
					<p>— George, Bondin</p>
				</div>

				<div className="flex flex-col gap-5">
					{/* Munja */}
					<div className="bg-[#F5D925] rounded-2xl aspect-square text-[#151515] flex items-center justify-center">
						{bolt}
					</div>

					{/* ∞ */}
					<div className="bg-[#F0F0F0] rounded-2xl aspect-square text-[#FF4500] flex items-center justify-center">
						{infinity}
					</div>
				</div>

				{/* Features */}
				<div
					id="features"
					className="flex-1 rounded-2xl bg-[#CCE3E3] p-5"
				>
					<ul className="h-full flex flex-col justify-between">
						{FEATURES.map(f => (
							<li
								key={f}
								className="group flex gap-[0.6em] text-[#151515] items-center hover:font-bold hover:text-[#0A70F8]"
							>
								<i>{featureStar}</i> {f}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Subscribe */}
			<section
				style={{ gridArea: 'p' }}
				className="bg-[#EDEDED]"
			></section>
		</main>
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
		width="100%"
		className="max-h-[40%]"
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
		width="50%"
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

const bolt = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-w-[50%] max-h-[50%] w-[47px] object-contain"
		fill="none"
		viewBox="0 0 47 68"
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12.398 0h30.276L28.257 23.983H47L13.84 68l4.903-31.206H0L12.398 0Z"
			clipRule="evenodd"
		/>
	</svg>
)

const infinity = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-w-[50%] max-h-[50%] w-[91px] object-contain"
		fill="none"
		viewBox="0 0 91 45"
	>
		<path
			fill="currentColor"
			d="M83.828 6.62C79.564 2.358 73.953 0 68.005 0c-5.386 0-10.66 2.581-15.71 7.519l-.113.112-6.958 7.182-7.967 8.304-6.958 7.182c-1.57 1.571-4.152 3.367-7.855 3.367-3.03 0-5.835-1.122-7.968-3.254-2.132-2.133-3.254-4.938-3.254-7.968 0-3.03 1.122-5.835 3.254-7.968 2.132-2.132 4.938-3.254 7.968-3.254 2.918 0 5.835 2.357 7.855 4.264l4.04 4.152 7.743-8.08-3.815-3.927-.112-.112C33.105 2.469 27.83 0 22.444 0 16.496 0 10.774 2.357 6.62 6.62 2.357 10.886 0 16.497 0 22.445s2.357 11.67 6.62 15.823c4.265 4.264 9.876 6.62 15.824 6.62 5.835 0 11.446-2.356 15.71-6.732l.113-.113 6.509-6.733 8.64-8.977 6.846-7.07c1.908-1.908 4.825-4.264 7.743-4.264 3.03 0 5.835 1.122 7.968 3.254 2.132 2.132 3.254 4.937 3.254 7.967 0 3.03-1.122 5.836-3.254 7.968-2.133 2.357-5.05 3.479-7.968 3.479-3.591 0-6.284-1.796-7.743-3.367l-4.04-4.152-7.855 8.08 3.815 3.928.112.112C56.56 42.53 62.17 45 68.005 45c5.948 0 11.67-2.357 15.823-6.62 4.264-4.265 6.62-9.876 6.62-15.824 0-6.06-2.356-11.783-6.62-15.935Z"
		/>
	</svg>
)

const featureStar = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1.15em"
		height="1.15em"
		fill="none"
		viewBox="0 0 20 20"
	>
		<circle
			cx="10"
			cy="10"
			r="10"
			className="fill-current group-hover:fill-white"
		/>
		<path
			fill="#fff"
			className="fill-white group-hover:fill-current"
			d="M9.953 19v-9H1c4.957 0 8.953 4.04 8.953 9ZM9.953 1v9H1c4.957 0 8.953-4.017 8.953-9ZM9.953 1v9H19c-4.986 0-9.047-4.017-9.047-9ZM9.953 19v-9H19c-4.986 0-9.047 4.04-9.047 9Z"
		/>
	</svg>
)
