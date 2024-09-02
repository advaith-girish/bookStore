import express from 'express';

import {getBooks,createBook,deleteBook, doBooking, getBookings} from '../controller/book.controller.js';

const router=express.Router();
router.get('/',getBooks);
router.get('/getbookings/:id',getBookings);
router.post('/create',createBook);
router.post('/booking',doBooking);
router.delete('/delete/:id',deleteBook);

export default router;

