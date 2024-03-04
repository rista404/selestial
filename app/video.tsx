import { useState } from 'react'

export function Video() {
	const [play, setPlay] = useState(false)

	if (play) {
		return (
			<div className="w-full h-full bg-[black] relative group">
				<video
					key="full-reel"
					className="w-full h-full object-contain"
					autoPlay
					playsInline
					controls
				>
					<source
						src="/selestial-full-reel-v1.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		)
	}

	return (
		<div className="w-full h-full bg-[#eae0d1] relative group">
			<video
				key="intro"
				className="w-full h-full pointer-events-none object-contain"
				autoPlay
				muted
				loop
				playsInline
			>
				<source src="/selestial-reel-intro-v1.mp4" type="video/mp4" />
			</video>

			<button
				onClick={() => setPlay(true)}
				className="absolute inset-0 flex justify-center items-center mx-auto"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 123 140"
					className="max-h-[40%] max-w-[40%] w-full h-full object-contain group-hover:scale-95 transition"
				>
					<path
						fill="#fff"
						d="M120.5 65.67c3.333 1.924 3.333 6.736 0 8.66L8 139.282c-3.333 1.925-7.5-.481-7.5-4.33V5.048C.5 1.2 4.667-1.207 8 .718L120.5 65.67Z"
					/>
				</svg>
			</button>
		</div>
	)
}
