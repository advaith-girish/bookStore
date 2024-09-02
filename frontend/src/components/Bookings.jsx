import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Bookings({bookings}) {
    console.log("Bookings in compo ",bookings);
  return (
    <div>
        <button className="btn btn-accent" onClick={() => document.getElementById('my_modal_6').showModal()}>Bookings</button>
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className='text-white font-bold'>My Bookings</h1>
                    {bookings?.map((item) => (
                            <div className="card-body">
                                <h2 className="card-title">
                                reqUsername : {item.reqUsername}
                                </h2>
                                <div className="card-actions mt-2 flex justify-between">
                                <h2 className="card-title">
                                reqUserId : {item.reqUserId}
                                </h2>
                                <h2 className="card-title">
                                bookId : {item.bookId}  
                                </h2>
                                </div>
                            </div>
                    ))}
                    
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
                
            </dialog>
    </div>
  )
}

export default Bookings