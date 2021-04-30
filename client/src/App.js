import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Home from './pages/Home'


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/login' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
