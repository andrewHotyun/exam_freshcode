import React from "react";
import styles from "./Statistics.module.sass";
import CONSTANTS from "../../../constants";

const Statistics = () => {
  return (
    <section className={styles.sectionSix}>
        <div className={styles.containerStatistics}>  
            <div className={styles.information}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}stars.png`}  alt='stars'/>
                <p className={styles.text}><span>4.9 out of 5 stars</span> from 25,000+ customers.</p>
            </div>
            <div className={styles.information}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}peoplesInfo.png`} alt='people'/>
                <p className={styles.text}>Our branding community stands<span> 200,000+</span> strong.</p>
            </div>
            <div className={styles.information}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}sharingFiles.png`} alt='sharing-files'/>
                <p className={styles.text}> <span>140+ Industries</span> supported across more than<span> 85 countries</span> - and counting.</p>
            </div>       
        </div>       
    </section>
    
  );
};

export default Statistics;