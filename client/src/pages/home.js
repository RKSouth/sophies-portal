import React from 'react';
import { Link } from "react-router-dom";
import {useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from "../utils/useAuth";
function Home() {
const {user, logout } =useAuth();
// const msg = useContext(UserContext)
console.log(user, "from the home page");

  return (
    <div className="Home">
        <div className='container'>
            <header className="Home-header">
                <title>Sophie's Portal</title>
     
      </header>

      <main className='main'>
        <h1 className='title'>
          Welcome to Sophie's Portal
        </h1>
        {/* <p>{msg}</p> */}
        <p className='description'
        >
          A place for all things Sophie
        </p>
      
        <Link className="link" to="/register">Register<span className="sr-only"></span></Link>
        <br/>
        <Link className="link" to="/login">Login<span className="sr-only"></span></Link>
        <br/>
        <Link className="link" to="/about">About<span className="sr-only"></span></Link>
   
    </main>
    </div>
    </div>
  
  );
}

export default Home;
