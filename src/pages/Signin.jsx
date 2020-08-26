import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Context} from '../Context/AuthContext'

const Signin = () => {

  const { authenticated, user, handleLogin, handleLogout } = useContext(Context);

  return (
    <div>
      <Link to="/">Back to MAIN Page</Link>
      { user ?
        <div>
          <p>Hello, {user.username}! Click the button to logout</p>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      :
      <div>
        <p>Hello, Visitor! Click the button to login</p>
        <button type="button" onClick={handleLogin}>Login</button>
      </div>}
    </div>
  )
}

export default Signin;
