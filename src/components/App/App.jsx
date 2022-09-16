import React, { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';

import { fetchSearchId, fetchTickets } from '../../store/ticketsSlice';

import Logo from '../Logo/logo'
import styles from './App.module.scss'
import deleteCookie from '../../utilities/deleteCookie'
import Main from '../Main';

const App = () => {
    const tickets = useSelector((state) => state.tickets.tickets);
    const fetchStatus500 = useSelector((state) => state.tickets.fetchStatus500);
    const stopFetch = useSelector((state) => state.tickets.stopFetch);
    const searchId = useSelector((state) => state.tickets.searchId);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchSearchId());
      return deleteCookie('searchId');
    }, [dispatch]);
  
    useEffect(() => {
      if (!stopFetch && searchId) dispatch(fetchTickets());
    }, [dispatch, tickets, fetchStatus500, stopFetch, searchId]);

  return(
  <>
    <Logo />
    <div className={styles.container}>
      <Main />
    </div>
  </>
  )
}

export default App;