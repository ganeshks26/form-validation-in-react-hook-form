import React,{useState} from 'react'
import {useForm} from "react-hook-form";
import {useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate() 

  const{register,handleSubmit, formState: { errors }}=useForm();
  const[userInfo,setUserInfo]=useState()

  const onSubmit=(data)=>{
     
    setUserInfo(data)
    console.log(data)
    navigate("/login")
  }


  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo,undefined,2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input 
            type="text"
            name="username"
            placeholder="Username"
            {...register('username', { required: true })}
            />
            {errors.username && <span>This field is required</span>}
          </div>

          <div className="field">
            <label>Email</label>
            <input 
            type="text"
            name="email"
            placeholder="Email"
            {...register('email',{ required: true }, { pattern:{value:/^\S+@\S+$/i}})}
            />
            {errors.email && <span>The gmail entered is not valid</span>}
          </div>

          <div className="field">
            <label>Password</label>
            <input 
            type="password"
            name="password"
            placeholder="Password"
            {...register('password',{ required: true },{minLength:{value:4}})}
            />
            {errors.password && <span>The password is not valid</span>}
          </div>

          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
