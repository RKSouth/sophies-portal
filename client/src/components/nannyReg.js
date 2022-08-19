
import React from "react";


export default function NannyReg(props) {
const nanny = props.nanny

    return (
        <div className='card'>
            <div className='registration'>
                <h2>Nanny Registration</h2>

                <label>name</label>
                <input
                    type="text"
                    onChange={(e) => {
                        props.setNName(e.target.value);
                    }} />
                <label>email</label>

                <input
                    type="email"
                    onChange={(e) => {
                        props.setNEmail(e.target.value);
                    }} />
                <label>Password</label>

                <input
                    type="text"
                    onChange={(e) => {
                        props.setNPassword(e.target.value);
                    }} />
                <button onClick={props.addNanny}>Register</button>
            </div>
        </div>
    )
}