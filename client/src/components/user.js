import React, { useContext } from "react";
import userContext from "../utils/userContext";

function userInfo() {
  const { name, email } = useContext(userContext);

  return (
    <div className="card">
      <div>
        Name: {name}
      </div>
      <div>
        Status: {email}
      </div>
 
    </div>
  );
}

export default userInfo;