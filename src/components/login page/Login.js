import React, { useState } from 'react'
import './login.css'



export default function Login () {


    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
     const[email,setEmail] =useState('');
    
 const clickHaldler=(event)=>{
    event.preventDefault()
    let userInfo={
        firstName,
        lastName,
        email
    }
 fetch('https://my-db-e556d-default-rtdb.firebaseio.com/users.json',{
    method:'POST',
    body:JSON.stringify(userInfo),
    
 })
 .then(response=>console.log(response))
 userInfo={}
 
}


  return (
    <div>
       <h3>welcome to this page <br/>please login</h3>
       <form className='form' onSubmit={clickHaldler}>
        <div className='div'>
          <label>firstName</label>
          <input type="text" name={firstName} onChange={(event)=> setFirstName(event.target.value)}/>
          </div >
          <div className='div'>
           <label>lastName</label>
           <input type="text" name='lastname' value={lastName} onChange={(event)=>setLastName(event.target.value)}/>
          </div>
          <div className='div'>
           <label>email</label>
            <input type="text" name='email' value={email} onChange={(event)=> setEmail(event.target.value)}/>
          </div>
          <div className='div'>
            <button className='btn'>submmit</button>
          </div>
          

        
      
          

       </form>

    </div>
  )
}
