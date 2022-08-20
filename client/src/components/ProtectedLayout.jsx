import { Link, Navigate, useOutlet } from "react-router-dom";
import React from "react";
import { useAuth } from "../utils/useAuth";


export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return <div><h1>user profile</h1></div>
  }

  return (
    <div>
        <h1></h1>
      {/* <AppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" }
        ]}
      />
      {outlet} */}
    </div>
  );
};
