import mongoose from 'mongoose';
const bookSchema=new mongoose.Schema({
    bookName:String,
    price:Number,
    genre:String,
    user:String,
    mode: {
        type: String,
        enum: ['Sell','Rent'],
        required: true
    },
    imageLink:String
});

const Book=mongoose.model('Book',bookSchema);

export default Book;