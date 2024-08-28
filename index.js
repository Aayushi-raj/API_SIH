const express = require('express');
const app = express();
app.use(express.json());

// In-memory data storage
let trucks = [
    { id: 1, license_plate: 'ABC123', capacity: '10 tons', location: 'Mumbai' },
    { id: 2, license_plate: 'XYZ789', capacity: '15 tons', location: 'Pune' }
];

let bookings = [
    { id: 1, truck_id: 1, pickup_location: 'Mumbai', dropoff_location: 'Delhi', status: 'booked' }
];

