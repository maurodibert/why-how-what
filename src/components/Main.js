import React, { useState } from 'react';
import Home from './pages/Home';
import HowWeDo from './pages/HowWeDo';
import { Route, Switch, useLocation } from 'react-router-dom';
import Media from 'react-media';
import { MainPageContainer } from '../components/styles/Containers';
import { AnimatePresence } from 'framer-motion';
import Trademark from './pages/Trademark';
import Details from './pages/Details';
import WhyWeDo from './pages/WhyWeDo';
import HomeSmartphone from './pages/HomeSmartphone';

function Main() {
	const location = useLocation();
	const [isIntroductionMoved, setIsIntroductionMoved] = useState(false);
	const [isHowWeDoVisible, setIsHowWeDoVisible] = useState(false);

	return (
		<MainPageContainer>
			<AnimatePresence exitBeforeEnter>
				<Media query="(min-width: 1024px)">
					{matches =>
						matches ? (
							<Switch location={location} key={location.key}>
								<Route path="/trademark">
									<Trademark />
								</Route>
								<Route path="/why-we-do">
									<WhyWeDo />
								</Route>
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
						) : (
								<Switch location={location} key={location.key}>
									<Route path="/">
										<HomeSmartphone />
									</Route>
								</Switch>
							)
					}
				</Media>

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
