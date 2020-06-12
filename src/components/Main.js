import React, { useState } from 'react';
import Home from './pages/Home';
import HomeForUs from './pages/HomeForUs';
import { Route, Switch } from 'react-router-dom';

import { MainPageContainer } from '../components/styles/Containers';
import { AnimatePresence } from 'framer-motion';

function Main() {
	const [ userMessage, setUserMessage ] = useState('');
	const [ isUserOutputMoved, setIsMoved ] = useState(false);

	const handleChangeHomeForMe = (e) => {
		setUserMessage(e.target.value);
	};
	const handleSubmitHomeForMe = (e) => {
		e.preventDefault();
		setIsMoved(true);
	};

	return (
		<MainPageContainer>
			<AnimatePresence>
				<Switch>
					<Route path="/">
						<Home
							handleChange={handleChangeHomeForMe}
							userMessage={userMessage}
							handleSubmit={handleSubmitHomeForMe}
							isUserOutputMoved={isUserOutputMoved}
						/>
						<HomeForUs isUserOutputMoved={isUserOutputMoved} />
					</Route>
				</Switch>
			</AnimatePresence>
		</MainPageContainer>
	);
}

export default Main;
