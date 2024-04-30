import React from 'react'
import styles from "./Team.module.css"
import Members from "./Members"

const Team = () => {
  return (
<div id='team' className={styles.team}>

    <div className={styles.heading}>
        <h3 className={styles.justa}><span>M</span>eet Our Team</h3>
        <p>Our team at Biz Edge Consulting Group is comprised of experienced professionals with diverse backgrounds and expertise. Each member plays a critical role in delivering exceptional consulting services to our clients. Let's introduce you to our key team members:</p>
    </div>
    <div className={styles.teams}>
        <div className={styles.individual}>
        <Members
            image="https://media.istockphoto.com/id/1208414307/photo/happy-male-executive-in-office.webp?b=1&s=170667a&w=0&k=20&c=8V1_P4b0hMzVwpPGjly73lHGf0V_Rc2zNBd1e7FMLKo="
            name="Harry Barns"
            role="Lead Strategist"
        />
        <Members
            image="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
            name="Lara Smith"
            role="Project Manager"
        />
        <Members
            image="https://media.istockphoto.com/id/1314997483/photo/portrait-of-a-confident-mature-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=OxN-O2qe4LbgYuOnp_VkgXOV5p7CDC_uWja9iWFM-OA="
            name="Matt Jordan"
            role="Development Specialist"
        />
        <Members
            image="https://media.istockphoto.com/id/1464611811/photo/face-portrait-and-smile-of-business-man-in-office-ready-for-goals-mission-or-company-targets.jpg?s=612x612&w=0&k=20&c=3L3Y2l-tYluRuZ9qfWKy_XHmrpv-4SSKajN1qQq7ikU="
            name="David Wilson"
            role="Financial Consultant"
        />
        </div>
    </div>
</div>
  )
}


export default Team