import React from "react";
import logo from './Logo.png';
import styles from './logo.module.scss';

const Logo = () => {
    return (
        <img className={styles.logo} src={logo} alt="Logo"/>
    )
}

export default Logo;