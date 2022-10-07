import React from 'react';
import styles from './Button.module.scss'

type ButtonPropsType = {
    disabled: boolean
    onClick: () => void
    title: string
}

export const Button: React.FC<ButtonPropsType> = ({disabled, onClick, title}) => {
    return (
        <div>
            <button className={styles.button}
                    disabled={disabled}
                    onClick={onClick}>{title}</button>
        </div>
    );
};