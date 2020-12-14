import './App.css';
// import GameDetailsTable from './GameDetailsTable';
// import RecentGames from './RecentGames'
import Header from './Header';
import Footer from './Footer'
import RegistrationPage from './RegistrationPage';
import { BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { HomePage } from './HomePage'


function App() {
 
  return (
    <div className="App">
        <Router>
          <Route path="*" component={Header}/>

          <Switch>
            {/* <Route exact path ="/" component={RecentGames}/>
            <Route exact path ="/" component={GameDetailsTable}/> */}
            <Route exact path="/" component={HomePage}/>
            <Route path="/register" component={RegistrationPage}/>
          </Switch>
     


          <Route path="*" component={Footer}/>
        </Router>

        {/* <Header/>
        <RecentGames/>
        <GameDetailsTable/>
        <br/>
        <RegistrationPage/>
        <Footer/> */}
       
    </div>
  );
}

export default App;
