import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth()

    const handlelogin = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3002/user/login',{email, password})
        .then((res) =>{
          console.log(res);
          if(res.status === 200){
            login(res.data.token, res.data.user)
        }
        })
        .catch((error) =>{
          console.log(error);
        })
    }

  return (
    <div>
        <form onSubmit={handlelogin}>
          <label>Email</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <label>password</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <input type='submit' value="login"/>
        </form>
    </div>
  )
}

export default Login