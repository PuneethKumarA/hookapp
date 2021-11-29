import logo from './logo.svg';
import './App.css';



import React from 'react';
import CounterThree from './components/reducerhook/CounterThree';


export const UserContext = React.createContext()     //exporting a context
export const BatchContext = React.createContext()

function App() {
  return (
    <div className="App">
    <CounterThree/>
    </div>
  );
}
export default App;