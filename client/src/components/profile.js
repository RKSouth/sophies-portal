import React, { useContext } from "react";
import { useAuth } from "../utils/useAuth";

function Profile() {
    const { user, logout } = useAuth();

    return (
        <div>
        <div className="card" style={{flexDirection:'row', display:'flex'}}>

            <p  className="colTitle">Name:</p>
            <input  className="colInput"placeholder={user.name}></input>
</div>
            <div className="card" style={{flexDirection:'row', display:'flex'}}>
            <p  className="colTitle">Email:</p>
            <input   className="colInput" placeholder={user.email}></input>
            </div>
        </div>
   
    );
}

export default Profile;