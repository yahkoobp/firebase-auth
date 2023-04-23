import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const SignIn = () => {

  const [email , setEmail ] = useState('')
  const [password , setPassword ] = useState('')
  const [error , setError ] = useState('')

  const {signIn} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
          await signIn(email , password)
          navigate('/account')
        } catch (error) {
          console.log(error.message)
        }
  }

  return (
    <div style={{display:'flex',alignItems:'center' , justifyContent:'center',height:'100vh'}}>
      <div style={{display:'flex' , flexDirection:'column' ,border:'1px solid red',padding:25}}>
      <div style={{fontSize:20 ,fontFamily:'sans-serif' ,fontWeight:'bold' }}>SignIn</div>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex' ,flexDirection:'column'}}>
        <div style={{display:'flex',  flexDirection:'column' , justifyContent:'flex-start' ,  alignItems:'flex-start'}}>
        <label>Email</label>
        <input type='email' placeholder='Email' style={{ padding:8 ,width:'100%'}}  onChange={(e)=>{
          setEmail(e.target.value)
        }}></input>
        </div>

        <div style={{display:'flex' , flexDirection:'column' , justifyContent:'flex-start' , alignItems:'flex-start'}}>
        <label>Password</label>
        <input type='password' placeholder='Password' style={{padding:8 , width:'100%'}}  onChange={(e)=>{
          setPassword(e.target.value)
        }}></input>
        </div>

        <div>
          <button style={{marginTop:10 , padding:"5px 120px"}}>SignIn</button>
        </div>
        </div>
      </form>
      <p>Dont have an account ?? <Link to='/signup'>SignUp</Link></p>
      </div>
    </div>
  )
}

export default SignIn