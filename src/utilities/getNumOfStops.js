const getNumOfStops = (ticket) =>
  ticket.segments
    .map((element) => element.stops.length)
    .reduce((previousValue, currentValue) => { 
      return (previousValue > currentValue ? previousValue : currentValue)
    })

export default getNumOfStops;