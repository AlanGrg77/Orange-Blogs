import React, {useContext, useState} from 'react'
import { FaUser , FaLock  } from "react-icons/fa"
import axios from "axios"
import { Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/authContex.jsx'

const Login = () => {
  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  })

  const [er,setEr] = useState(null)

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);



  const handleChange = e =>{
    setInputs(prev =>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      await login(inputs)
      navigate('/')
    }catch(err){
      setEr(err.response.data)
    }
  }
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form action="">
            <input type="text" placeholder='username' name='username' onChange={handleChange} />
            <FaUser  className='user'/>
            <input type="password" placeholder='password' name='password' onChange={handleChange} />
            <FaLock className='lock'/>
            <button onClick={handleSubmit}>Login</button>
            {
              er && <p>{er}</p>
            }
            <span>Don't have an account? <Link to='/register'><pan style={{color:"#ec5a31"}}>Register for free</pan></Link></span>
        </form>
    </div>
  )
}

export default Login