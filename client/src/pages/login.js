
import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isParent, setIsParent] = useState(false);
    const [isNanny, setIsNanny] = useState(false);

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

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


      const login = () => {
        console.log('loggin in')
        Axios.post("http://localhost:3001/login", {
          email: email,
          password: password,
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].email);
          }
        });
      };
    
      useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
          if (response.data.loggedIn === true) {
            setLoginStatus(response.data.user[0].email);
          }
        });
      }, []);

    return (
<div className='App-header'>
<h1>{loginStatus}</h1>
        <div className='grid'>
             <h2>Login as a...</h2>
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
                      <h2>Nanny Login</h2>
                      <input
          type="text"
          placeholder="Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
                  </div>
              </div>
                        )}
                
           {isParent && (
    <div className='card'>
    <div className='registration'>
    <h2>Parent Login</h2>
    <input
          type="text"
          placeholder="Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
  

       
    </div>
</div>
           )}

            
        </div>
        <h2>Or</h2>
        <Link className="link" to="/">Go Back</Link>
        </div>



    )
}