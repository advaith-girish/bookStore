import React from 'react'
import { useAuth } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const logout=()=>{
        setAuthUser({...authUser,user:null});
        localStorage.removeItem("User");
        toast.success("Logged out successfully");
        window.location.reload();
    }
  return (
    <button onClick={logout} className='btn btn-error text-white px-3 py-2 cursor-pointer'>Logout</button>
  )
}

export default Logout