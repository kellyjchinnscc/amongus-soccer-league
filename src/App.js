import './App.css';
import GameDetailsTable from './GameDetailsTable';
import RecentGames from './RecentGames'
import Header from './Header';
import Footer from './Footer'

function App() {
 
  return (
    <div className="App">
        <Header/>
        <RecentGames/>
        <GameDetailsTable/>
        <Footer/>
    </div>
  );
}

export default App;
