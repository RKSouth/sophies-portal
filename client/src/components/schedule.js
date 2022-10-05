import React, { useState } from 'react';
import { useAuth } from "../utils/useAuth";

// const [ data, setShift ] = useState([]);

const data = [
    {
        date: '08/24/90', day: 'thursday', start: '12:00AM', end: '12:00PM'
    },
    {
        date: '08/24/23', day: 'monday', start: '12:00AM', end: '6:00PM'
    }, {
        date: '10/24/22', day: 'tuesday', start: '9:00AM', end: '12:00PM'
    }, {
        date: '11/24/96', day: 'saturday', start: '5:00AM', end: '2:00PM'
    },
]



function addShift(e) {
    // setShift([...data]);
    console.log(data[1].date)

}

function submitShift(e) {

}

function Schedule() {
    const { user, logout } = useAuth();
    // const msg = useContext(UserContext)
    console.log(user, "from the home page");
    console.log(data[0].date)
    return (

        <div className='container'>

            <div className='card'>
                <h1>My Schedule</h1>
                <button onClick={addShift}> Add a Shift</button>
                
            </div>
            <main className='card'>
                <table style={{ textAlign: 'left', margin:'center' }}>
                    <tr>
                        <th>Date</th>
                        <th>Day</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Delete</th>
                    </tr>
               
                    {data.map(data =>
                        <tr>
                            <td>{data.date}</td>
                            <td>{data.day}</td>
                            <td>{data.start}</td>
                            <td>{data.end}</td>
                            <td><button>delete</button></td>
                        </tr>
                     
                    )}
                </table>

            </main>
        </div>


    );
}

export default Schedule;
