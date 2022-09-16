import getNumOfStops from './getNumOfStops';

const filterTicketByTransfer = (ticket, showAllTickets, valueFilterTransfer) => {
  if (!showAllTickets) {
    return valueFilterTransfer.includes(getNumOfStops(ticket));
  }
  return true;
};
export default filterTicketByTransfer;