import React, { useState, useEffect } from 'react';
import { Networks, useIsConnected, XRPLClient } from "@nice-xrpl/react-xrpl";
import './App.css';
import './style.css';
import NewWallet from './NewWallet'; // Assuming NewWallet is in the same directory
import LoginPage from './LoginPage'; // Assuming LoginPage is in the same directory
import xrpl from 'xrpl'

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [showNewWallet, setShowNewWallet] = useState(false);

  useEffect(() => {
    const userObj = getUserObjectFromLocalStorage();
    if (userObj) {
      setUser(userObj);
      setSignedIn(true);
    }
  }, []);

  const getUserObjectFromLocalStorage = () => {
    try {
      const userJSON = localStorage.getItem('user');
      return JSON.parse(userJSON);
    } catch (error) {
      console.error('Error fetching user object from localStorage:', error);
      return null;
    }
  };

  useEffect(() => {
    // Perform any necessary actions when user data changes
  }, [user]);

  const handleCreateNewWallet = () => {
    setShowNewWallet(true);
  };

  const handleLogin = () => {
    // Handle login
    setSignedIn(true);
  };

  if (!showNewWallet) {
    
    return (
      <>
        <LoginPage onLogin={handleLogin} onCreateNewWallet={handleCreateNewWallet} />
      </>
    );
  } else if (showNewWallet) {
    return (
      <UserContext.Provider value={user}>
            <XRPLClient network={Networks.Testnet}>
                <NewWallet />
            </XRPLClient>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={user}>
        {/* Render any other component or leave blank */}
      </UserContext.Provider>
    );
  }
}

export default App;


