import React from 'react'
import styles from "./About.module.css"

const About = () => {
  return (
    <div id='about' className={styles.about}>
        <h3 className={styles.justa}><span>A</span>bout Us</h3>

          <div className={styles.textarea}>
          <p>Strategic Consulting Group is a leading business consulting firm dedicated to helping organizations navigate the complexities of today's business environment. Our journey began over two decades ago with a vision to create a consulting firm that focuses on personalized solutions and measurable results. Today, we are proud to serve clients across various industries, offering a comprehensive range of consulting services designed to drive success.</p>

          <p>Our mission is to empower businesses to thrive in a competitive landscape. We achieve this by offering tailored consulting services that address each client's unique challenges and goals. We believe in building long-term relationships with our clients, providing ongoing support, and measuring our success by their success. Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses of all sizes.</p>
        </div>
        
      </div>
  )
}

export default About


