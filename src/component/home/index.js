import React from 'react';
import styles from '../../module/styles.module.css';
import {Link} from 'react-router-dom';

const Home = () => (
  <div className={styles.root__AdsContainer}>
    <div className={styles.root__sale}>
      <Link to="/sale">
        <img
          src="https://image.freepik.com/free-vector/promotion-fashion-banner_1188-161.jpg"
          alt=""
        />
      </Link>
    </div>

    <div className={styles.root__feature}>
      <div className={styles.root__hot}>
        <Link to="/hot">
          <img
            src="https://image.freepik.com/free-vector/promotion-fashion-banner_1188-161.jpg"
            alt=""
          />
        </Link>
      </div>

      <div className={styles.root__new}>
        <a href="/">
          <img
            src="https://image.freepik.com/free-vector/promotion-fashion-banner_1188-161.jpg"
            alt=""
          />
        </a>
      </div>
    </div>

  </div>
);

export default Home;