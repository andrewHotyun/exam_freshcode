import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../../constants';
import styles from './OurServices.module.sass';
import services from './waysToUse.json';

const OurServices = () => {
  const mapServices = (services, index) => (
    <article className={styles.services} key={index}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/${services.image}`}></img>
      <h3>{services.header}</h3>
      <p>{services.body} </p>
      <Link to={services.button}> {services.buttonText}</Link>
    </article>
  );
  return (
    <div className={styles.ourServices}>{services.map(mapServices)}</div>
  );
}

export default OurServices;
