import React, { useContext } from "react";
import { useAuth } from "../utils/useAuth";

function Profile() {
    const { user, logout } = useAuth();

  return (
    <div className="card">
      <div>
        Name: {user.name}
      </div>
      <div>
        Email: {user.email}
      </div>
 
    </div>
  );
}

export default Profile;