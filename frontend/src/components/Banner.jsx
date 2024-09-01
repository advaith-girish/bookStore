import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4 py-2 flex flex-col md:flex-row '>
                <div className='space-y-12 order-2 md:order-1 w-1/2 mt-12 md:mt-32'>
                    <h1 className='text-4xl font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <label class="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" class="grow" placeholder="Email" />
                    </label>
                    <button className="btn btn-primary">Contact</button>

                </div>
                <div className='w-1/2 p-24 order-1 flex align-middle justify-center'>
                    <img src="bookhome.jpg" className='rounded-full ' alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner