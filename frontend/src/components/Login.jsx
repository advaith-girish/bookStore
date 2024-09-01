import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo={
        email:data.email,
        password:data.password
    }
    await axios.post('http://localhost:3000/user/login',userInfo)
    .then((res)=>{
        console.log(res.data);
        document.getElementById('my_modal_3').close();
        if(res.data){
            // alert("Logged Inn!!");
            setTimeout(() => {
            toast.success("Logged In Successfully");
            window.location.reload();
            },3000);
        }
        window.location.href="/";
        localStorage.setItem("User",JSON.stringify(res.data.user));
    })
    .catch((err)=>{
        console.log(err.response.data.message);
        toast.error("Error in Login: "+err.response.data.message);
    })
  }
  
  return (
    <div>
      {/* Open the modal using document.getElementById('id').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-2 space-y-5'>

            <label className='m-2' htmlFor="email">Email</label>
            <br/>
            <input type="email" id="email" placeholder="Email" className="input input-bordered" 
            {...register("email",{required:true})}/>
            <br/>
            {errors.password && <span className='text-red-500'>This field is required</span>}
            <br/><br/>
            <label className='m-2' htmlFor="password">Password</label>
            <br/>
            <input type="password" id="password" placeholder="Password" className="input input-bordered" 
            {...register("password",{required:true})}/>
          
          <div className='mt-5 flex justify-around align-middle'>
            <button className="btn btn-primary">Login</button>
            <span>Not registered? <Link to='/signup' className='cursor-pointer underline'>Signup</Link></span>
          </div>
          </form>

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default Login