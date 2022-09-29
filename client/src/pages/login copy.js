
import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { useAuth } from "../utils/useAuth";
import { Link } from "react-router-dom";



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isParent, setIsParent] = useState(false);
  const [isNanny, setIsNanny] = useState(false);

  const [loginStatus, setLoginStatus] = useState('');

  const { login } = useAuth();

  Axios.defaults.withCredentials = true;

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


  const nannyLogin = () => {
    console.log('loggin in')
        Axios.post("http://localhost:3001/nannylogin", {
      email: email,
      password: password,
    }).then((response) => {


      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
  
        login({
          email: response.data[0].email,
          name: response.data[0].name,
          status: 'nanny'
        });
      }
      // navigateHome();
    });
  };


  const parentLogin = () => {
    console.log('loggin in')
    Axios.post("http://localhost:3001/parentlogin", {
      email: email,
      password: password,
    }).then((response) => {

        console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
        console.log(response.data)
      } else {
        setLoginStatus(response.data[0].email);
        window.localStorage.setItem('response', JSON.stringify(response.data));
        console.log(response.data)
        
        login({
          email: response.data[0].email,
          name: response.data[0].name,
          status: 'parent'
        });
      }
  
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data[0].email);
      } else {
        console.log(response)
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
          <form className='card' >
            <div className='registration'>
              <h2>Nanny Login</h2>
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Email..."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                placeholder="Password..."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button onClick={nannyLogin}> Login </button>
            </div>
          </form>
        )}

        {isParent && (
          <form className='card'>
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
              <button onClick={parentLogin}> Login </button>
            </div>
          </form>
        )}
      </div>
      <h2>Or</h2>
      <Link className="link" to="/">Go Back</Link>
    </div>



  )
}