import React from "react";
import styles from './tickets.module.scss'


const Tickets = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.price}>
                    price
                </div>
                <div className={styles.company}>
                    company
                </div>
            </div>
            <div className={styles.grid__container}>
                <div className={styles.gridtable}>
                    <div className="route">
                        <div>route</div>
                        <div>touteData</div>
                    </div>
                    <div className="time">
                        <div>time</div>
                        <div>timeData</div>
                    </div>
                    <div className="stops">
                        <div>stops</div>
                        <div>stopsData</div>
                    </div>
                </div>
                <div className={styles.gridtable}>
                <div className="route">
                        <div>route</div>
                        <div>touteData</div>
                    </div>
                    <div className="time">
                        <div>time</div>
                        <div>timeData</div>
                    </div>
                    <div className="stops">
                        <div>stops</div>
                        <div>stopsData</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickets;