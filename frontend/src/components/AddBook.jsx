import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function AddBook({ user }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const userName=user.name;
    const userId=user.id;
    const [mode,setMode]=useState('Click');
    
    const onSubmit = async (data) => {
        const bookInfo = {
            user: userId,
            bookName: data.bookName,
            price: data.price,
            mode: mode,
            genre: data.genre,
            imageLink: "https://images.pexels.com/photos/27308308/pexels-photo-27308308/free-photo-of-lofoten-islands-of-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }

        console.log("sub info ",bookInfo);
        setMode('Click');
        axios.post('http://localhost:3000/books/create', bookInfo)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
    }

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Book</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Book</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-2 space-y-5'>
                        <label className='m-2' htmlFor="bookName">Book Name</label>
                        <br />
                        <input type="text" id="bookName" placeholder="Book Name" className="input input-bordered"
                            {...register("bookName", { required: true })} />
                        <br />
                        {errors.bookName && <span className='text-red-500'>This field is required</span>}
                        <br />
                        <label className='m-2' htmlFor="genre">Genre</label>
                        <br />
                        <input type="text" id="genre" placeholder="Genre" className="input input-bordered"
                            {...register("genre", { required: true })} />
                        <br />
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn m-1">{mode}</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li onClick={()=>setMode('Sell')}><a>Sell</a></li>
                                <li onClick={()=>setMode('Rent')}><a>Rent</a></li>
                            </ul>
                        </div>
                        <br />
                        <label className='m-4 pt-3' htmlFor="genre">Price</label>
                        <br />
                        <input type="number" id="price" placeholder="Price" className="input input-bordered"
                            {...register("price", { required: false })} />
                        <br />
                        
                        <div className='mt-5 flex justify-around align-middle'>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default AddBook