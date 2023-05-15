import React from "react";
import styles from "./Brands.module.sass";
import CONSTANTS from "../../../constants";
import { Link } from 'react-router-dom';

const Brands = () => {
    return (
        <section className={styles.sectionEight}>
            <div className={styles.brands}>
                <h2 className={styles.featuredIn}>Featured In</h2>
                <div className={styles.brandsItems}>
                    <Link to="#"><img src={`${CONSTANTS.STATIC_IMAGES_PATH}forbes.png`} alt='forbes'/></Link>
                    <Link to="#"><img src={`${CONSTANTS.STATIC_IMAGES_PATH}TNW.png`} alt='TNW'/></Link>
                    <Link to="#"><img src={`${CONSTANTS.STATIC_IMAGES_PATH}chicago.png `} alt='chicago'/></Link>
                    <Link to="#"><img src={`${CONSTANTS.STATIC_IMAGES_PATH}mashable.png`} alt='mashable'/></Link>
                </div>           
            </div>
        </section>
    )
}

export default Brands;