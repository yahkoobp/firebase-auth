import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Account = () => {

  const {user , logOut} = UserAuth()
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <h1>Account : {user && user.email}</h1>
        <h3>Email :</h3>
        <button onClick={async()=>{
          await logOut() 
          navigate('/')
        }}>Logout</button>
        {/* <div style={{width:900 , height:400 , border:'1px solid red'}}>
          <p style={{margin:'auto 1000px'}}>uhfhfjdfdhjfhjhjfdhhdhhj</p>
        </div> */}
      </div>
    </div>
  )
}

export default Account