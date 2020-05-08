import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeForUs from './pages/HomeForUs';
import NotFound from './pages/NotFound';
import HowWeDo from './pages/HowWeDo';

const Main = () => {
	return (
		<main>
			<Switch>
				<Route exact path="/home-for-us" component={HomeForUs} />
				<Route exact path="/how-we-do" component={HowWeDo} />
				<Route exact path="/" component={Home} />
				<Route path="/*" component={NotFound} />
			</Switch>
		</main>
	);
};

export default Main;
