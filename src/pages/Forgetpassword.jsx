import React from 'react';
import registerImage from '../assets/images/register.svg';
import logoImage from '../assets/images/download.png';

const Forgetpassword = () => {
  const handleForgotPassword = (event) => {
    event.preventDefault();
    // Add your reset password logic here
    const email = event.target.elements['reset-email'].value;
    console.log('Reset password for:', email);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <img alt="Illustration" src={registerImage} />
      </div>
      <div className="right-panel">
        <div className="login-box">
          <img className="login-icon" src={logoImage} alt="Logo" />
          <h2>Forgot Password?</h2>
          <form onSubmit={handleForgotPassword}>
            <div className="form-group">
              <label htmlFor="reset-email">Email</label>
              <input
                id="reset-email"
                placeholder="Enter email"
                required
                type="email"
              />
            </div>
            <button type="submit">Request password reset</button>
          </form>
          <div className="signup">
            Back to <a href="./">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
