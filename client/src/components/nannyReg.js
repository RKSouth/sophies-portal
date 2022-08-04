
import React,{ useState } from "react";
import Axios from 'axios'
import './App.css'

export default function NannyReg(nannyName, n) {
    const [nannyName, setNannyName] = useState('');
    const [nannyEmail, setNannyEmail] = useState('');
    const [nannyPassword, setNannyPassword] = useState('');




    const addNanny = (e) => {
        // e.preventDefault();
        // console.log(name,email);
        Axios.post('http://localhost:3001/createNanny',
            {
                name: nannyName,
                email: nannyEmail,
                password: nannyPassword
            }
        ).then((response) => {
            console.log('you have a new nanny');
            console.log(response);
        })
    }

    return (
        <div className='card'>
            <div className='registration'>
                <h2>Nanny Registration</h2>

                <label>name</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setNannyName(e.target.value);
                    }} />
                <label>email</label>

                <input
                    type="email"
                    onChange={(e) => {
                        setNannyEmail(e.target.value);
                    }} />
                <label>Password</label>

                <input
                    type="text"
                    onChange={(e) => {
                        setNannyPassword(e.target.value);
                    }} />
                <button onClick={addNanny}>Register</button>
            </div>
        </div>
    )
}