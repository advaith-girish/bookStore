import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Course from './Course'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddBook from './AddBook'
import Bookings from './Bookings'

const Profile = () => {

  let user = JSON.parse(localStorage.getItem("User"));
  let username = user.name;
  let userid=user.id;

  const [books, setBooks] = useState([]);
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    getBooks();
    getBookings();
  }, []);

  
    const getBookings = async () => {
        try {
            await axios.get(`http://localhost:3000/books/getbookings/${userid}`)
                .then(res => {
                    setBookings(res.data);
                    console.log("Fetched bookings",bookings);
                });
        }
        catch (err) {
            console.log(err);
        }
    }

  // console.log("name", user.id);
  const getBooks = async () => {
    try {
      await axios.get('http://localhost:3000/books')
        .then(res => {
          console.log(res.data);
          setBooks(res.data);
        });
    }
    catch (err) {
      console.log(err);
    }
  }

  let myCourses = books.filter((item) => item.user === userid);

  return (
    <>
      <Navbar />
      <div className='min-h-screen p-12'>
        <div className='mt-28 space-y-10 text-center'>
          <h1 className='text-2xl font-semibold text-teal-50 md:text-4xl'>Were delightd to have u here. :)<br /> {username}</h1>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit quas ea dignissimos quis minus, adipisci alias totam fuga aliquam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempore doloremque, deserunt modi eveniet amet sit sunt ullam quia omnis!
          </h5>
          <div className='flex gap-4 items-center justify-center'>
            <Link to='/'>
              <button className='mt-2 bg-pink-700 text-white rounded-lg px-4 py-2 hover:bg-pink-800 duration-300'>Back</button>
            </Link>
            <AddBook user={user} />
            <Bookings bookings={bookings}/>
          </div>
        </div>
        <h1 className='text-center text-3xl font-bold py-8 mt-4'>My Books</h1>
        <Course data={myCourses} deln={true}/>

        <h1 className='text-center text-3xl font-bold py-8 mt-4'>All Books</h1>
        <Course data={books} deln={false}/>
      </div>
      <Footer />
    </>
  )
}

export default Profile