import React from 'react'
import Image from 'next/image'
import Images from "../assets/imges/cratoflow-logo.png"
import styles from "../styles/footer.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'
const footer = () => {
  return (
    <div className="container">
        <div className={styles.footerscontainer}>
      
        
          <div className={styles.footer}>
         <Image  style={{width:"210px",height:"70px"}} src={Images} alt="img"></Image>
       
        
         <div ><a className={styles.footer_email} href="#">sales@cratoflow.com</a></div>
         <div><a className={styles.phonenumber} href="#">(424) 256-9877</a></div>
         </div>
         <div className={styles.product}>
            <h6 className={styles.footerheading}>Product</h6>
            <div><a href="#" className={styles.productname}>CratoRev</a></div>
            <div><a href="#" className={styles.productname}>CratoSpend</a></div>
            <div><a href="#" className={styles.productname}>CratoMatch</a></div>
            <div><a href="#" className={styles.productname}>CratoPay</a></div>
         </div>
         <div style={styles.Resources}>
         <h6 className={styles.footerheading}>Resources</h6>
         <div><a href="#" className={styles.Resourcesname}>Pricing</a></div>
         <div><a href="#" className={styles.Resourcesname}>Integration</a></div>
        <div><a href="#" className={styles.Resourcesname}>Blogs</a></div>
         </div>
         <div className={styles.company}>
         <div><h6 className={styles.footerheading}>Company</h6></div>
         <div><a href="#" className={styles.pagename}>About Us</a></div>
         <div> <a href="#" className={styles.pagename}>Contact Us</a></div>
         </div>
         <div className={styles.quicklinks}>
         <h6 className={styles.footerheading}>Quick Links</h6>
         <div><a href="#" className={styles.pages}>Sign Up</a></div>
         <div><a href="#" className={styles.pages}>Login</a></div>
         <div><a href="#" className={styles.pages}>Schedule Demo</a></div>
         
         </div>
         </div>
      <div className={styles.footer_icon_content}>
        <div className={styles.footer_icons}>
            <button className={styles.twitter_icon}><FontAwesomeIcon icon={faTwitter} /></button> 
            <button className={styles.linkedin_icon}><FontAwesomeIcon icon={faLinkedin} /></button>
        </div>
        <div className={styles.footer_text}>
          <div><a className={styles.text_item} href="#">Licenses</a></div>
          <div><a className={styles.text_item} href="#">Instructions</a></div>
          <div><a className={styles.text_item} href="#">Changelog</a></div>
        </div>
      </div>
    </div>
  )
}

export default footer