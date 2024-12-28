import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const CreateUser = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate();

  const Submit= (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{name,email,age})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  } 
  return (
    <div className='create-main'>
        <div className='form-main'>
            <form onSubmit={Submit}>
                <h1>Create User</h1>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' required
                    onChange={(e)=> setName(e.target.value)}/>

                    <label htmlFor="">E-mail</label>
                    <input type="email" placeholder='Enter E-mail' required
                    onChange={(e)=> setEmail(e.target.value)}/>
                    
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Enter Age' required
                    onChange={(e)=> setAge(e.target.value)}/>
                    
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser