import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeForUs from './pages/HomeForUs';

const Main = () => {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home-for-us" component={HomeForUs} />
			</Switch>
		</main>
	);
};

export default Main;
