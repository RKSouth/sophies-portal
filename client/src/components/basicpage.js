import React from 'react';
import { Link } from "react-router-dom";
export const BasicPage = () => {
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
    <p className='description'>
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
};
