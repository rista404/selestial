import type { MetaFunction } from '@remix-run/cloudflare'

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

			<section
				style={{ gridArea: 'b' }}
				className="bg-[#CCE3E3] flex items-center justify-center"
			>
				{watch}
			</section>

			<section
				style={{ gridArea: 'v' }}
				className="bg-[#A8E682]"
			></section>

			<section
				style={{ gridArea: 'g' }}
				className="bg-neutral-700"
			></section>

			<section
				style={{ gridArea: 'd' }}
				className="bg-[#0A70F8]"
			></section>

			<section
				style={{ gridArea: 'đ' }}
				className="bg-[#FFEB6A] text-[#133200] flex items-center justify-center"
			>
				{download}
			</section>

			{/* Second line */}

			<section
				style={{ gridArea: 'e' }}
				className="bg-[#FF4500]"
			></section>

			{/* Video */}

			<section
				style={{ gridArea: 'ž' }}
				className="bg-[#133200]"
			></section>

			<section
				style={{ gridArea: 'z' }}
				className="flex flex-col items-stretch justify-between gap-5"
			>
				{/* Vrlo jednostavno */}
				<div
					id="straightforward"
					className="flex-1 flex items-center justify-center rounded-2xl bg-[#FFEB6A] text-center p-5"
				>
					<p>
						<strong className="font-bold">Shockingly</strong>{' '}
						Straightforward
					</p>
				</div>
				{/* Milijarde */}
				<div
					id="milijarde"
					className="flex-1 rounded-2xl bg-[#A8E682] text-[#133200] p-5"
				>
					<p className="font-medium line-clamp-1">
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

			{/* Djordje */}
			<section
				style={{ gridArea: 'k' }}
				className="bg-[#CCE3E3]"
			></section>

			{/* Munja */}
			<section
				style={{ gridArea: 'l' }}
				className="bg-[#FFEB6A] text-[#133200] flex items-center justify-center"
			>
				{bolt}
			</section>

			{/* ∞ */}
			<section
				style={{ gridArea: 'r' }}
				className="bg-[#A8E682] text-[#133200] flex items-center justify-center"
			>
				{infinity}
			</section>

			{/* Features */}
			<section
				style={{ gridArea: 'o' }}
				className="bg-[#CCE3E3]"
			></section>

			{/* Subscribe */}
			<section
				style={{ gridArea: 'p' }}
				className="bg-[#EDEDED]"
			></section>
		</main>
	)
}

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
		className="max-w-[50%] max-h-[50%] w-[116px] object-contain"
		fill="none"
		viewBox="0 0 116 50"
	>
		<path
			fill="currentColor"
			d="M108.462 7.312A25.394 25.394 0 0 0 93.465.184 23.242 23.242 0 0 0 90.428 0c-3.144 0-6.234.552-9.056 1.63a25.742 25.742 0 0 0-8.977 5.682l-5.186 5.076-.081.08-8.976 8.784-.188.21-3.602 3.498-1.666 1.631-3.601 3.525-9.165 8.969c-2.848 2.788-6.369 4.655-10.212 5.418-1.37.29-2.768.447-4.22.447h-.752a20.436 20.436 0 0 1-10.83-3.524c-1.076-.71-2.07-1.552-3.01-2.473-3.064-3.077-5.08-7.075-5.644-11.336-.807-6.286 1.317-12.362 5.805-16.728a21.952 21.952 0 0 1 1.908-1.657 18.775 18.775 0 0 1 4.407-2.551C19.91 5.602 22.65 5.05 25.498 5.05c1.075 0 2.124.079 3.172.237.591.079 1.155.184 1.72.315 3.574.842 6.853 2.657 9.54 5.287l9.03 8.838a2.586 2.586 0 0 0 3.602 0 2.455 2.455 0 0 0 0-3.525l-9.03-8.837C39.447 3.367 34.206.868 28.535.237a23.242 23.242 0 0 0-3.037-.184c-3.144 0-6.234.552-9.083 1.63a25.394 25.394 0 0 0-8.95 5.682c-.94.92-1.8 1.92-2.58 2.945-7.283 9.758-6.423 23.54 2.58 32.352a24.455 24.455 0 0 0 4.247 3.366c4.085 2.578 8.815 3.946 13.787 3.946h.215c1.397 0 2.795-.132 4.165-.368 5.16-.842 9.89-3.236 13.68-6.944l3.655-3.577c.053-.027.107-.08.16-.132l9.165-8.969 1.451-1.446 2.15-2.105 1.478-1.42 3.817-3.708 10.615-10.39c.108-.105.242-.236.35-.315l.35-.342a20.57 20.57 0 0 1 5.616-3.551c2.526-1.078 5.267-1.63 8.116-1.63 1.048 0 2.123.078 3.171.236.592.079 1.156.184 1.72.316 3.575.841 6.854 2.656 9.541 5.286 4.676 4.577 6.799 10.968 5.698 17.544-.726 4.287-2.984 8.206-6.209 11.178a19.482 19.482 0 0 1-2.176 1.736c-2.258 1.552-4.784 2.657-7.499 3.209-1.37.29-2.795.42-4.246.42h-.752c-4.005-.157-7.848-1.42-11.073-3.682a19.88 19.88 0 0 1-2.58-2.156l-9.352-9.154a2.075 2.075 0 0 0-2.903 0l-.699.684a1.97 1.97 0 0 0 0 2.841l9.353 9.153a24.641 24.641 0 0 0 4.273 3.367C80.807 48.632 85.564 50 90.51 50h.188a24.28 24.28 0 0 0 4.166-.368c5.16-.868 9.89-3.235 13.679-6.944a25.89 25.89 0 0 0 1.828-1.999 24.555 24.555 0 0 0-.807-32.22 25.402 25.402 0 0 0-1.101-1.157Z"
		/>
	</svg>
)

const download = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="50%"
		fill="none"
		viewBox="0 0 110 110"
	>
		<circle cx="55" cy="55" r="53" stroke="currentColor" strokeWidth="4" />
		<path
			fill="currentColor"
			d="M57 30a2 2 0 1 0-4 0h4Zm-3.414 51.414a2 2 0 0 0 2.828 0l12.728-12.728a2 2 0 1 0-2.828-2.828L55 77.172 43.686 65.858a2 2 0 1 0-2.828 2.828l12.728 12.728ZM53 30v50h4V30h-4Z"
		/>
	</svg>
)
