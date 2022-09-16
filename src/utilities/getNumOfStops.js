const getNumOfStops = (ticket) =>
  ticket.segments
    .map((element) => element.stops.length)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

export default getNumOfStops;