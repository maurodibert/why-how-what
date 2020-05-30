import React, { useState } from 'react';
import Home from './pages/Home';

function Main() {
	const [ userMessage, setUserMessage ] = useState('');
	const [ isCreased, setIsCreased ] = useState(false);

	const handleChangeHomeForMe = (e) => {
		setUserMessage(e.target.value);
	};
	const handleSubmitHomeForMe = (e) => {
		e.preventDefault();
		setIsCreased(true);
	};

	return (
		<main>
			<Home
				handleChange={handleChangeHomeForMe}
				userMessage={userMessage}
				handleSubmit={handleSubmitHomeForMe}
				isCreased={isCreased}
			/>
		</main>
	);
}

export default Main;
