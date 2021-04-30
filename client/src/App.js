import './App.scss';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Home from './pages/Home';

function App() {
	// state
	const [showLoginModal, setShowLoginModal] = useState(false);

	return (
		<div className="app">
			<Router>
				<Header setShowLoginModal={setShowLoginModal} />
				<Switch>
					<Route exact path='/' render={() => { 
						return <Home showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} /> 
						}} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
