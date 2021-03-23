import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ReportForm from './components/ReportForm';
import SummaryTile from './components/SummaryTile';

function App() {
  return (
    <div className="App">
      <Header/>
        <ReportForm/>
      
      <Footer/>
    </div>
  );
}

export default App;