import React from "react";
import Ticket from "../Tickets";
import { useSelector, useDispatch } from "react-redux";
import { showMoreTicket } from "../../store/ticketsSlice";
import filterTicketByTransfer from "../../utilities/filterTicketByTransfer";
import WarningMsg from '../WarningMsg';
import uniqKey from "../../utilities/uniqKey";
import Spin from "../Spin";

import styles from './ticketList.module.scss'

const TicketList = () => {
    const tickets = useSelector((state) => state.tickets.tickets);
    const numShowTicket = useSelector((state) => state.tickets.numShowTicket);
    const showAllTickets = useSelector((state) => state.tickets.showAllTickets);
    const valueFilterTransfer = useSelector((state) => state.tickets.valueFilterTransfer);
    const error = useSelector((state) => state.tickets.error);
    const isLoading = useSelector((state) => state.tickets.isLoading);

    const dispatch = useDispatch();

    const ticketsFilter = tickets.filter((item) => filterTicketByTransfer(item, showAllTickets, valueFilterTransfer));
    return (
      <div>
        {isLoading && <Spin />}
        {ticketsFilter.slice(0, numShowTicket).map((ticket) => (
          <Ticket key={uniqKey()} {...ticket} />
        ))}
        {ticketsFilter.length === 0 && !error && !isLoading && <WarningMsg />}
        {ticketsFilter.length > numShowTicket && (
          <button className={styles.button}type="button" onClick={() => dispatch(showMoreTicket())}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </button>
        )}
      </div>
    )
}

export default TicketList;