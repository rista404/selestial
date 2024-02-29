import { useRef, TouchEventHandler } from 'react'

export function useTouchSwipe(onNext: () => void, onPrev: () => void) {
	const touchPos = useRef<number | null>(null)

	const onTouchStart: TouchEventHandler<HTMLDivElement> = e => {
		const touchDown = e.touches[0].clientY
		touchPos.current = touchDown
	}

	const onTouchMove: TouchEventHandler<HTMLDivElement> = e => {
		const touchDown = touchPos.current

		if (touchDown === null) {
			return
		}

		const currentTouch = e.touches[0].clientY
		const diff = touchDown - currentTouch

		if (diff > 5) {
			onNext()
		}

		if (diff < -5) {
			onPrev()
		}

		touchPos.current = null
	}

	return { onTouchStart, onTouchMove }
}
