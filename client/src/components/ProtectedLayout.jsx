import { Navigate, useOutlet } from "react-router-dom";
import React, { useState } from 'react'
import { useAuth } from "../utils/useAuth";
import 'react-calendar/dist/Calendar.css';
import MyCalender from "./calender";
import Notes from './notes'
import Profile from './profile'
import Schedule from './schedule'
import { useEffect } from "react";

export const ProtectedLayout = () => {
  const [date, setDate] = useState(new Date());
  const { user, logout } = useAuth();
  const outlet = useOutlet();
  const [notes, setNotes] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [profile, setProfile] = useState(false);
  const [calender, setCalender] = useState(true)

function showHide(event) {

 if (event.target.innerText === 'schedule'){
  setSchedule(true);
  setProfile(false);
  setNotes(false);
  setCalender(true);
 } 
 if (event.target.innerText ==='notes'){
  setSchedule(false);
  setProfile(false);
  setNotes(true);
  setCalender(false);
 }

 if (event.target.innerText ==='profile'){
  setSchedule(false);
  setProfile(true);
  setNotes(false);
  setCalender(false);
 }
}


  console.log(date)
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return <div>
      <h2>hello! {user.name}</h2>
      <h3> Would you like to...</h3>
      <div className="card">
        <button key={"logout"} onClick={logout}><h2>logout</h2></button>
        <button value='schedule' onClick={showHide}><h2>schedule</h2></button>
        <button value='notes' onClick={showHide}><h2>notes</h2></button>
        <button value='profile' onClick={showHide}><h2>profile</h2></button>
      </div>
      {calender && (
      <MyCalender
        date={date}
      />
      )}

{schedule && (
     
        <Schedule/>
    
      )}

      {notes && (
      <div className="card">
        <Notes/>
      </div>
      )}
        {profile && (

        <Profile/>

      )}
      {/* {outlet}  */}
    </div>
  }

  // return (
  //   <div>
  //       <h1></h1>
  //     {/* <AppBar
  //       pages={[
  //         { label: "Settings", path: "settings" },
  //         { label: "Profile", path: "profile" }
  //       ]}
  //     />
  //     {outlet} */}
  //   </div>
  // );
};
