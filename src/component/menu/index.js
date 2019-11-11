import React from 'react';
import styles from '../../module/styles.module.css';
import { Link } from 'react-router-dom';

const Menu = () => (
    <div >
        <nav className={styles.navBar}>

            <ul>
                <li className="navBar-group">
                    <div className={styles.navBar__Item}>
                        <Link className={styles.link} to="/">HOME</Link>
                    </div>
                </li>
                <li className="navBar-group">
                    <div className={styles.navBar__Item}>
                        <Link className={styles.link} to="/sale">SALE</Link>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
);

export default Menu;