const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res){
    res.send('newTicket is being hit')
}

function create(req,res){
    console.log(req.body)
}