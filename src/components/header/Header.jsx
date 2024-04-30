import React, { useState } from 'react'
import styles from "./Header.module.css"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Header = () => {

  const [nav, setNav] = useState(false)

  return (
    <div className={styles.header}>

      <h1 className={styles.logo}>Biz-Edge</h1>

      <nav>
        <ul className={nav ? [styles.navlist, styles.active].join(' ') : [styles.navlist]}>
            <li><a href="#home">Home</a></li>
            <li><a href="#offers">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>

            <button><a href="#">Contact Us</a></button>
        </ul>
      </nav>

      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25}/> :  <AiOutlineMenu size={25}/> }
      </div>

    </div>
  )
}

export default Header
