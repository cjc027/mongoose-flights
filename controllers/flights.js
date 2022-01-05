const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function index(req, res) {
    Flight.find({}, function (err, flightDocs) {
        res.render('flights/index', {
            flights: flightDocs
        })
    })
}

function newFlight(req, res) {
    res.render('flights/new', {
        // defaultDate: instantiates a new date object 1 year ahead of the current date (based on the client's timezone/system time).
        // timezoneOffset: takes the timezone offset (difference between client's time and UTC in minutes), then converts to milliseconds (60 * 1000)
        defaultDate: Date.parse(new Date(Date.now() + 365*24*60*60*1000)),
        timezoneOffset: new Date().getTimezoneOffset()*60000
    })
}

function create(req, res) {

    if (!!req.body.departs) {
        req.body.departs = new Date(req.body.departs);
    } else {
        req.body.departs = undefined;
    }

    Flight.create(req.body, function (err, flightDoc) {
        res.redirect('/flights');
    })
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flightDoc){
        Ticket.find({flight: flightDoc._id}, function(err, ticketDocs){
            res.render('flights/show', {
                title: 'Flight Details', 
                flight: flightDoc, 
                tickets: ticketDocs
            });
        })
    });
}