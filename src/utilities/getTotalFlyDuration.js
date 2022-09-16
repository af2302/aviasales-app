const getTotalFlyDuration = (ticket) => {
    ticket.segments.map((el) => el.duration)
                    .reduce((pr, cr) =>  pr + cr , 0);
}

export default getTotalFlyDuration;