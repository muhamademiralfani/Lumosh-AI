/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AuthContainer from './containers/AuthContainer';
import ChatContainer from './containers/ChatContainer';

const App = () => {
  // state = {
  //   token: null,
  // };
  const [token, setToken] = useState(null);

  const handlesetToken = (token) => {
    setToken(token);
  };

  return token ? <ChatContainer token={token} setToken={handlesetToken} /> : <AuthContainer setToken={handlesetToken} />;
};

export default App;
