import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FullPageContainer from '../styles/Containers';

const WhyWeDo = () => {
	const fullPageVariants = {
		hidden: {
			y: '100vh',
			height: '100%',
		},
		visible: {
			y: 0,
			height: '100%',
			transition: {
				ease: 'easeIn',
				duration: 1.5,
				delayChildren: 2,
				staggerChildren: 2,
			}
		},
		exit: {
			y: 0,
			height: 0,
			transition: { duration: 2 }
		}
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
		},
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
		<FullPageContainer >
			<FullPageColor variants={fullPageVariants} initial="hidden" animate="visible" exit="exit">
				<Link to='/trademark'>
					<MainTitleContainer>
						<SubTitle variants={mainTitleVariants}>porque <b>respiramos</b> orden.</SubTitle>
						<SubTitle variants={mainTitleVariants}>porque vivimos <b>diseño.</b></SubTitle>
						<SubTitle variants={mainTitleVariants}>porque <b>nos apasiona.</b></SubTitle>
						<SubTitle variants={lastChildVariants}><i>porque podemos.</i></SubTitle>
					</MainTitleContainer>
				</Link>
			</FullPageColor>
		</FullPageContainer>
	);
};

const FullPageColor = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--red);
	height: 100%;
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
