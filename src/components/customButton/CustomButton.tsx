import React from 'react';
import styles from './CustomButton.module.scss'


type TCustomButtonProps = {
    buttonName: string
    onClick?: ()=>void;
    disabled?: boolean;
}

const CustomButton: React.FC<TCustomButtonProps> = ({buttonName,onClick,disabled}) => {

    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            {buttonName}
        </button>
    );
};

export default CustomButton;