import React, { useEffect } from "react";
import Image from 'next/image'
// import image from "../../assets/imges/image_1.jpg";
// import img2 from "../../public/next.svg";
 import Images from '../../assets/imges/image_1.jpg'
import styles from "@/styles/aos.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
function aos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []); 
  return (
    <div>
      <div >
        <div className={styles.sliderimg}> 
        <div className="container">  <Image data-aos="fade-left" src={Images} style={{width:"100%",height:"500px"}}/></div> 
      
        </div>
        {/* <img src={image} alt="test" /> */}
        <div className={styles.head}>
          <div>
            <div data-aos="fade-up">
              <h1 className={styles.headtitle}>Questions?</h1>
              <h1 className={styles.headtitle}> Feel free to contact us.</h1>
            </div>
          </div>
        </div>
        <div className={styles.contact} >
          <div className="container" data-aos="fade-up" >
            <div data-aos="fade-up" class="row align-items-start">
              <div class="container col-lg-4 col-md-6 col-xm-12">
                <span className={styles.companyname}>Quick Books</span>
                <p>
                  Resolve all your bookkeeeping issues with quickbook +
                  cratoflow integration
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-xm-12">
                <span className={styles.companyname}>Plaid</span>
                <p>
                  Simplify your trnsaction data analyses Plaid + cratoflow
                  integration
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-xm-12">
                <span className={styles.companyname}>Square</span>
                <p>
                  Uncomplicate your sales numbers reconsilation with Square +
                  cratoflow integration
                </p>
              </div>

              <div class="col-lg-4 col-md-6 col-xm-12">
                <span className={styles.companyname}>Saga Intacct</span>
                <p>
                  Streamline your business with this sage Intacct + cratoflow
                  integration and automate your accounting reqirements
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-xm-12">
                <span className={styles.companyname}>Netsuite</span>
                <p>
                  All-In-One cloud solution that hepls provide realtime
                  financial and operational visibility
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-xm-12">
                <span className={styles.companyname}>Salesforce</span>
                <p>
                  Manage all your CRM activities effortlessly with Salesforce +
                  cratoflow integration
                </p>
              </div>

              <div class="col-lg-4 col-md-6 col-xm-12">
                <span className={styles.companyname}>SAP</span>
                <p>
                  Sitback and let this intelligant cratoflow + SAP integration
                  Simplify your accounting process for you
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-xm-12">
                <span className={styles.companyname}>Paypal</span>
                <p>
                  with Paypal and cratoflow integration,avail several
                  Paymentoriented solutions and benefits for your business
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-xm-12">
                <span className={styles.companyname}>Stripe</span>
                <p>
                  Boost your business efficiency in no time with the single
                  stripe + cratoflow integration
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.benefits}>
          <div className="container">
            <div data-aos="fade-up" class="row">
              <div class="col-lg-8 col-md-6 col-xm-12">
                <h1>Turn On auto Pilot</h1>
                <h4>Try cratoflow now</h4>
                <p className="">Get started now</p>
                <p>Give as a call : 424 256-9877</p>
              </div>
              <div class="col-lg-4 col-md-6 col-xm-12">
                <p>Easisit Onboarding</p>
                <p>24/7 Support</p>
                <p>Realtime integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aos;
