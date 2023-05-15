import React from "react";
import styles from "./Questions.module.sass";
import CONSTANTS from "../../../constants";

const Questions = () => {

    return(   
    <section className={styles.sectionSeven}>
        <div className={styles.container}>

            <div className={styles.leftSection}>
            <article className={styles.article}>
                <span><i class="fas fa-angle-right btn-icon__inner"/></span>
                <div>
                    <h2>Pay a Fraction of cost vs hiring an agency</h2>
                    <p className={styles.text}>For as low as $199, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.</p>
                </div>
            </article>

            <article className={styles.article}>
                <span><i class="fas fa-angle-right btn-icon__inner"/></span>
                <div>
                    <h2>Satisfaction Guarantee</h2>
                    <p className={styles.text}>Of course! We have policies in place to ensure that you are satisfied with your experience. <a href='#'>Learn more</a></p>
                </div>
            </article>
            </div>

            <div className={styles.rightSection}>
                <h2 className={styles.header}>Questions?</h2>
                <p className={styles.text}>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
                <button href='#'>Schedule Consultation</button>
                <a href='tel:8773553585' className={styles.call}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phoneIcon.png`} alt='phoneIcon'/>
                    (877) 355-3585</a>
                <p className={styles.text}>Call us for assistance</p>
            </div>
            
        </div>
    </section>
    )
}

export default Questions;