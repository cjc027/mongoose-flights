const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
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
        invalid: ''
    })
}

function create(req, res) {

    // console.log(req.body);
    if (!!req.body.departs) {
        req.body.departs = new Date(req.body.departs);
    } else {
        req.body.departs = undefined;
    }

    Flight.create(req.body, function (err, flightDoc) {
        console.log(flightDoc, "<- flightDoc");

        res.redirect('/flights');
    })


}