import { createContext, useContext, useEffect, useState } from "react";
import {auth ,googleProvider} from '../config/firebaseconfig'
import { createUserWithEmailAndPassword ,signInWithPopup ,signOut,signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth'

const UserContext = createContext()

export const AuthContextProvider =({children})=>{

    const [user , setUser ] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
      const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };

      const logOut = () => {
        return signOut(auth)
      };

      useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
           setUser(currentUser)
           console.log(currentUser)
         })

         return ()=>{ unSubscribe() }
      },[])
     return (
        <UserContext.Provider value={{createUser, signIn ,user ,logOut}}>
            {children}
        </UserContext.Provider>
     )
}


export const UserAuth =()=>{
    return useContext(UserContext)
}