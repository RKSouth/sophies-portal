
import React, { useState } from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import API from '../utils/api.js'


export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isParent, setIsParent] = useState(false);
    const [isNanny, setIsNanny] = useState(false);

    const navigate = useNavigate();

    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };

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
        const nanny = {
            name: name,
            email: email,
            password: password
        };


        console.log(nanny);
        // Axios.post('http://localhost:3001/create',
        //     {
        //         name: name,
        //         email: email,
        //         password: password
        //     }
        // ).then((response) => {
        //     console.log('you have a new nanny');
        //     console.log(response);
        //     navigateHome();
        // })
        API.addNewNanny(nanny).then(res => {
            console.log("saved", res)
            navigateHome();

        }).then(err => {
            console.log("error", err);

        });


    }

    
    const addParent = (e) => {
        const parent = {
            name: name,
            email: email,
            password: password
        };


        API.addNewParent(parent).then(res => {
            console.log("saved", res)
            navigateHome();

        }).then(err => {
            console.log("error", err);

        });
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
                          <hr/>
                      <label>email</label>
      
                      <input
                          type="email"
                          onChange={(e) => {
                              setEmail(e.target.value);
                          }} />
                          <hr/>
                      <label>password</label>
      
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
            <hr/>
        <label>email</label>

        <input
            type="email"
            onChange={(e) => {
                setEmail(e.target.value);
            }} />
            <hr/>
        <label>password</label>

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