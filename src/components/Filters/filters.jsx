import React , { useState, useEffect} from "react";
import styles from './filters.module.scss';
import { useDispatch } from 'react-redux';

import { setValueFilterTicket, switchFilterAll } from '../../store/ticketsSlice';

const Filters = () => {
    const [ checkedAll, setCheckedAll ] = useState(true);
    const [ checkedZero , setCheckedZero ] = useState(true);
    const [ checkedOne, setCheckedOne ] = useState(true);
    const [ checkedTwo, setCheckedTwo ] = useState(true);
    const [ checkedThree, setCheckedThree ] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        if (checkedZero && checkedOne && checkedTwo && checkedThree) {
          setCheckedAll(true);

        } else {
          setCheckedAll(false);
        }
      }, [checkedAll, checkedZero, checkedOne, checkedTwo, checkedThree]);

      useEffect(() => {
        dispatch(switchFilterAll(checkedAll));
      }, [dispatch, checkedAll]);
    
      useEffect(() => {
        dispatch(setValueFilterTicket({ isChecked: checkedZero, filterValue: 0 }));
      }, [checkedZero, dispatch]);
    
      useEffect(() => {
        dispatch(setValueFilterTicket({ isChecked: checkedOne, filterValue: 1 }));
      }, [checkedOne, dispatch]);
    
      useEffect(() => {
        dispatch(setValueFilterTicket({ isChecked: checkedTwo, filterValue: 2 }));
      }, [checkedTwo, dispatch]);
    
      useEffect(() => {
        dispatch(setValueFilterTicket({ isChecked: checkedThree, filterValue: 3 }));
      }, [checkedThree, dispatch]);

    const handleCheckboxChange = (event) => {
        switch (event.target.name) {
          case 'zero':
            setCheckedZero(event.target.checked);
            break;
          case 'one':
            setCheckedOne(event.target.checked);
            break;
          case 'two':
            setCheckedTwo(event.target.checked);
            break;
          case 'three':
            setCheckedThree(event.target.checked);
            break;
          default:
            setCheckedAll(event.target.checked);
            setCheckedZero(event.target.checked);
            setCheckedOne(event.target.checked);
            setCheckedTwo(event.target.checked);
            setCheckedThree(event.target.checked);
        }
      };


    return (
        <aside className={styles.filters}>
            <p className={styles.topic}> КОЛИЧЕСТВО ПЕРЕСАДОК </p>
            <div className={styles.list}>
                <span className={styles.span}>
                    <input type="checkbox" 
                        className={`${styles.custom_checkbox} ${styles.filters__input}`} 
                        id="all" 
                        name="all"
                        checked={checkedAll} 
                        onChange={(event) => handleCheckboxChange(event)}
                    />
                    <label className={styles.label} htmlFor="all">Все </label>
                </span>
                <span className={styles.span}>
                    <input type="checkbox" 
                        className={`${styles.custom_checkbox} ${styles.filters__input}`} 
                        id="zero" 
                        name="zero"
                        checked={checkedZero}
                        onChange={(event) => handleCheckboxChange(event)}
                    />
                    <label className={styles.label} htmlFor="zero">   Без пересадок</label>
                </span>
                <span className={styles.span}>
                    <input type="checkbox" 
                        className={`${styles.custom_checkbox} ${styles.filters__input}`} 
                        id="one" 
                        name="one"
                        checked={checkedOne}
                        onChange={(event) => handleCheckboxChange(event)}
                    />
                    <label className={styles.label} htmlFor="one">  1 пересадка</label>
                </span>
                <span className={styles.span}>
                    <input type="checkbox" 
                        className={`${styles.custom_checkbox} ${styles.filters__input}`} 
                        id="two" 
                        name="two"
                        checked={checkedTwo}
                        onChange={(event) => handleCheckboxChange(event)}
                    />
                    <label className={styles.label} htmlFor="two">   2 пересадки</label>
                </span>
                <span className={styles.span}>
                    <input type="checkbox" 
                        className={`${styles.custom_checkbox} ${styles.filters__input}`} 
                        id="three" 
                        name="three"
                        checked={checkedThree}
                        onChange={(event) => handleCheckboxChange(event)}
                    />
                    <label className={styles.label} htmlFor="three">3 пересадки</label>
                </span>
            </div>
        </aside>
    )
}

export default Filters;