import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../Context/AuthContext'
function Signup() {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handlesignup = (e) =>{
        e.preventDefault()
        try{
            axios.post('http://localhost:3002/user/signup',{username, email, password})
            .then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
            })
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        <form onSubmit={handlesignup}>
            <label>Name</label>
            <input type='name' value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
            <label>Email</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <label>password</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <input type='submit' value="submit"/>
        </form>
    </div>
  )
}

export default Signup