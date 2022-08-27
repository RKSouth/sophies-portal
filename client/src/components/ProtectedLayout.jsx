import { Link, Navigate, useOutlet } from "react-router-dom";
import React, { useState } from 'react'
import { useAuth } from "../utils/useAuth";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import MyCalender from "./calender";
export const ProtectedLayout = () => {


  const { user,logout } = useAuth();
  const outlet = useOutlet();


  if (!user) {
    return <Navigate to="/" />;
  } else {
    return <div><h1>user profile</h1>
    <h2>hello! {user.name}</h2>
    <button key={"logout"} onClick={logout}><h2>Logout</h2></button>
   
   <MyCalender/>
   
    {/* {outlet}  */}
    </div>
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
