import LandingPage from './components/landing/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      </Switch>
    </Router>
  );
}


export default App;
