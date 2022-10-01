import React from 'react';

import { useAuth } from "../utils/useAuth";
function Notes() {
    const { user, logout } = useAuth();
    // const msg = useContext(UserContext)
    console.log(user, "from the home page");

    return (

        <div className='container'>

            <head className='card'>
                <h1>My Schedule</h1>
            </head>
            <main className='card'>
                <table style={{textAlign:'left'}}>
                    <tr>
                        <th>Date</th>
                        <th>Day</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </table>

            </main>
        </div>


    );
}

export default Notes;
