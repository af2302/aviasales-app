import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortTicketByDuration, sortTicketByPrice, sortTicketOptimal } from "../../store/ticketsSlice";
import styles from './tabs.module.scss'
import classNames from 'classnames/bind'


const Tabs = () =>{
    const dispatch = useDispatch();

    const [cheap, setCheap] = useState(false);
    const [fast, setFast] = useState(false);
    const [optimal , setOptimal] = useState(false);

    const  cx = classNames.bind(styles);
    return(
        <div className={styles.container}>
            <span className={ cx({
                tabs: true,
                select : cheap,
            }) }
                onClick={() => { 
                    dispatch(sortTicketByPrice());
                    setCheap(true);
                    setFast(false);
                    setOptimal(false);
                }}
            >
                самый дешевый
            </span>
            <span className={ cx({
                tabs: true,
                select : fast,
            }) }
                onClick={() => { 
                    dispatch(sortTicketByDuration());
                    setCheap(false);
                    setFast(true);
                    setOptimal(false);
                }}>
                самый быстрый
            </span>
            <span className={ cx({
                tabs: true,
                select : optimal,
            }) }
                onClick={() => { 
                    dispatch(sortTicketOptimal());
                    setCheap(false);
                    setFast(false);
                    setOptimal(true);
                }}>
                оптимальный
            </span>
        </div>
    )
}

export default Tabs;