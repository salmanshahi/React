import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/style.css';
import registerImage from '../assets/images/register.svg';
import logoImage from '../assets/images/download.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard'); 
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <img alt="Illustration" src={registerImage} />
      </div>
      <div className="right-panel">
        <div className="login-box">
          <img className="login-icon" src={logoImage} alt="Logo" />
          <h2>Sign in</h2>

          <form onSubmit={handleLogin}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" placeholder="Enter email" required type="email" />
              </div>

              <div className="form-group" style={{ position: 'relative' }}>
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input
                    id="login-password"
                    placeholder="Enter password"
                    required
                    type={showPassword ? 'text' : 'password'}
                  />
                  <span className="toggle-password" onClick={togglePassword}>
                    <svg
                      fill="#666"
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 
                          11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 
                          15.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 
                          1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgetpassword">Forgot password</a>
            </div>

            <button type="submit">Sign In</button>
          </form>

          <div className="login-info">
            <p>
              <span className="label">User:</span>{' '}
              <span className="value">demo@qtecsolution.net</span>
            </p>
            <p>
              <span className="label">Password:</span>{' '}
              <span className="value">87654321</span>
            </p>
          </div>

          <div className="signup">
            Don’t have an account? <a href="/sign-up">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
