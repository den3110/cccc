import React, { useEffect, useState } from 'react'
// import styles from "./Signup.module.css"
import Home from '../Home/Home'

const RegisterWithEmail = () => {
  const [transition, setTransition]= useState(false)
  useEffect(()=> {
    setTimeout(()=> {
        setTransition(true)
    }, 100)

  }, [])
  return (
    <div className={"register__with__email__container"}>
        <Home transition={transition} setTransition={setTransition} is_register_with_email={true} />
    </div>
  )
}

export default RegisterWithEmail