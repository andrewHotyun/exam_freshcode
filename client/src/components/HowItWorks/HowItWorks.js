import React, { useState } from 'react';
import styles from "./HowItWorks.module.sass"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import CONSTANTS from '../../constants';
import Modal from 'react-modal';
import OurServices from './OurServices/OurServices';
import FAQ from './FAQ/FAQ';
import categories from './FAQ/FAQ.json'
import { Link } from 'react-router-dom';
import Statistics from './Statistics/Statistics';
import Questions from './Questions/Questions';
import Brands from './Brands/Brands';

const HowItWorks = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const faqCategories = (category, i) => (
        <div id={category.shortCategoryTitle} key={i}>
          <h3 className={styles.categoryTitle}>{category.categoryTitle}</h3>
          <div className={styles.faqs}>
            {category.faqs.map(faq => (
              <FAQ faq={faq} />
            ))}
          </div>
          <hr className={styles.line}></hr>

        </div>
      );

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
                    <h2 className={styles.header}>3 Ways To Use Squadhelp</h2>
                    <p>
                        Squadhelp offers 3 ways to get you a perfect name for your business.
                    </p>
                <OurServices/>
                </section>

                <hr className={styles.line}></hr>

                <section className={styles.sectionThree}>
                    <img
                        src={`${CONSTANTS.STATIC_IMAGES_PATH}/naming-steps-contest-icon.png`}
                        style={{ width: '4em', height: '4em', marginTop: '4em' }}
                    ></img>
                    <h3 className={styles.header}>How Do Naming Contests Work?</h3>
                    <div className={styles.fourNamingSteps}>
                        <img
                        style={{ width: '40em', height: '41em', marginTop: '3em'}}
                        src={`${CONSTANTS.STATIC_IMAGES_PATH}/naming-steps-contest-image.png`}
                        ></img>
                        <ul className={styles.fourNamingStepsList}>
                        <li>
                            <span className={styles.numbers}>1.</span><p>Fill out your Naming Brief and begin receiving name ideas in
                            minutes.</p>
                        </li>
                        <li>
                            <span className={styles.numbers}>2.</span><p>Rate the submissions and provide feedback to creatives.
                            Creatives submit even more names based on your feedback.</p>
                        </li>
                        <li>
                            <span className={styles.numbers}>3.</span><p>Our team helps you test your favorite names with your target
                            audience. We also assist with Trademark screening.</p>
                        </li>
                        <li>
                            <span className={styles.numbers}>4.</span><p>Pick a Winner. The winner gets paid for their submission.</p></li>
                        </ul>
                    </div>
                </section>

                <hr className={styles.line}></hr>

                <section className={styles.sectionFour}>
                    <ul className={styles.categories}>
                        {categories.map((category, i) => (
                        <li key={i}>
                            <a href={`#${category.shortCategoryTitle}`}>
                            {category.categoryTitle}{' '}
                            </a>
                        </li>
                        ))}
                    </ul>
                    <div className={styles.FAQitems}>{categories.map(faqCategories)}</div>
                </section>
                
                <section className={styles.sectionFive}>
                    <h1>Ready to get started?</h1>
                    <p>
                        Fill out your contest brief and begin receiving custom name
                        suggestions within minutes.
                    </p>
                    <Link to='/startContest'>
                        <span>Start A Contest</span>
                    </Link>
                    <img
                        className={styles.imageTop}
                        src={`${CONSTANTS.STATIC_IMAGES_PATH}/image-top.png`}
                    ></img>
                    <img
                        className={styles.imageBottom}
                        src={`${CONSTANTS.STATIC_IMAGES_PATH}/image-bottom.png`}
                    ></img>
                </section>

                <Statistics/>   

                <Questions/>     

                <Brands/>

            </div>
            <Footer/>
        </div>
    )
}

export default HowItWorks;