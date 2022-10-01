import React, { useState } from 'react'
import Calendar from 'react-calendar';
 import '../index.css'
export default function MyCalender(props) {
    const [date, setDate] = useState(props.date);

    return (
        <div>
        <div className='calendar-container' style={{marginLeft:'15%'}}>
        <Calendar onChange={setDate} value={date} selectRange={true} style={{color: 'black'}} />
      </div>
      {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toDateString()}
     &nbsp; to &nbsp;
     <span>End:</span> {date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Default selected date:</span>{' '} {date.toDateString()}
   </p>
        )}
      </div>
    )
}