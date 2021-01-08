import './App.css';

import React, { useState } from 'react';
import UserForm from './components/UserForm';
import FormResults from './components/FormResults';

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpw: ""
  });

  return (
    <div className="App">
      <UserForm user={user} setUser={setUser} />
    </div>
  );
}

export default App;
