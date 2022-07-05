import React from "react";
import styles from './filters.module.scss';

const Filters = () => {
    return (
        <aside className={styles.filters}>
            <p className={styles.topic}> КОЛИЧЕСТВО ПЕРЕСАДОК </p>
            <div className={styles.list}>
                <span className={styles.span}>
                    <input type="checkbox" className={`${styles.custom_checkbox} ${styles.filters__input}`} id="all" />
                    <label className={styles.label} htmlFor="all">Все </label>
                </span>
                <span className={styles.span}>
                    <input type="checkbox" className={`${styles.custom_checkbox} ${styles.filters__input}`} id="no" />
                    <label className={styles.label} htmlFor="no">   Без пересадок</label>
                </span>
                <span className={styles.span}>
                    <input type="checkbox" className={`${styles.custom_checkbox} ${styles.filters__input}`} id="one" />
                    <label className={styles.label} htmlFor="one">  1 пересадка</label>
                </span>
                <span className={styles.span}>
                    <input type="checkbox" className={`${styles.custom_checkbox} ${styles.filters__input}`} id="two" />
                    <label className={styles.label} htmlFor="two">   2 пересадки</label>
                </span>
                <span className={styles.span}>
                    <input type="checkbox" className={`${styles.custom_checkbox} ${styles.filters__input}`} id="three" />
                    <label className={styles.label} htmlFor="three">3 пересадки</label>
                </span>
            </div>
        </aside>
    )
}

export default Filters;