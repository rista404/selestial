import { Children, useEffect, useState } from 'react'

export function Slider({
	children,
	btnClassName,
	delay = 5000,
}: { children: React.ReactNode; btnClassName: string; delay?: number }) {
	const [active, setActive] = useState(0)
	const [mouseIn, setMouseIn] = useState(false)
	const len = Children.count(children)

	useEffect(() => {
		if (mouseIn) {
			return
		}

		const timeout = setTimeout(() => {
			setActive((active + 1) % len)
		}, delay)
		return () => {
			clearTimeout(timeout)
		}
	}, [active, mouseIn, len, delay])

	return (
		<div
			className="group w-full h-full overflow-hidden relative"
			onMouseEnter={() => setMouseIn(true)}
			onMouseLeave={() => setMouseIn(false)}
		>
			<div
				className="w-full h-full *:w-full *:h-full transition-transform"
				style={{ transform: `translateY(-${active * 100}%)` }}
			>
				{children}
			</div>
			<div className="absolute right-[10px] top-0 bottom-0 !w-auto !h-full">
				<div className="flex flex-col justify-center h-full">
					{Array.from({ length: len }).map((_, i) => (
						<button
							key={i}
							data-current={active}
							data-active={i === active}
							onClick={() => setActive(i)}
							className={
								`w-[7px] h-[7px] rounded-full my-1 opacity-20 transition data-[active=true]:opacity-100 ` +
								(btnClassName ?? '')
							}
						/>
					))}
				</div>
			</div>
		</div>
	)
}