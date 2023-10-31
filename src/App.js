import logo from './logo.svg';
import React from "react";
import './App.css';
import { Routes, Route, Link} from "react-router-dom";
import { useParams } from 'react-router';

function App() {
  const Home = (props) => {
    return (
      <h1>Welcome Home</h1>
    )}

  const Flavor = (props) => {
    const { flavor } = useParams()

    return <h3> {isNaN(flavor) ?
      `Your word is: ${flavor}` :
      `Your number is: ${flavor}`}</h3>

  }

  const DecoratedFlavor = (props) => {
    const {flavor, textColor, bgColor} = useParams()
    return (
      <div style={{backgroundColor: bgColor, color: textColor}}>
        <h3>{isNaN(flavor) ?
              `Your word is: ${flavor}` :
              `Your number is: ${flavor}`}</h3>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/home" element={<Home /> }/>
        <Route path="/:flavor" element={<Flavor />}/>
        <Route path="/:flavor/:textColor/:bgColor" element={<DecoratedFlavor />} />
      </Routes>

    </div>
  );
}

export default App;
