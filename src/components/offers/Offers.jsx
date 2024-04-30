import React from 'react'
import styles from "./Offers.module.css"
import { HiOutlineRefresh  } from "react-icons/hi"
import { BsClipboardCheck, BsGraphUpArrow } from "react-icons/bs"
import { FaGlobe} from "react-icons/fa"

const Offers = () => {
  return (
    <div id='offers' className={styles.offers}>
        <div className={styles.heading}>
            <h3 className={styles.justa}><span>O</span>ur Services</h3>
            <p>Biz Edge Consulting Group offers a comprehensive suite of consulting services designed to help businesses grow and succeed. Our core services include:</p>
        </div>

        <div className={styles.cards}>

            <div className={styles.card}>
              <span><BsGraphUpArrow size={32}/></span>
              <h4>Business Strategy</h4>
              <li>We help you create a clear and actionable business plan that aligns with your vision and objectives.</li>
            </div>

            <div className={styles.card}>
              <span> <BsClipboardCheck size={32}/></span>
              <h4>Market Expansion</h4>
              <li>We guide you through the process of entering new markets, from market research to implementation.</li>
            </div>

            <div className={styles.card}>
              <span><FaGlobe size={32}/></span>
              <h4>Project Management</h4>
              <li>Our project management experts ensure your projects are delivered on time and within budget.</li>
            </div>
            
            <div className={styles.card}>
              <span>< HiOutlineRefresh size={32}/></span>
              <h4>Change Management</h4>
              <li>We assist with organizational changes, ensuring a smooth transition and minimal disruption.</li>
            </div>
        </div>
    </div>
  )
}

export default Offers 

