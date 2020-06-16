import React, { useState } from 'react';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';

import { MainPageContainer } from '../components/styles/Containers';
import { AnimatePresence } from 'framer-motion';

function Main() {
	const [ isIntroductionMoved, setIsIntroductionMoved ] = useState(false);

	// const handleChangeHomeForMe = (e) => {};
	// const handleSubmitHomeForMe = (e) => {
	// 	e.preventDefault();
	// };

	return (
		<MainPageContainer>
			<AnimatePresence>
				<Switch>
					<Route path="/">
						<Home
							isIntroductionMoved={isIntroductionMoved}
							setIsIntroductionMoved={setIsIntroductionMoved}
						/>
					</Route>
				</Switch>
			</AnimatePresence>
		</MainPageContainer>
	);
}

export default Main;
