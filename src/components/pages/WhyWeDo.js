import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FullPageContainer from '../styles/Containers';

const WhyWeDo = () => {
	const fullPageVariants = {
		hidden: {
			height: 0,
			transition: {
				ease: 'easeIn',
				duration: 1,
				delayChildren: 2,
				staggerChildren: 2,
			}
		},
		visible: {
			height: '100%',
			transition: {
				ease: 'easeIn',
				duration: 1,
				delayChildren: 2,
				staggerChildren: 2,
			}
		},
	};

	const mainTitleVariants = {
		hidden: {
			y: 10,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 3,
			}
		},
		hover: {
			x: 10,
			transition: {
				duration: 0.5
			}
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: { duration: 2 }
		}
	}

	const lastChildVariants = {
		hidden: {
			y: 10,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 2,
				delay: 10
			}
		},
		hover: {
			x: 10,
			transition: {
				duration: 0.5
			}
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: { duration: 2 }
		}
	}

	return (
		<FullPageContainer >
			<FullPageColor variants={fullPageVariants} initial="hidden" animate="visible" exit="exit">
				<StyledLink to='/trademark'>
					<MainTitleContainer variants={fullPageVariants} >
						<SubTitle variants={mainTitleVariants} whileHover='hover' >porque <b>respiramos</b> orden.</SubTitle>
						<SubTitle variants={mainTitleVariants} whileHover='hover' >porque vivimos <b>diseño.</b></SubTitle>
						<SubTitle variants={mainTitleVariants} whileHover='hover' >porque <b>nos apasiona.</b></SubTitle>
						<SubTitle variants={lastChildVariants} whileHover='hover' ><i>porque podemos.</i></SubTitle>
					</MainTitleContainer>
				</StyledLink>
			</FullPageColor>
		</FullPageContainer>
	);
};

const FullPageColor = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100vw;
	margin: 0;
`;

const StyledLink = styled(Link)`
	&:hover{
		color: var(--almostBlack);
	}
`

const MainTitleContainer = styled(motion.div)`
`

const SubTitle = styled(motion.h4)`
	margin: 0;
	margin-bottom: .2rem;
	font-size: 4rem;
	&:last-child{
		margin-top: 10rem;
	}

`

export default WhyWeDo;
