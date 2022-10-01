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
                    <form action='submit'>
                        <p className='column50'> Today's Date</p>
                        <input className='column50' type="date" id="today" name="today's date" />
                        <br />
                        <textarea defaultValue=" Put your notes here" rows="4" cols="75">

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
