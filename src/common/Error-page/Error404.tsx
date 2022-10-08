import React from 'react';
import styles from './Error404.module.scss'
import {Link} from 'react-router-dom';

export const Error404 = () => {

    return (
        <div>
            <div className={styles.wrapper}>
                <div>
                    <span>44</span>
                </div>
                <Link to={'/character'}>
                    <button type="button">GET ME HOME</button>
                </Link>
            </div>
        </div>
    );
};