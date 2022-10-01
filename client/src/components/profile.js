import React, { useContext } from "react";
import { useAuth } from "../utils/useAuth";

function Profile() {
    const { user, logout } = useAuth();

    return (
        <div>
        <div className="card" style={{flexDirection:'row', display:'flex'}}>

            <p  className="col45">Name:</p>
            <input  className="col45"placeholder={user.name}></input>
</div>
            <div className="card" style={{flexDirection:'row', display:'flex'}}>
            <p  className="col45">Email:</p>
            <input   className="col45" placeholder={user.email}></input>
            </div>
        </div>
   
    );
}

export default Profile;