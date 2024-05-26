import { useState, useEffect } from "react"

function Cleanup() {

    const [windowWidth, setWindowWidth] = useState(window.screen.width)

    const handelWindowWidth = () => {
        setWindowWidth(() => window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener('resize', handelWindowWidth)
    
      return () => {
        window.removeEventListener('resize', handelWindowWidth)
      }
    })
    

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "100vh", backgroundColor: "#212121", color: "#fff"}}>
        <h2>Window width: {windowWidth}</h2>
    </div>
  )
}

export default Cleanup