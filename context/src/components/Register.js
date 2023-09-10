import React, { useRef, useState } from 'react'

const Register = () => {

    const emailRef = useRef()

    const registerHandle = () =>{
        console.log("registerHandle called")
        console.log(emailRef,emailRef.current)
    }

    return(
        <div>
            <input type="email" placeholder="Enter email" ref={emailRef}></input>
            <input type="text" placeholder="Enter Name"></input>
            <input type="password" placeholder="Enter Password"></input>
            <button onClick={() => registerHandle()}>Register</button>
        </div>
    )
}

export default Register;