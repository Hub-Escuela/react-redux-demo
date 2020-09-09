import React from 'react';
import logo from './logo.svg';
import { Counter } from './components/Counter';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <UsersList />
        
      </header>
    </div>
  );
}

export default App;
