import React, { useEffect, useRef, useState } from 'react'

const easeOutExpo = (num: number): number => {
  return num === 1 ? 1 : 1 - Math.pow(2, -10 * num)
}

export default function useCountAnimation(
  start = 0,
  end: number,
  duration: number,
) {
  const animationFrame = 1000 / (Math.round(duration / 1000) * 60)
  const totalFrame = Math.round(duration / animationFrame)
  const frameRef = useRef(start)
  const [value, setValue] = useState(start)

  useEffect(() => {
    const countAnimation = () => {
      const progress = easeOutExpo(frameRef.current / totalFrame)
      const currentValue = Math.round(end * progress)
      setValue(currentValue)
      frameRef.current = requestAnimationFrame(countAnimation)

      if (end === currentValue) {
        cancelAnimationFrame(frameRef.current)
      }
    }

    const countInterval = setTimeout(countAnimation, 100)

    return () => {
      cancelAnimationFrame(frameRef.current)
      clearTimeout(countInterval)
    }
  }, [end, totalFrame])

  return value
}
