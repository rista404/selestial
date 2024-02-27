import { Slider } from './slider'

export function RecognitionsBlock() {
	return (
		<Slider delay={4000} btnClassName="bg-black group-hover:bg-white">
			<div className="relative flex items-center justify-center bg-white text-[#FF4500] transition group-hover:bg-[#FF4500] group-hover:text-white">
				{awwardsLogo}
				<a
					className="2xl:opacity-0 transition 2xl:group-hover:opacity-100 fs-small absolute leading-none bottom-4 left-5 text-black group-hover:text-white"
					href="https://www.awwwards.com/"
					target="_blank"
					rel="noreferrer"
				>
					awwwards.com
				</a>
			</div>
			<div className="relative flex items-center justify-center bg-white text-[#DD1B36] transition group-hover:bg-[#DD1B36] group-hover:text-white">
				{odaLogo}
				<a
					className="2xl:opacity-0 transition 2xl:group-hover:opacity-100 fs-small absolute leading-none bottom-4 left-5 text-black group-hover:text-white"
					href="https://www.onlinedesignawards.com/"
					target="_blank"
					rel="noreferrer"
				>
					onlinedesignawards.com
				</a>
			</div>
			<div className="relative flex items-center justify-center bg-white text-black transition group-hover:bg-black group-hover:text-white">
				{fwaLogo}
				<a
					className="2xl:opacity-0 transition 2xl:group-hover:opacity-100 fs-small absolute leading-none bottom-4 left-5 text-black group-hover:text-white"
					href="https://thefwa.com/"
					target="_blank"
					rel="noreferrer"
				>
					thefwa.com
				</a>
			</div>
		</Slider>
	)
}

const awwardsLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-h-[50%] max-w-[50%] w-full h-full object-contain"
		fill="none"
		viewBox="0 0 180 105"
	>
		<path
			fill="currentColor"
			d="m120.629 0-18.254 70.611L85.107 0H61.069L43.8 70.611 25.546 0H0l32.884 104.317h22.15l18.05-67.327 18.05 67.327h22.157L146.176 0h-25.547ZM163.088 105c9.34 0 16.912-7.664 16.912-17.118 0-9.454-7.572-17.117-16.912-17.117-9.341 0-16.912 7.663-16.912 17.117S153.747 105 163.088 105Z"
		/>
	</svg>
)

const odaLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-h-[50%] max-w-[50%] w-full h-full object-contain"
		fill="none"
		viewBox="0 0 233 79"
	>
		<path
			fill="currentColor"
			d="M39.654 79.006c21.901 0 39.655-17.686 39.655-39.503S61.555 0 39.655 0C17.753 0 0 17.686 0 39.503s17.754 39.503 39.654 39.503ZM193.275 4.26l-35.267 71.375c-.768 1.554.369 3.37 2.105 3.37h70.529c1.736 0 2.874-1.816 2.106-3.37L197.486 4.259c-.862-1.74-3.349-1.74-4.211 0ZM117.204 1.32 79.913 75.617c-.78 1.554.352 3.383 2.1 3.383h35.859c21.901 0 39.655-17.686 39.655-39.503C157.521 18.2 140.594.836 119.403.03a2.351 2.351 0 0 0-2.199 1.291Z"
		/>
	</svg>
)

const fwaLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-h-[50%] max-w-[50%] w-full h-full object-contain"
		fill="none"
		viewBox="0 0 270 80"
	>
		<path
			fill="currentColor"
			d="M229.355 11.943c1.03 0 1.991.22 2.8.735 1.845.957 3.022 2.948 3.022 5.16v16.587h16.072a5.788 5.788 0 0 1 5.822 5.822 5.788 5.788 0 0 1-5.822 5.822h-16.072v15.778a5.788 5.788 0 0 1-5.822 5.821h-44.75a5.787 5.787 0 0 1-5.821-5.821V39.953c.147-3.095 2.727-5.601 5.821-5.601h38.923V23.586h-44.897l-21.305 39.59c-.368 1.77-1.477 3.316-3.169 4.13-.809.368-1.697.588-2.506.588-1.991 0-3.983-1.03-5.012-2.874-.221-.294-.368-.662-.515-1.03l-16.808-33.027-17.029 32.292c-.736 1.697-1.844 3.242-3.541 4.13-.81.367-1.698.588-2.507.588-1.991 0-3.982-1.03-5.012-2.874-.221-.294-.368-.662-.515-1.03l-20.57-40.325H45.785v10.765h27.794a5.788 5.788 0 0 1 5.822 5.822 5.788 5.788 0 0 1-5.822 5.822H45.785v16.072a5.788 5.788 0 0 1-5.822 5.822 5.788 5.788 0 0 1-5.821-5.822V46.153H17.775a5.788 5.788 0 0 1-5.822-5.822 5.788 5.788 0 0 1 5.822-5.822h16.072V17.922c0-2.212 1.256-4.13 3.021-5.16a5.873 5.873 0 0 1 2.801-.735h43.568c.956 0 1.844.22 2.653.662a5.33 5.33 0 0 1 2.874 2.8l17.249 33.837 17.25-32.292c.883-1.77 1.329-3.389 3.242-4.277.809-.368 1.697-.588 2.506-.588 1.476 0 2.874.515 3.909 1.55 1.03.809 1.55 1.402 2.286 2.8l16.293 32.807 18.284-33.91c.442-.81 1.104-1.477 1.918-1.992 1.03-.809 2.286-1.329 3.762-1.329h53.892m-39.144 43.862h33.322v-9.878h-33.322v9.878ZM229.355 0h-53.892c-3.909 0-7.739 1.33-10.839 3.688-2.139 1.477-3.909 3.463-5.16 5.675l-.074.147-.073.147-7.445 13.86s-8.628-16.955-11.207-19.02a17.823 17.823 0 0 0-11.649-4.35c-2.653 0-5.307.589-7.739 1.77-4.645 2.213-7.225 6.343-9.363 11.134l-5.601 10.467-6.857-13.42a17.7 17.7 0 0 0-8.48-8.254 17.71 17.71 0 0 0-7.74-1.77H39.67c-2.948 0-5.895.735-8.48 2.138-5.748 3.095-9.29 9.142-9.29 15.631v4.645h-4.13C7.966 22.488 0 30.448 0 40.258c0 9.809 7.96 17.77 17.77 17.77h4.13v4.129c0 9.804 7.96 17.77 17.769 17.77 9.81 0 17.77-7.96 17.77-17.77v-4.13h15.778c3.389 0 6.636-.956 9.363-2.653l7.004 13.713c.367.81.735 1.55 1.182 2.286 3.242 5.306 8.995 8.553 15.184 8.553 2.654 0 5.307-.588 7.74-1.77 4.35-2.065 8.107-5.601 10.025-10.099l5.086-11.28 6.342 12.384c.367.809.735 1.55 1.176 2.285 3.242 5.307 8.996 8.554 15.185 8.554 2.653 0 5.307-.588 7.739-1.77a18.116 18.116 0 0 0 8.848-9.584 17.85 17.85 0 0 0 16.514 11.06h44.75c9.804 0 17.77-7.666 17.77-17.47v-4.13h4.129c9.805 0 17.77-7.96 17.77-17.77 0-9.804-7.96-17.77-17.77-17.77h-4.129v-4.644c0-6.563-3.536-12.531-9.29-15.631C235.255.736 232.303 0 229.355 0Z"
		/>
	</svg>
)
