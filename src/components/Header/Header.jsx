import React from 'react'
import styles from "./Header.module.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate= useNavigate()

  return (
    <div className={styles["header__container"]}>
        <div className={styles["header__logo"]}>
            <img src="https://fibowin4.com/img/logo.8ac7641c.svg" className={styles["header__img__logo"]} alt="" />
        </div>
        <div className={styles["header__no__auth"]}>
            <div onClick={()=> navigate("/register")} className={styles["header__btn__signup"]}>Đăng ký</div>
            <div onClick={()=> navigate("/login")} className={styles["header__btn__login"]}>Đăng nhập</div>
        </div>
    </div>
  )
}

export default Header