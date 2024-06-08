import React, { useState } from 'react';

const LoginPage = ({ onLogin, onCreateNewWallet }) => {
    const [wrongPass, setWrongPass] = useState(false);
  
    const handleInput = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const email = formData.get('email');
      const password = formData.get('password');
  
      // Perform login validation, if successful, call onLogin
      // If login fails, setWrongPass(true)
      // If "Create New Wallet" button is clicked, call onCreateNewWallet
    };
  
    return (
      <>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <div className="center">
          <div className="container">
            <div className="text">Wallet</div>
            <form onSubmit={handleInput}>
              <div className="data">
                <label>Private Key</label>
                <input name="email" required />
              </div>
              <div className="data">
                <label>Password</label>
                <input name="password" type="password" required />
              </div>
              <div className="btn">
                <div className="inner"></div>
                <button type="submit">Sign in</button>
              </div>
              <div className="btn">
                <div className="inner"></div>
                <button type="button" onClick={onCreateNewWallet}>Create New Wallet</button>
              </div>
            </form>
            {wrongPass && <p>Incorrect email or password.</p>}
          </div>
        </div>
      </>
    );
  };
  
  export default LoginPage;