import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

function AuthProvider(
    { children }//other components come under children
) {
    const initialAuthUser=localStorage.getItem("User");
    const [authUser,setAuthUser]=useState(initialAuthUser?JSON.parse(initialAuthUser):null);
  return (
    //value is an array of authUser and setAuthUser because we are using array destructuring in useAuth
    <AuthContext.Provider value={[authUser,setAuthUser]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth=()=>useContext(AuthContext);