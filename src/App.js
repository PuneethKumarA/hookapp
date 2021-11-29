import logo from './logo.svg';
import './App.css';



import React from 'react';
import CounterTwo from './components/reducerhook/CounterTwo';


export const UserContext = React.createContext()     //exporting a context
export const BatchContext = React.createContext()

function App() {
  return (
    <div className="App">
    <CounterTwo/>
    </div>
  );
}
export default App;