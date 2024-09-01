import express from 'express';

import {getBooks,createBook,deleteBook} from '../controller/book.controller.js';

const router=express.Router();
router.get('/',getBooks);
router.post('/create',createBook);
router.delete('/delete/:id',deleteBook);

export default router;

