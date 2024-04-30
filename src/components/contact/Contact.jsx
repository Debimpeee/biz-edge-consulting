import React from 'react'
import styles from "./Contact.module.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn  } from "react-icons/fa6";
import { MdLocalPhone, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
      <div className={styles.contact}>
        <div className={styles.heading}>
          <h3 className={styles.justa}><span>C</span>ontact Us</h3>
        </div>
        
        <div className={styles.container}>
          <div className={styles.brief}>
            <h1 className={styles.logo}>Biz-Edge</h1>
            <p> Biz Edge aims to be at the forefront of industry trends, guiding our clients toward sustainable growth and success.</p>
          </div>

          <div className={styles.location}>
          <span><FaLocationDot/></span>
              <p>123 Business Street, Suite 101</p>
              <p>Cityville, ST 12345</p>
            </div>

            <div className={styles.info}>
            <span><MdLocalPhone/></span>
                <p> +1 (123) 456-7890</p>
                <p>+1 (123) 987-6543 (Fax)</p>
            </div>

            <div className={styles.mail}>
            <span><MdEmail/></span>
                <p>contact@bizedgeconsulting.com</p>
                <div className={styles.icons}>
                  <li><a href="https://twitter.com/YourTwitterHandle">
                  <FaTwitter
                  size={15}/></a> </li>

                  <li><a href="https://linkedin.com/in/YourLinkedInProfile">
                  <FaLinkedinIn 
                  size={15}/></a></li>

                  <li><a href="https://facebook.com/YourFacebookPage">
                  <FaFacebookF 
                  size={15}/></a></li>

                  <li><a href="https://instagram.com/YourInstagramPage">
                  <FaInstagram 
                  size={15}/></a></li>
                </div>
              </div>
            </div>
              
            </div>
         )
      }

export default Contact

