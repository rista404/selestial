import { Slider } from './slider'

export function LogosBlock() {
	return (
		<Slider btnClassName="data-[current=0]:bg-white data-[current=2]:bg-white data-[current=4]:bg-white data-[current=1]:bg-black data-[current=3]:bg-black">
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
	)
}

//
// LOGOS
//
export const renaultGroupLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-h-[50%] max-w-[50%] w-full h-full object-contain"
		fill="none"
		viewBox="0 0 159 79"
	>
		<path
			fill="#fff"
			d="m59.62 71.082-12.36-21.62a24.152 24.152 0 0 0 5.89-3.84 21.9 21.9 0 0 0 6.47-10.09v9.56c4.733-4.507 7.103-10.57 7.11-18.19 0-7.774-2.37-13.897-7.11-18.37v9.6a21.63 21.63 0 0 0-6.47-10.13c-5.113-4.5-12.203-6.75-21.27-6.75H0v76h16.38v-24.8h15l13 24.85h24.7l-9.45-16.54-.01 10.32Zm-18.54-35.83c-2.073 2-4.983 3-8.73 3H16.38v-22.3h16c3.753 0 6.663.97 8.73 2.91 2.067 1.94 3.103 4.693 3.11 8.26a10.65 10.65 0 0 1-3.14 8.13ZM158.7 38.002a30.337 30.337 0 0 0-.28-3.27h-46.86v14h24.09a17.501 17.501 0 0 1-2.47 6.9 15.511 15.511 0 0 1-6.93 5.88 25.274 25.274 0 0 1-10.33 2 21.67 21.67 0 0 1-11.34-3 20.363 20.363 0 0 1-7.77-8.44 30.92 30.92 0 0 1-.06-25.56 20.4 20.4 0 0 1 7.63-8.26 20.903 20.903 0 0 1 11.12-3 21.813 21.813 0 0 1 9.22 1.78 18.575 18.575 0 0 1 6.26 4.52 14.252 14.252 0 0 1 3.18 5.59h23a30.227 30.227 0 0 0-5.64-13.32 30.923 30.923 0 0 0-2.14-2.59v11.22a31.304 31.304 0 0 0-4.51-8.65 33.358 33.358 0 0 0-12-10 37.89 37.89 0 0 0-17.49-3.79 36.798 36.798 0 0 0-14.86 3 36 36 0 0 0-11.87 8.24 37.642 37.642 0 0 0-7.51 11.65v-10.37a38.12 38.12 0 0 0-6.66 11.14 42.35 42.35 0 0 0-2.79 15.58 41.6 41.6 0 0 0 2.85 15.58 39.002 39.002 0 0 0 6.6 11v-10.38a38.71 38.71 0 0 0 7.67 11.86 35.27 35.27 0 0 0 12 8.26 37.83 37.83 0 0 0 14.92 2.91 38.351 38.351 0 0 0 18.6-4.46 33 33 0 0 0 13-12.78 32.63 32.63 0 0 0 2-4.11v10.4a34.566 34.566 0 0 0 4.65-6.29c3.2-5.547 4.803-12.167 4.81-19.86-.03-1.13-.05-2.23-.09-3.38Z"
		/>
	</svg>
)

export const publicLogo = (
	<svg
		className="max-h-[50%] max-w-[50%] w-full h-full object-contain"
		viewBox="0 0 69 114"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M34.1888 68.3774C53.0706 68.3774 68.3776 53.0704 68.3776 34.1887C68.3776 15.3068 53.0706 0 34.1888 0C15.3069 0 0.000159882 15.3068 0.000159882 34.1887C0.000159882 53.0704 15.3069 68.3774 34.1888 68.3774Z"
			fill="#0038FF"
		/>
		<path
			d="M17.0943 114.002C21.6369 113.971 25.9833 112.146 29.1856 108.924C32.3879 105.702 34.1863 101.344 34.1887 96.8019C34.1887 87.5359 26.4657 79.813 17.0943 79.813C7.72299 79.813 0 87.5359 0 96.8019C0.00232303 101.344 1.80072 105.702 5.00302 108.924C8.20529 112.146 12.5517 113.971 17.0943 114.002Z"
			fill="#0038FF"
		/>
	</svg>
)

export const trustMachinesLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-h-[50%] max-w-[50%] w-full h-full object-contain"
		fill="none"
		viewBox="0 0 97 92"
	>
		<rect width="97" height="92" fill="url(#a)" rx="11" />
		<rect
			width="80.5"
			height="76.5"
			x="8.25"
			y="5.25"
			fill="#E2E2E2"
			stroke="#fff"
			strokeWidth=".5"
			rx="8.75"
		/>
		<path
			fill="#151515"
			d="M26.283 58.312h2.608v2.226c.625-.771 1.191-1.333 1.699-1.684.869-.596 1.855-.894 2.959-.894 1.25 0 2.256.308 3.017.923.43.351.82.869 1.172 1.552.586-.84 1.275-1.46 2.066-1.86.79-.41 1.68-.615 2.666-.615 2.11 0 3.545.762 4.306 2.285.41.82.616 1.924.616 3.31V74h-2.74V63.102c0-1.045-.263-1.763-.79-2.154-.518-.39-1.153-.586-1.905-.586-1.035 0-1.929.347-2.68 1.04-.743.694-1.114 1.85-1.114 3.472V74h-2.68V63.76c0-1.064-.127-1.84-.381-2.328-.4-.733-1.148-1.099-2.242-1.099-.996 0-1.904.386-2.724 1.157-.81.772-1.216 2.168-1.216 4.19V74h-2.637V58.312ZM18.46 53.932h2.667v4.38h2.505v2.153h-2.505v10.24c0 .546.186.912.557 1.098.205.107.546.16 1.025.16h.41c.147-.009.317-.023.513-.043V74c-.303.088-.62.151-.952.19-.323.04-.674.059-1.055.059-1.23 0-2.065-.313-2.505-.938-.44-.634-.66-1.455-.66-2.46V60.465h-2.123V58.31h2.124v-4.38Z"
		/>
		<defs>
			<linearGradient
				id="a"
				x1="48.5"
				x2="48.5"
				y1="0"
				y2="92"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#D9D9D9" />
				<stop offset="1" stopColor="#AFAFAF" />
			</linearGradient>
		</defs>
	</svg>
)

export const foundersFundLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-h-[50%] max-w-[50%] w-full h-full object-contain"
		fill="none"
		viewBox="0 0 110 107"
	>
		<path fill="#F8130E" d="M110 0H0v26.563h110V0Z" />
		<path fill="#9AEFDF" d="M110 26.563H0v26.563h110V26.563Z" />
		<path fill="#44C1C1" d="M110 53.126H0v26.563h110V53.126Z" />
		<path fill="#072735" d="M110 79.689H0v26.562h110V79.688Z" />
	</svg>
)

export const wordpressLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-h-[50%] max-w-[50%] w-full h-full object-contain"
		fill="none"
		viewBox="0 0 110 110"
	>
		<path
			fill="#fff"
			d="M55 0C24.671 0 0 24.671 0 55s24.671 55 55 55 55-24.677 55-55S85.323 0 55 0ZM5.552 55c0-7.17 1.537-13.974 4.284-20.126L33.425 99.5C16.93 91.487 5.552 74.573 5.552 55ZM55 104.453c-4.854 0-9.54-.71-13.968-2.013l14.835-43.11 15.197 41.643c.098.244.22.471.355.681A49.326 49.326 0 0 1 55 104.459v-.006Zm6.815-72.635c2.974-.157 5.657-.47 5.657-.47 2.666-.315 2.352-4.232-.314-4.075 0 0-8.008.629-13.182.629-4.86 0-13.026-.629-13.026-.629-2.665-.157-2.98 3.917-.314 4.074 0 0 2.52.314 5.186.471l7.706 21.11-10.826 32.453-18.001-53.568c2.98-.157 5.657-.472 5.657-.472 2.665-.314 2.345-4.23-.315-4.074 0 0-8.008.629-13.176.629-.926 0-2.02-.024-3.184-.058C22.523 14.416 37.726 5.552 55 5.552c12.874 0 24.596 4.924 33.39 12.985-.215-.012-.42-.04-.64-.04-4.86 0-8.306 4.23-8.306 8.776 0 4.074 2.352 7.525 4.86 11.6 1.88 3.294 4.074 7.525 4.074 13.636 0 4.231-1.63 9.143-3.76 15.988l-4.935 16.477-17.868-53.156Zm36.58-.54A49.228 49.228 0 0 1 104.453 55c0 18.246-9.888 34.17-24.59 42.743l15.104-43.668c2.822-7.054 3.76-12.694 3.76-17.711 0-1.822-.123-3.51-.332-5.087Z"
		/>
	</svg>
)
