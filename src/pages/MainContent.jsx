import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../Context/AuthContext';
import {Link} from 'react-router-dom';
import api from '../api';

const MainContent = () => {
  const [users, setUsers] = useState([]);
  const { handleLogout, authenticated } = useContext(Context);

  useEffect(() => {
    (async function getUsers() {
      try {
        const { data } = await api.get('/users');

        setUsers(data);
      } catch(e) {
        setUsers([])
        console.log(e);
      }
    })();
  }, [authenticated]);

  return (
    <div className="MainContent">

      <div>
        <p>I can see this because I'm logged in</p>
        {users.map(user => <p>{user.username} {user.age}</p>)}
        <button type="button" onClick={handleLogout}>Logout</button>
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
