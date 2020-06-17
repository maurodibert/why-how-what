import React, { useState } from 'react';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';

import { MainPageContainer } from '../components/styles/Containers';
import { AnimatePresence } from 'framer-motion';

function Main() {
	const [ isIntroductionMoved, setIsIntroductionMoved ] = useState(false);
	const [ isHowWeDoVisible, setIsHowWeDoVisible ] = useState(false);

	return (
		<MainPageContainer>
			<AnimatePresence>
				<Switch>
					<Route path="/">
						<Home
							isIntroductionMoved={isIntroductionMoved}
							setIsIntroductionMoved={setIsIntroductionMoved}
							isHowWeDoVisible={isHowWeDoVisible}
							setIsHowWeDoVisible={setIsHowWeDoVisible}
						/>
					</Route>
				</Switch>
			</AnimatePresence>
		</MainPageContainer>
	);
}

export default Main;

// const FullPageBottomLine = styled(motion.div)`
// 	border-bottom: 1.5px solid var(--almostBlack);
// 	position: relative;
// 	top: 10rem;
// 	display: flex;
// 	justify-content: center;
// `;
