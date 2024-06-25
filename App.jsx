import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import  Header  from './components/Header/Header'
import Footer  from './components/Footer/Footer' 
import { Outlet } from 'react-router-dom'
function App() {
  const[loading,setloading]=useState(true);
  const dispatch=useDispatch();
  // useeffect lo and jb website load ho ask service ki logged in ho ya logged out 
  useEffect(()=>{
authService.getCurrentUser().then((userdata)=>{
  if(userdata){
    dispatch(login({userdata}))
  }
  else{
    dispatch(logout())
  }
}).finally(()=>setloading(false))
  },[])

   return !loading ?(
    <div className='flex flex-wrap bg-gray-400 min-h-sc content-between'>
      <div className='w-full-block text0-'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
        
      </div>
    </div>
   ) :(null)
}

export default App
