import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';

const Signup = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/';
    //not using the above ones, but it can be
    //put in navigate(from,{replace:true}) funcition call for redirecting
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            password:data.password
        }
        await axios.post('http://localhost:3000/user/signup',userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success("Signup Successfully");
                setTimeout(() => {
                    window.location.href="/";
                },1000);
            }
            localStorage.setItem("User",JSON.stringify(res.data));
        })
        .catch((err)=>{
            console.log(err.response.data.message);
            alert("Error in Signup: "+err.response.data.message);
        })
      }

    return (
        <div className='h-screen flex items-center justify-center'>
        <div className="modal-box">
            <div className='flex justify-between items-center'>
            <h3 className="font-bold text-lg">Signup</h3>
            <a href="/" className='btn btn-secondary cursor-pointer'>Home</a>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-2 space-y-5'>

                <label className='m-2' htmlFor="name">Name</label>
                <br />
                <input {...register("name",{required:true})} type="text" id="name" placeholder="Name" className="input input-bordered" />
                <br /><br />
                <label className='m-2' htmlFor="email">Email</label>
                <br />
                <input {...register("email",{required:true})} type="email" id="email" placeholder="Email" className="input input-bordered" />
                <br /><br />
                <label className='m-2' htmlFor="password">Password</label>
                <br />
                <input {...register("password",{required:true})} type="password" id="password" placeholder="Password" className="input input-bordered" />

            
            <div className='mt-5 flex justify-around align-middle'>
                <button className="btn btn-primary">Signup</button>
                    <button className="btn btn-accent text-yellow-50 cursor-pointer"
                    onClick={()=>document.getElementById("my_modal_3").showModal()}>
                       Login
                    </button>
                
            </div>
            </form>
            <Login/>
        </div>
        </div>
    )
}

export default Signup