import { Slider } from './slider'

export function LatestWorkBlock() {
	return (
		<Slider delay={6000} btnClassName="bg-black group-hover:bg-white">
			<div className="relative flex items-center justify-center bg-[#FFCC33] text-black">
				{renaultGroup}
				<a
					className="2xl:opacity-0 transition 2xl:group-hover:opacity-100 fs-small absolute leading-none bottom-4 left-5 text-black"
					href="https://www.renaultgroup.com"
					target="_blank"
					rel="noreferrer"
				>
					Renault Group
				</a>
			</div>
			<div className="relative flex items-center justify-center bg-[black] text-whute">
				{secondGraph}
				<a
					className="2xl:opacity-0 transition 2xl:group-hover:opacity-100 fs-small absolute leading-none bottom-4 left-5 text-white"
					href="https://www.renaultgroup.com"
					target="_blank"
					rel="noreferrer"
				>
					Renault Group
				</a>
			</div>
			<div className="relative flex items-center justify-center bg-[black] text-white">
				{fwaLogo}
			</div>
		</Slider>
	)
}

const renaultGroup = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="max-h-[50%] max-w-[50%] w-full h-full object-contain"
		fill="none"
		viewBox="0 0 240 138"
	>
		<circle
			cx="89.143"
			cy="68.571"
			r="68.365"
			stroke="#000"
			strokeWidth=".414"
		/>
		<circle
			cx="68.571"
			cy="68.571"
			r="68.365"
			stroke="#000"
			strokeWidth=".414"
		/>
		<circle
			cx="109.714"
			cy="68.571"
			r="68.365"
			stroke="#000"
			strokeWidth=".414"
		/>
		<circle
			cx="130.285"
			cy="68.571"
			r="68.365"
			stroke="#000"
			strokeWidth=".414"
		/>
		<circle
			cx="150.856"
			cy="68.571"
			r="68.365"
			stroke="#000"
			strokeWidth=".414"
		/>
		<circle
			cx="171.429"
			cy="68.571"
			r="68.365"
			stroke="#000"
			strokeWidth=".414"
		/>
		<path
			fill="#000"
			d="m141.004 59.252 23.629-36.905h46.91l-8.427-14.592C193.646 2.805 182.866 0 171.429 0c-37.872 0-68.572 30.7-68.572 68.571 0 16.505 5.836 31.646 15.552 43.475h50.743l-28.148-34.163v-18.63Z"
		/>
		<path
			fill="#000"
			d="M224.482 25.138H173.26l28.498 34.142v18.59l-23.986 36.973h-46.437l8.4 14.544c9.477 4.951 20.256 7.756 31.694 7.756 37.872 0 68.571-30.7 68.571-68.572 0-16.484-5.822-31.611-15.518-43.433Z"
		/>
	</svg>
)

const secondGraph = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="w-full h-full object-cover"
		fill="none"
		viewBox="0 0 330 220"
	>
		<path
			fill="#9F8681"
			d="M32.862 80.731a150.564 150.564 0 0 0-2.146 14.565l149.283 14.701L32.862 80.731Z"
		/>
		<path
			fill="#B1938C"
			d="M36.428 66.447a148.363 148.363 0 0 0-3.566 14.284l147.136 29.266-143.57-43.55Z"
		/>
		<path
			fill="#CDA59B"
			d="M318.611 52.585C296.071-1.765 242.505-40 180.001-40c-62.504 0-116.07 38.234-138.61 92.585L180 109.997l138.61-57.412Z"
		/>
		<path
			fill="#8F7A76"
			d="M30.717 95.296A152.63 152.63 0 0 0 30 109.997h150L30.717 95.296Z"
		/>
		<path
			fill="#BF9C93"
			d="M41.39 52.585a148.454 148.454 0 0 0-4.96 13.862L180 109.998 41.39 52.585ZM323.57 66.447a147.82 147.82 0 0 0-4.96-13.862L180 109.998l143.57-43.55Z"
		/>
		<path
			fill="#8F7A76"
			d="M330 109.997c0-4.96-.249-9.863-.717-14.701L180 109.997h150Z"
		/>
		<path
			fill="#9F8681"
			d="M329.283 95.296a148.97 148.97 0 0 0-2.147-14.565L180 109.997l149.283-14.701Z"
		/>
		<path
			fill="#B1938C"
			d="M327.136 80.731a149.793 149.793 0 0 0-3.566-14.284L180 109.997l147.136-29.266Z"
		/>
		<path
			fill="#816C68"
			d="M329.283 124.699c.473-4.838.717-9.742.717-14.701H180l149.283 14.701Z"
		/>
		<path
			fill="#60504D"
			d="M32.862 139.263a149.87 149.87 0 0 0 3.566 14.285l143.57-43.55-147.136 29.265ZM323.57 153.548c1.414-4.67 2.61-9.437 3.566-14.285L180 109.998l143.57 43.55Z"
		/>
		<path
			fill="#715F5C"
			d="m180 109.998 147.136 29.265a150.428 150.428 0 0 0 2.147-14.564L180 109.998Z"
		/>
		<path
			fill="#4E4341"
			d="M318.61 167.41a147.786 147.786 0 0 0 4.96-13.862L180 109.998l138.61 57.412Z"
		/>
		<path
			fill="#715F5C"
			d="M30.716 124.699c.478 4.93 1.2 9.788 2.146 14.564L180 109.998 30.716 124.699Z"
		/>
		<path
			fill="#816C68"
			d="M30 109.998c0 4.959.25 9.863.717 14.701L180 109.998H30Z"
		/>
		<path
			fill="#4E4341"
			d="M36.43 153.548c1.43 4.726 3.087 9.35 4.96 13.862L180 109.998l-143.57 43.55Z"
		/>
		<path
			fill="#3A3534"
			d="M41.39 167.41C63.932 221.766 117.498 260 180.002 260c62.504 0 116.07-38.234 138.61-92.59l-138.61-57.412-138.61 57.412Z"
		/>
		<path
			fill="#A0B8BA"
			d="M-57.138 80.731a150.53 150.53 0 0 0-2.146 14.565l149.282 14.701-147.135-29.266Z"
		/>
		<path
			fill="#ABC0C2"
			d="M-53.572 66.447a148.363 148.363 0 0 0-3.566 14.285l147.136 29.266-143.57-43.55Z"
		/>
		<path
			fill="#BECED0"
			d="M228.611 52.585C206.07-1.765 152.504-40 90.001-40 27.497-40-26.07-1.765-48.61 52.585L90 109.998l138.61-57.413Z"
		/>
		<path
			fill="#97B0B3"
			d="M-59.283 95.296A152.65 152.65 0 0 0-60 109.998H90L-59.283 95.296Z"
		/>
		<path
			fill="#B6C8CA"
			d="M-48.61 52.585a148.458 148.458 0 0 0-4.96 13.863L90 109.998-48.61 52.585ZM233.57 66.448a148.117 148.117 0 0 0-4.96-13.863L90 109.998l143.57-43.55Z"
		/>
		<path
			fill="#97B0B3"
			d="M240 109.998c0-4.96-.249-9.864-.717-14.702L90 109.998h150Z"
		/>
		<path
			fill="#A0B8BA"
			d="M239.283 95.296a149.271 149.271 0 0 0-2.147-14.565L90 109.997l149.283-14.701Z"
		/>
		<path
			fill="#ABC0C2"
			d="M237.136 80.732a150.094 150.094 0 0 0-3.566-14.285L90 109.998l147.136-29.266Z"
		/>
		<path
			fill="#89A3A5"
			d="M239.283 124.699c.473-4.838.717-9.742.717-14.702H90l149.283 14.702Z"
		/>
		<path
			fill="#6D888A"
			d="M-57.138 139.263a149.87 149.87 0 0 0 3.566 14.285l143.57-43.551-147.136 29.266ZM233.57 153.548c1.414-4.67 2.61-9.437 3.566-14.285L90 109.997l143.57 43.551Z"
		/>
		<path
			fill="#7C9597"
			d="m90 109.997 147.136 29.266a150.83 150.83 0 0 0 2.147-14.564L90 109.997Z"
		/>
		<path
			fill="#658183"
			d="M228.61 167.41a148.07 148.07 0 0 0 4.96-13.862L90 109.997l138.61 57.413Z"
		/>
		<path
			fill="#7C9597"
			d="M-59.284 124.699c.478 4.929 1.2 9.787 2.146 14.564l147.136-29.266-149.282 14.702Z"
		/>
		<path
			fill="#89A3A5"
			d="M-60 109.997c0 4.96.25 9.864.717 14.702L90 109.997H-60Z"
		/>
		<path
			fill="#658183"
			d="M-53.57 153.548c1.43 4.726 3.087 9.35 4.96 13.862L90 109.997l-143.57 43.551Z"
		/>
		<path
			fill="#4D696B"
			d="M-48.61 167.41C-26.068 221.765 27.498 260 90 260c62.504 0 116.07-38.235 138.611-92.59l-138.61-57.413-138.61 57.413Z"
		/>
		<path
			fill="#978B7F"
			d="M138.611 52.585C116.071-1.765 62.505-40 .001-40c-62.504 0-116.07 38.234-138.61 92.585L.001 109.998l138.61-57.413Z"
		/>
		<path
			fill="#938578"
			d="M143.57 66.447a147.83 147.83 0 0 0-4.96-13.862L0 109.998l143.57-43.55Z"
		/>
		<path
			fill="#7E7165"
			d="M150 109.997c0-4.96-.249-9.863-.717-14.701L0 109.997h150Z"
		/>
		<path
			fill="#85776A"
			d="M149.283 95.296a148.97 148.97 0 0 0-2.147-14.564L0 109.998l149.283-14.702Z"
		/>
		<path
			fill="#8B7D71"
			d="M147.136 80.732a149.793 149.793 0 0 0-3.566-14.285L0 109.998l147.136-29.266Z"
		/>
		<path
			fill="#796C60"
			d="M149.283 124.699c.473-4.838.717-9.742.717-14.701H0l149.283 14.701Z"
		/>
		<path
			fill="#706357"
			d="M143.57 153.548c1.414-4.67 2.61-9.437 3.566-14.284L0 109.998l143.57 43.55Z"
		/>
		<path
			fill="#75685C"
			d="m0 109.998 147.136 29.266a150.494 150.494 0 0 0 2.147-14.565L0 109.998Z"
		/>
		<path
			fill="#695D51"
			d="M138.61 167.41a147.786 147.786 0 0 0 4.96-13.862L0 109.998l138.61 57.412Z"
		/>
		<path
			fill="#5F564C"
			d="M-138.609 167.41C-116.069 221.766-62.503 260 .001 260c62.504 0 116.07-38.234 138.61-92.59L.001 109.998l-138.61 57.412Z"
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
