import React from 'react';
import {Link} from 'react-router-dom';

const MainContent = () => {

  return (
    <div className="MainContent">

      <div>
        <p>I can see this because I'm logged in as: </p>
        <button type="button">Logout</button>
      </div>

      <div>
        <p>I can see this because I'm not logged in </p>
        <Link to="/signin">SignIn</Link>
        <br />
        <Link to="/signup">SignUp</Link>
      </div>
      
      <p>Anyone can see this</p>
    </div>
  )
}

export default MainContent;
