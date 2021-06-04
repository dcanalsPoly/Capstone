import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import React, { useState } from 'react';
import Footer from './components/Footer';

function App() {
  
  const [casesSummary, setCasesSummary] = useState("false");
  const [deathsSummary, setDeathsSummary] = useState("false");
  const [recoveredSummary, setRecoveredSummary] = useState("false");
  //
  const [weeklyCasesSummary, setWeeklyCasesSummary] = useState("false");
  const [weeklydeathsSummary, setWeeklyDeathsSummary] = useState("false");
  const [weeklyrecoveredSummary, setWeeklyRecoveredSummary] = useState("false");

  return (
    <div className="App">
      <Header casesSummary={casesSummary} deathsSummary={deathsSummary} recoveredSummary={recoveredSummary} weeklyCasesSummary={weeklyCasesSummary} weeklydeathsSummary={weeklydeathsSummary} weeklyrecoveredSummary={weeklyrecoveredSummary}/>
      <Content setCasesSummary={setCasesSummary} setDeathsSummary={setDeathsSummary} setRecoveredSummary={setRecoveredSummary} setWeeklyCasesSummary={setWeeklyCasesSummary} setWeeklyDeathsSummary={setWeeklyDeathsSummary} setWeeklyRecoveredSummary={setWeeklyRecoveredSummary}/>
      <Footer/>
    </div>
  );
}

export default App;