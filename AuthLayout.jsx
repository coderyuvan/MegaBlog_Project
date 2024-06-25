// mechanism to protect pages and react
import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Protected({children,authentication=true}) {
   
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true);
    //  ask store user login h ya nhi
    const authStatus=useSelector(state=>state.auth.status)

    useEffect(()=>{
        //  ur not authenticated so move into login
     if(authentication&& authStatus!==authentication) {
        navigate("/login")
     } else if(! authentication && authStatus!==authentication) {
        navigate("/")
     }
     setLoader(false)
    },[authStatus,navigate,authentication])
    return loader ? <h1>Loading...</h1> : <>{children}</>
}

 
