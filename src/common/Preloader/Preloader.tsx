import React from 'react';
import preloader from '../../assets/preloader.gif'
import styles from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt={'Loading...'}/>
        </div>
    );
};

export default Preloader;