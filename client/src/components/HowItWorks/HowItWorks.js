import React, { useState } from 'react';
import styles from "./HowItWorks.module.sass"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import CONSTANTS from '../../constants';
import Modal from 'react-modal';
import OurServices from './OurServices/OurServices';

const HowItWorks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
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
                        <div onClick={openModal}>
                            <i className='fas fa-play'></i>
                                <span className={styles.btn}></span>
                                Play video
                        </div>
                        <Modal className={styles.modal} isOpen={isOpen} onRequestClose={closeModal}>
                            <div className={styles.videoContainer}>
                            <iframe
                                title="video"
                                src="https://player.vimeo.com/video/368584367"
                                width="640"
                                height="360"
                                allowFullScreen
                            />
                            </div>
                        </Modal>
                    </div>
                    <div className={styles.image}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/phone2.png`}></img>
                    </div>
                </section>     

                <section className={styles.sectionTwo}>
                    <span className={styles.span}>Our Services</span>
                    <h2 className={styles.h2}>3 Ways To Use Squadhelp</h2>
                    <p>
                        Squadhelp offers 3 ways to get you a perfect name for your business.
                    </p>
                <OurServices/>
                </section>

                <hr className={styles.line}></hr>

                
            </div>
            <Footer/>
        </div>
    )
}

export default HowItWorks;