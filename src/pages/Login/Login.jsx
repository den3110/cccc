import React, { useEffect, useState } from 'react'
// import styles from "./Signup.module.css"
import Home from '../Home/Home'

const Login = ({setIsAuthenticated }) => {
  const [transition, setTransition]= useState(false)
  useEffect(()=> {
    setTimeout(()=> {
        setTransition(true)
    }, 100)

  }, [])
  return (
    <div className={"login__container"}>
      <Home setIsAuthenticated={setIsAuthenticated} transition={transition} setTransition={setTransition} is_log_in={true} />
    </div>
  )
}

export default Login