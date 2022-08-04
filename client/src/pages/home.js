import React from 'react';
import { Link } from "react-router-dom";

function Home() {
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

        <p className='description'>
          A place for all things Sophie
        </p>
        <Link className="link" to="/register">Register<span className="sr-only"></span></Link>
    
    
    </main>
    </div>
    </div>
  
  );
}

export default Home;