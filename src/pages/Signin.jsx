import React, { useContext } from 'react';
import {Context} from '../Context/AuthContext'
import api from '../api';

const Signin = () => {

  const { authenticated } = useContext(Context);

  async function handleLogin() {
    const { data } = await api.post('/login', {
      user: {
        username: 'flpfar',
        password: '123456'
      }
    });
    console.log(data);
    console.log(authenticated);
  }

  return (
    <div>
      <p>Click the button to login</p>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Signin;
