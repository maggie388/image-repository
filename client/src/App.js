import './App.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// components
import Header from './components/Header';
import Home from './pages/Home';
import LoginModal from './components/LoginModal';

// variables
const { REACT_APP_SERVER_URL: SERVER_URL } = process.env;

function App() {
	// state
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);

	useEffect(() => {
		console.log(SERVER_URL);
		axios
			.get(`${SERVER_URL}/api/auth/check-auth`, { withCredentials: true })
			.then((response) => {
				console.log(response);
				setIsLoggedIn(true);
			})
			.catch((error)=> {
				console.log(error);
			})
	})

	return (
		<div className="app">
			<Router>
				<Header isLoggedIn={isLoggedIn} setShowLoginModal={setShowLoginModal} />
				<Switch>
					<Route exact path='/' render={() => { 
						return <Home showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} /> 
						}} />
				</Switch>
				{showLoginModal && <LoginModal />}
			</Router>
		</div>
	);
}

export default App;
