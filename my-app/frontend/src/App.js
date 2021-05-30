import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import React, { useState } from 'react';
import Footer from './components/Footer';

function App() {
  
  const [casesSummary, setCasesSummary] = useState("false");
  const [deathsSummary, setDeathsSummary] = useState("false");
  const [recoveredSummary, setRecoveredSummary] = useState("false");

  return (
    <div className="App">
      <Header casesSummary={casesSummary} deathsSummary={deathsSummary} recoveredSummary={recoveredSummary}/>
      <Content setCasesSummary={setCasesSummary} setDeathsSummary={setDeathsSummary} setRecoveredSummary={setRecoveredSummary}/>
      <Footer/>
    </div>
  );
}

export default App;