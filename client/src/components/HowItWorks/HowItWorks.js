import React from "react";
import styles from "./HowItWorks.module.sass"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import CONSTANTS from '../../constants';

const HowItWorks = () => {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <section className={styles.sectionOne}>
                    <div className={styles.information}>
                        <span className={styles.span}>World's #1 Naming Platform</span>
                        <h1>How Does Squadhelp Work?</h1>
                        <p>
                        Squadhelp helps you come up with a great name for your business by
                        combining the power of crowdsourcing with sophisticated technology
                        and Agency-level validation services.
                        </p>
                        <a href='https://vimeo.com/368584367'>
                        <i className='fas fa-play'></i>
                            <span className={styles.btn}></span>Play video
                        </a>
                    </div>
                    <div className={styles.image}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/phone2.png`}></img>
                    </div>
                </section>               
            </div>
            <Footer/>
        </div>
    )
}

export default HowItWorks;