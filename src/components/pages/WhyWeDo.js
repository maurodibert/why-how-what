import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FullPageContainer from '../styles/Containers';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const WhyWeDo = () => {
	const [isLogoVisible, setIsLogoVisible] = useState(false);

	// Animations
	// setTimeout(() => {
	// 	setIsLogoVisible(true);
	// }, 14000);

	const fullPageVariants = {
		hidden: {
			y: '100vh',
		},
		visible: {
			y: 0,
			transition: {
				ease: 'easeIn',
				duration: 1.5,
				delayChildren: 2,
				staggerChildren: 2,
			}
		},
	};

	const mainTitleVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 3,
			}
		}
	}

	const lastChildVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 2,
				delay: 10
			}
		}
	}

	return (
		<FullPageContainer variants={fullPageVariants} initial="hidden" animate="visible" exit="exit">
			<FullPageColor>
				<MainTitleContainer>
					<SubTitle variants={mainTitleVariants}>porque <b>respiramos</b> orden.</SubTitle>
					<SubTitle variants={mainTitleVariants}>porque vivimos <b>diseño.</b></SubTitle>
					<SubTitle variants={mainTitleVariants}>porque <b>nos apasiona.</b></SubTitle>
					<SubTitle variants={lastChildVariants}><i>porque podemos.</i></SubTitle>
				</MainTitleContainer>
			</FullPageColor>
			{/* {isLogoVisible && (
				<Logo></Logo>
			)} */}

		</FullPageContainer>
	);
};

const FullPageColor = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--red);
	height: 100vh;
	width: 100vw;
	margin: 0;
`;

const MainTitleContainer = styled(motion.div)`

`

const SubTitle = styled(motion.h4)`
	margin: 0;
	margin-bottom: .2rem;
	color: white;
	font-size: 4rem;
	&:last-child{
		margin-top: 10rem;
	}

`

export default WhyWeDo;
