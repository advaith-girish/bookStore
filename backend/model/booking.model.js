import mongoose from "mongoose";
const bookingSchema=new mongoose.Schema({
    ownerId:String,
    reqUserId:String,
    reqUsername:String,
    bookId:String
});

const Booking=mongoose.model('Booking',bookingSchema);

export default Booking;