import React from 'react'
import Cards from './Cards'
// import { useAuth } from '../contexts/AuthProvider';

function Course({ data,deln }) {
    console.log("deln",deln);
    
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-2'>
                <div className='mt-3 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    {
                        data.map((item) => (
                            <Cards key={item._id} item={item} deln={deln}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course