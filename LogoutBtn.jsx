import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
function LogoutBtn() {
    const dispatch=useDispatch();
    // btn bnega to we need logout handler 
    const logOutHandler=()=>{
        authService.logout().then(()=>{
            // taaki store m info updated rhe
            dispatch(logout())
        })
         
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logOutHandler}
        >Logout</button>
    )
}

export default LogoutBtn
 