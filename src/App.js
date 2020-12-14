import './App.css';
import GameDetailsTable from './GameDetailsTable';
import RecentGames from './RecentGames'
import Header from './Header';
import Footer from './Footer'
import RegistrationPage from './RegistrationPage';
// import { Router } from 'react-dom';

function App() {
 
  return (
    <div className="App">
        <Header/>
        <RecentGames/>
        <GameDetailsTable/>
        <RegistrationPage/>
        <Footer/>
    </div>
  );
}

export default App;
