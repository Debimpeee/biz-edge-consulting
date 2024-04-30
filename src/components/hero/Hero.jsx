import React from 'react'
import styles from "./Hero.module.css"


const Hero = () => {

  return (
    <div className={styles.hero}>

      <div className={styles.text}>
        <span>We are Biz Edge</span>
        <h2>We Empower Businesses to Succeed</h2>
        <p>Unlock the full potential of your business with our expert consulting services. We provide strategic insights and practical solutions to help you thrive in today's competitive market.</p>

        <button><a href="#">Contact Us</a></button>
      </div>

      <div className={styles.image}>

        <img src="https://cdn.pixabay.com/photo/2020/07/11/23/36/meeting-5395615_960_720.jpg" alt="" />
      </div>
    
    </div>
  )
}


export default Hero
