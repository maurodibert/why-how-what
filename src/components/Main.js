import React, { useState } from 'react';
import Home from './pages/Home';
import HowWeDo from './pages/HowWeDo';
import { Route, Switch, useLocation } from 'react-router-dom';

import { MainPageContainer } from '../components/styles/Containers';
import { AnimatePresence } from 'framer-motion';
import Details from './pages/Details';

function Main() {
	const location = useLocation();
	const [isIntroductionMoved, setIsIntroductionMoved] = useState(false);
	const [isHowWeDoVisible, setIsHowWeDoVisible] = useState(false);

	return (
		<MainPageContainer>
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route path="/details">
						<Details />
					</Route>
					<Route path="/how-we-do">
						<HowWeDo />
					</Route>
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
