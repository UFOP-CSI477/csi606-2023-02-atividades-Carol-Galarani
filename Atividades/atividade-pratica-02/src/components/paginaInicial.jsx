import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Style/home.module.css'
export function HomePage () {
    return (
        <div className={styles.container}>
            <h1>Home</h1> 

            <Link className= {styles.Link} to={'/tiposanguineo/*'}><button className={styles.divButton}>BloodType</button></Link>
            <Link className= {styles.Link} to={'/doar'}><button className={styles.divButton}>Donation</button></Link>
            <Link className= {styles.Link} to={'/city'}><button className={styles.divButton}>City</button></Link>
            <Link className= {styles.Link} to={'/person'}><button className={styles.divButton}>Person</button></Link>
            <Link className= {styles.Link} to={'/location'}><button className={styles.divButton}>Location</button></Link>
            <Link className= {styles.Link} to={'/state'}><button className={styles.divButton}>State</button></Link>
        </div>
    );
};
