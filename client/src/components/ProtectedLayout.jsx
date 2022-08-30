import { Link, Navigate, useOutlet } from "react-router-dom";
import React, { useState } from 'react'
import { useAuth } from "../utils/useAuth";
import 'react-calendar/dist/Calendar.css';
import MyCalender from "./calender";
export const ProtectedLayout = () => {
  const [date, setDate] = useState(new Date());

  const { user,logout } = useAuth();
  const outlet = useOutlet();

console.log(date)
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return <div>
    <h2>hello! {user.name}</h2>
    <h3> Would you like to...</h3>
    <div className="card">
    <button key={"logout"} onClick={logout}><h2>Logout</h2></button>
    <button key={"logout"} onClick={logout}><h2>Schedule</h2></button>
    <button key={"logout"} onClick={logout}><h2>Notes</h2></button>
    <button key={"logout"} onClick={logout}><h2>Profile</h2></button>
    </div>
   
   
   <MyCalender
   date={date}
   />
   

   <div className="card">
<div className="column50">
  <h1>
    My Schedule
  </h1>
  </div>
<div className="column50">
  <h1> Add new Shifts</h1>
</div>
   </div>
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
