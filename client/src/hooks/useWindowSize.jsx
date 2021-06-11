import { useState, useEffect, useCallback } from 'react'
import { throttle } from 'lodash'

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window

  return {
    width,
    height
  }
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  const handleResize = () => {
    setWindowSize(getWindowSize())
  }
  const throttledResize = useCallback(throttle(handleResize, 10), [windowSize])
  useEffect(() => {
    window.addEventListener('resize', throttledResize)
    return () => window.removeEventListener('resize', throttledResize)
  })

  return windowSize
}
