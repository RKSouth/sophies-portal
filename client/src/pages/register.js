
import React, { useState } from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";

export default function Register() {
    // const [nannyName, setNannyName] = useState('');
    // const [nannyEmail, setNannyEmail] = useState('');
    // const [nannyPassword, setNannyPassword] = useState('');

    // const [parentName, setParentName] = useState('');
    // const [parentEmail, setParentEmail] = useState('');
    // const [parentPassword, setParentPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [isParent, setIsParent] = useState(false);
    const [isNanny, setIsNanny] = useState(false);

    const NannyReg = () => {

        if (isNanny === false) {
            setIsNanny(true);
            setIsParent(false);
        } else {
            setIsNanny(false);
        }
       
    }

    const ParentReg = () => {
        if (isParent === false) {
            setIsParent(true);
            setIsNanny(false);
        } else {
            setIsParent(false);
        }
    }

    const addNanny = (e) => {
        // e.preventDefault();
        console.log(name,email);
        Axios.post('http://localhost:3001/create',
            {
                name: name,
                email: email,
                password: password
            }
        ).then((response) => {
            console.log('you have a new nanny');
            console.log(response);
        })
    }

    
    const addParent = (e) => {
        // e.preventDefault();
        // console.log(name,email);
        Axios.post('http://localhost:3001/parent',
            {
                name: name,
                email: email,
                password: password
            }
        ).then((response) => {
            console.log('you have a new nanny');
            console.log(response);
        })
    }




    return (
<div className='App-header'>
        <div className='grid'>
             <h2>Register as a...</h2>
            <label className="switch">

                <button
                    value={'parent'}
                    onClick={ParentReg} >
                    Parent
                </button>

                <button
                    value={'nanny'}
                    onClick={NannyReg} >
                    Nanny
                </button>
            </label>
 
                {isNanny && (
                  <div className='card'>
                  <div className='registration'>
                      <h2>Nanny Registration</h2>
      
                      <label>name</label>
                      <input
                          type="text"
                          onChange={(e) => {
                              setName(e.target.value);
                          }} />
                      <label>email</label>
      
                      <input
                          type="email"
                          onChange={(e) => {
                              setEmail(e.target.value);
                          }} />
                      <label>Password</label>
      
                      <input
                          type="text"
                          onChange={(e) => {
                              setPassword(e.target.value);
                          }} />
                      <button onClick={addNanny}>Register</button>
                  </div>
              </div>
                        )}
                
           {isParent && (
    <div className='card'>
    <div className='registration'>
      
    <h2>Parent Registration</h2>

        <label>name</label>
        <input
            type="text"
            onChange={(e) => {
                setName(e.target.value);
            }} />
        <label>email</label>

        <input
            type="email"
            onChange={(e) => {
                setEmail(e.target.value);
            }} />
        <label>Password</label>

        <input
            type="text"
            onChange={(e) => {
                setPassword(e.target.value);
            }} />


        <button onClick={addParent}>Register</button>
    </div>
</div>
           )}

            
        </div>
        <h2>Or</h2>
        <Link className="link" to="/">Go Back</Link>
        </div>



    )
}