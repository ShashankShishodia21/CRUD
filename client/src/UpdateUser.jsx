import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('https://crud-d3bd.onrender.com/getUser/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))    
     }, [])

     const Update = (e) => {
        e.preventDefault();
        axios.put("https://crud-d3bd.onrender.com/updateUser/"+id, {name,email,age})
        .then(result => {
          console.log(result)
          navigate('/')
        })
        .catch(err => console.log(err))
      } 

  return (
        <div className='create-main'>
            <div className='form-main'>
                <form onSubmit={Update}>
                    <h1>Update User</h1>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" value={name} placeholder='Enter Name' 
                        onChange={(e)=> setName(e.target.value)} />

                        <label htmlFor="">E-mail</label>
                        <input type="email" value={email} placeholder='Enter E-mail' 
                        onChange={(e)=> setEmail(e.target.value)} />
                    
                        <label htmlFor="">Age</label>
                        <input type="text" value={age} placeholder='Enter Age' 
                        onChange={(e)=> setAge(e.target.value)} />
                    
                    </div>
                    <button>Update</button>
                </form>
            </div>
        </div>
  )
}

export default UpdateUser
