import React from "react";
import styles from './tabs.module.scss'


const Tabs = () =>{
    return(
        <div className={styles.container}>
            <span className={styles.tabs}>самый дешевый</span>
            <span className={styles.tabs}>самый быстрый</span>
            <span className={styles.tabs}>оптимальный</span>
        </div>
    )
}

export default Tabs;