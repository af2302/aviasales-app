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
            <div className={styles.gridtable}>
                <div>route</div>
                <div>time</div>
                <div>switches</div>
                <div>touteData</div>
                <div>timeData</div>
                <div>switchesData</div>
            </div>
            <div className={styles.gridtable}>
                <div>route</div>
                <div>time</div>
                <div>switches</div>
                <div>touteData</div>
                <div>timeData</div>
                <div>switchesData</div>
            </div>
        </div>
    )
}

export default Tickets;