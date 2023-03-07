import { useEffect, useState } from 'react'

const GetSize = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])
  return windowWidth
}

export default GetSize
