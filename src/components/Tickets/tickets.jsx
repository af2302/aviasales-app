import React from "react";
import PropTypes from 'prop-types';
import styles from './tickets.module.scss'
import enumeration from '../../utilities/enumeration'
import { getArrivalTime, getDepartureTime, getTravelTime } from '../../utilities/dateUtility';


const Ticket = ({ price,carrier, segments }) => {
    const priceString = String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.price}>
                {`${priceString} \u20bd`}
                </div>
                <div className={styles.company}>
                    <img alt={'logo'} src={`//pics.avs.io/99/36/${carrier}.png`}/>
                </div>
            </div>
            {segments.map((item) => (
            <div className={styles.grid__container} key={item.date}>
                <div className={styles.gridtable}>
                    <div className="route">
                        <div className={styles.gray__text}>{item.origin}-{item.destination}</div>
                        <div className={styles.data}>{getDepartureTime(item.date)} - {getArrivalTime(item.date, item.duration)}</div>
                    </div>
                    <div className="time">
                        <div className={styles.gray__text}>в пути</div>
                        <div className={styles.data}> {getTravelTime(item.duration)}</div>
                    </div>
                    <div className="stops">
                        <div className={styles.gray__text}>{item.stops.length} {enumeration(item.stops.length)}</div>
                        <div  className={styles.data}> {item.stops.join(', ')}</div>
                    </div>
                </div>
    
            </div>
            ))}
        </div>
    );
}
Ticket.defaultProps = {
    price: 0,
    carrier: '',
    segments: [],
  };
  Ticket.propTypes = {
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.instanceOf(Array),
  };

export default Ticket;