import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './components/Home'
import Profile from './components/Profile'
import Signup from './components/Signup'
import { useAuth } from './contexts/AuthProvider'

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log("from app ",authUser?.user);
  return (
    <>
    <div className='dark:bg-slate-200 dark:text-black'>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Profile/>:<Navigate to='/signup'/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App