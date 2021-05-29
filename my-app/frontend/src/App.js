import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import React, { useState } from 'react';
import Footer from './components/Footer';

function App() {
  
  const [selection, setSelection] = useState("japan");

  console.log(selection)

  return (
    <div className="App">
      <Header/>
      {/* <Content/> */}
      <button className="menuButton" onClick={() => setSelection("spain")}>Spain</button>
      <button className="menuButton" onClick={() => setSelection("south-africa")}>SouthAfrica</button>
      <Content country = {selection}/>
      <Footer/>
    </div>
  );
}

export default App;