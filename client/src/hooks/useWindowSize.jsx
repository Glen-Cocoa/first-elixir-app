import { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'

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
  const debouncedResize = useCallback(debounce(handleResize, 10), [])
  useEffect(() => {
    window.addEventListener('resize', debouncedResize)
    return () => window.removeEventListener('resize', debouncedResize)
  })

  return windowSize
}
