import React from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

const   Cards = ({item,deln}) => {
    console.log("askd id",item._id);

    const deleteBook = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/books/delete/${id}`);
            console.log(response.data);
            toast.success("Deleted Book");
            setTimeout(() => {
                window.location.reload();
            }, 1500);            
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="card w-80 p-3 bg-base-100 shadow-lg hover:scale-105 hover:shadow-xl 
            dark:bg-slate-300 dark:text-black duration-300">
                <figure><img src={item.imageLink} alt="Book" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.bookName}
                    </h2>
                    <p>Genre: {item.genre}</p>
                    <h2>For {item.mode}</h2>
                    <div className="card-actions mt-2 flex justify-between">
                        <div className="badge badge-outline">Price: {(item.price!=0)?item.price:"Free"}</div>
                        <div className="px-2 py-1 rounded-xl hover:bg-purple-600 hover:text-white">
                        <button>
                            Book Now
                        </button>
                        </div>
                        {deln && <button onClick={()=>deleteBook(item._id)} className="p-1 rounded-xl hover:bg-red-700 hover:text-white">
                            🗑️
                        </button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards