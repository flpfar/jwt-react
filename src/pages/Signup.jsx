import React from 'react';

const Signup = () => {

  return (
    <div>
      <form onSubmit="">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="number" name="age" placeholder="Age" />
        <button type="submit">SignUp</button>
      </form>
    </div>
  )
}

export default Signup;
