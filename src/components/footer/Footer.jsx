import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <hr />
      <footer>
        <p className={styles.first}>&copy; 2024 Biz Edge Consulting Group. All rights reserved.</p>
        <p>Terms and Conditions | Privacy Policy</p>
    </footer>
    </div>
  )
}

export default Footer
