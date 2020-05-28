import React, { useState } from 'react';
import Home from './pages/Home';

function Main() {
	const [ userMessage, setUserMessage ] = useState('');

	const handleChangeHomeForMe = (e) => {
		setUserMessage(e.target.value);
	};
	const handleSubmitHomeForMe = (e) => {
		e.preventDefault();
	};

	return (
		<main>
			<Home handleChange={handleChangeHomeForMe} userMessage={userMessage} handleSubmit={handleSubmitHomeForMe} />
		</main>
	);
}

export default Main;
