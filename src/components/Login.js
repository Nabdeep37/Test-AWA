import React from 'react';
import image1 from './image1.jpg';

const Login = () => {
  return (
    <div className="loginArea container mt-5" style={{ backgroundImage: image1, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className='row'>
      <div className='loginBody col-md-4'>
        <h2>Sign Up</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" /> 
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="loginbutton btn btn-primary">Login</button>
        </form>
      </div>
      <div className='col-md-8'>

        <img src={image1} />

      </div>
      </div>
    </div>
  );
};

export default Login;