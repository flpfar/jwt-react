import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

const Context = createContext();

const AuthProvider = ({children}) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token');

    console.debug('AuthProvider Useffect', token);

    if(token) {
      (async () => {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        try {
          const response = await api.get('/auto_login')
          setAuthenticated(true);
          setUser(response.data);
          setLoading(false);
        } catch(e) {
          api.defaults.headers.Authorization = null;
          localStorage.removeItem('token');
          console.log(e.response.data);
          setLoading(false);
        }
        
      })();
    } else {
      setLoading(false);
    }
  }, []);

  if(loading) {
    return (
      <p>Loading...</p>
    )
  }

  async function handleLogin() {
    try {
      const { data } = await api.post('/login', {
        user: {
          username: 'flpfar',
          password: '123456'
        }
      });

      const { user, token } = data;
      setAuthenticated(true);
      setUser(user)
      localStorage.setItem('token', token);
      api.defaults.headers.Authorization = `Bearer ${token}`
      console.log(data);
    } catch(e) {
      console.log(e.response.data.error);
    }
  }

  function handleLogout() {
    localStorage.removeItem('token');
    setAuthenticated(false);
    setUser(null);
    api.defaults.headers.Authorization = null;
  }

  return (
    <Context.Provider value={{authenticated, user, handleLogin, handleLogout}}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };