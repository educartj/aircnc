const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController.js');
const SpotController = require('./controllers/SpotController.js');
const DashboardController = require('./controllers/DashboardController.js');
const BookingController = require('./controllers/BookingController.js');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

//routes.post('/bookings/:booking_id/approvals', ApprovalController.store)
//routes.post('/bookings/:booking_id/rejections', RejectionController.store)


module.exports = routes;