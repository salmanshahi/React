import React, { useState } from 'react';
import '../styles/style.css';
import registerImage from '../assets/images/register.svg';
import logoImage from '../assets/images/download.png';


const SignUp = () => {
  const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });

  const togglePassword = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    navigate('/Login');
  };

  return (
    <div className="container">
      <div className="left-panel">
        <img alt="Illustration" src={registerImage} />
      </div>
      <div className="right-panel">
        <div className="login-box">
          <img className="login-icon" src={logoImage} alt="icon" />
          <h2>Create Account</h2>
          <h4 className="h4">Sign up now and explore.</h4>

          <form onSubmit={handleSignup}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" placeholder="Enter full name" required type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" placeholder="Enter email" required type="email" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input
                    id="password"
                    placeholder="Enter password"
                    required
                    type={showPassword.password ? "text" : "password"}
                  />
                  <span className="toggle-password" onClick={() => togglePassword("password")}>
                    <svg fill="#666" height="20" viewBox="0 0 24 24" width="20">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 
                        11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 
                        15.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 
                        1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <div className="password-wrapper">
                  <input
                    id="confirm-password"
                    placeholder="Confirm password"
                    required
                    type={showPassword.confirmPassword ? "text" : "password"}
                  />
                  <span className="toggle-password" onClick={() => togglePassword("confirmPassword")}>
                    <svg fill="#666" height="20" viewBox="0 0 24 24" width="20">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 
                        11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 
                        15.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 
                        1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" required />
                I agree to all the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
              </label>
            </div>

            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
