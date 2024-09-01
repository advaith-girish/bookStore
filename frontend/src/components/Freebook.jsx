import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const Freebook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

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

  const filterData = books.filter((item) => item.price === 0)
  console.log(filterData);
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-6'>
        <h1 className='font-bold text-xl pb-2'>Free Books</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, blanditiis.</p>

        <div className="slider-container">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook