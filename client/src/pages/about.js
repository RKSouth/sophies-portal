
import React from "react";
import { Link } from "react-router-dom";
export default function Register() {

    return (
        <div className='App-header'>
            <div className='grid'>
                <h2>Goals:</h2>
                <ul>
                    Make it easy to:
                    <li>Set and track schedules</li>
                    <li>Pay the Nanny</li>
                    <li>Access, update, and communicate anywhere and anytime</li>
                </ul>

                <Link className="link" to="/">Go Back</Link>
            </div>
        </div>


    )
}