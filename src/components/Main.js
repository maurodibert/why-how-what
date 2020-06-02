import React, { useState } from 'react';
import Home from './pages/Home';
import HomeForUs from './pages/HomeForUs';

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
		<main>
			<Home
				handleChange={handleChangeHomeForMe}
				userMessage={userMessage}
				handleSubmit={handleSubmitHomeForMe}
				isUserOutputMoved={isUserOutputMoved}
			/>
			<HomeForUs isUserOutputMoved={isUserOutputMoved} />
		</main>
	);
}

export default Main;
