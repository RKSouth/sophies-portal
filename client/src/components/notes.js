import React from 'react';

import { useAuth } from "../utils/useAuth";
function Notes() {
    const { user, logout } = useAuth();
    // const msg = useContext(UserContext)
    console.log(user, "from the home page");

    return (
        <div className="Home">
            <div className='container'>
                <main className='main'>
                    <h2>Notes</h2>
                    <form action='submit' >
                        <div className='card' style={{textAlign:'left'}}>
                        <p className='colTitle'> Today's Date:</p>
                        <input  className= 'colInput' type="date" id="today" name="today's date" />
                        </div>
                        <br/>
                        <textarea defaultValue=" Put your notes here">
                        </textarea>
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </main>
            </div>
        </div>

    );
}

export default Notes;
