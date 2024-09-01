import Book from '../model/book.model.js';

export const createBook=async(req,res)=>{
    const book=new Book({
        user:req.body.user,
        bookName:req.body.bookName,
        genre:req.body.genre,
        price:req.body.price,
        mode:req.body.mode,
        imageLink:req.body.imageLink
    });
    await book.save()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occurred while creating the book."
        });
    });
};

export const getBooks=async(req,res)=>{
    await Book.find()
    .then(books=>{
        res.status(200).json(books);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occurred while retrieving books."
        });
    });
};

export const deleteBook=async(req,res)=>{
    try {
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book', error });
    }
};
