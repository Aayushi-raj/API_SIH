const express = require('express');
const app = express();
app.use(express.json());


let trucks = [
    { id: 1, license_plate: 'ABC123', capacity: '10 tons', location: 'Mumbai' },
    { id: 2, license_plate: 'XYZ789', capacity: '15 tons', location: 'Pune' }
];

let bookings = [
    { id: 1, truck_id: 1, pickup_location: 'Mumbai', dropoff_location: 'Delhi', status: 'booked' }
];

app.get('/trucks', (req, res) => {
    res.json(trucks);
});

app.get('/trucks/:id', (req, res) => {
    const truck = trucks.find(t => t.id === parseInt(req.params.id));
    if (!truck) return res.status(404).send('Truck not found.');
    res.json(truck);
});


app.get('/bookings', (req, res) => {
    res.json(bookings);
});

app.post('/bookings', (req, res) => {
    const booking = {
        id: bookings.length + 1,
        truck_id: req.body.truck_id,
        pickup_location: req.body.pickup_location,
        dropoff_location: req.body.dropoff_location,
        status: req.body.status || 'booked'
    };
    bookings.push(booking);
    res.status(201).json(booking);
});

