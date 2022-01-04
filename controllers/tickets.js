const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res){
    console.log(req.params)
    res.render('tickets/new', {
        flightId: req.params.id
    })
}

function create(req,res){
    console.log(req.body)
    console.log(req.params)
    const newTicket = {
        flight: req.params.id,
        seat: req.body.seat,
        price: req.body.price
    };

    Ticket.create(newTicket, function(err, ticketDoc){
        console.log(ticketDoc, "<-- ticket document")
        res.redirect(`/flights/${ticketDoc.flight}`)
    })
}