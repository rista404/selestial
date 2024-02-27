import { useEffect, useState } from 'react'

export function Clock() {
	const [time, setTime] = useState<Date | null>()

	useEffect(() => {
		setTime(new Date())

		const timerId = setInterval(() => {
			setTime(new Date())
		}, 1000)
		return () => clearInterval(timerId)
	}, [])

	if (!time) {
		return null
	}

	return (
		<div className="clock">
			<div
				className="hour_hand"
				style={{
					transform: `rotateZ(${time.getHours() * 30}deg)`,
				}}
			/>
			<div
				className="min_hand"
				style={{
					transform: `rotateZ(${time.getMinutes() * 6}deg)`,
				}}
			/>
			<div
				className="sec_hand"
				style={{
					transform: `rotateZ(${time.getSeconds() * 6}deg)`,
				}}
			/>
		</div>
	)
}
