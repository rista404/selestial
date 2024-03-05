export function Slogan() {
	return (
		<p className="leading-tight max-2xl:!fs-heading">
			<div className="line-clamp-1 relative">
				<strong className="transition duration-300 group-hover:translate-y-[-100%] text-white font-bold line-clamp-1">
					Shockingly
				</strong>
				<strong className="transition duration-300 group-hover:translate-y-[-100%] text-white font-bold line-clamp-1 absolute top-[100%] left-0 right-0">
					Shockingly
				</strong>
			</div>
			<div className="line-clamp-1 relative">
				<span className="transition duration-[400ms] group-hover:translate-y-[-100%] text-black line-clamp-1">
					Straightforward
				</span>
				<span className="transition duration-[400ms] group-hover:translate-y-[-100%] text-black line-clamp-1 absolute top-[100%] left-0 right-0">
					Straightforward
				</span>
			</div>
		</p>
	)
}
