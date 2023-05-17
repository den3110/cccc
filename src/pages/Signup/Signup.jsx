import React, { useEffect, useState } from 'react'
// import styles from "./Signup.module.css"
import Home from '../Home/Home'

const Signup = () => {
  const [transition, setTransition]= useState(false)
  useEffect(()=> {
    setTimeout(()=> {
      setTransition(true)
    }, 100)

  }, [])
  return (
    <div className={"signup__container"}>
        <Home transition={transition} setTransition={setTransition} is_sign_up={true} />
    </div>
  )
}

export default Signup