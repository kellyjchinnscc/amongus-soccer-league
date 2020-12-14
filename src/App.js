import './App.css';
import GameDetailsTable from './GameDetailsTable';
import RecentGames from './RecentGames'
import Header from './Header';
import Footer from './Footer'
import RegistrationPage from './RegistrationPage';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 
  return (
    <div className="App">
        <Router>
          <Route path="*" component={Header}/>
          <Route exact path ="/" component={RecentGames}/>
          <Route exact path ="/" component={GameDetailsTable}/>
          <Route path="/register" component={RegistrationPage}/>
          <Route path="*" component={Footer}/>
        </Router>
       
    </div>
  );
}

export default App;
