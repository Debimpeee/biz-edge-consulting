import React from 'react'
import styles from "./Team.module.css"

const Members = ({image, name, role}) => {
  return (
    <div className={styles.members}>
        <img src={image} alt="/" />
        <h4 className={styles.text}>{name}</h4>
        <p className={styles.paragraph}>{role}</p>
      
    </div>
  )
}

export default Members
