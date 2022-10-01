import React from 'react';

import { useAuth } from "../utils/useAuth";
function Notes() {
    const { user, logout } = useAuth();
    // const msg = useContext(UserContext)
    console.log(user, "from the home page");

    return (
        <div className="Home">
            <div className='container'>
           

                <main className='main'>
                <div className="column50">
          <h1>
            My Schedule
          </h1>
        </div>
        <div className="column50">
          <h1> Add new Shifts</h1>
          <div>
            
          </div>
        </div>
                        </main>
                    </div>
            </div>

            );
}

            export default Notes;
