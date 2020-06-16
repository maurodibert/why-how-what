import React, { useState } from 'react';
import HomeForUs from './HomeForUs';

import styled from 'styled-components';
import { FullPageContainer } from '../styles/Containers';
import MdArrowDown from 'react-ionicons/lib/MdArrowDown';
import { motion, AnimatePresence } from 'framer-motion';

const Home = ({ isIntroductionMoved, setIsIntroductionMoved }) => {
	var homeForUsIntroduction = [
		'hogar, nombre masculino:',
		'Domicilio habitual de una persona y en el que desarrolla su vida privada o familiar',
		'Ambiente familiar que se desarrolla en la vivienda habitual'
	];
	const [ homeForUsIntroductionVisible, setHomeForUsIntroductionVisible ] = useState(false);
	const [ isIntroductionHovered, setIsIntroductionHovered ] = useState(false);
	const [ underTextVisible, setUnderTextVisible ] = useState(false);

	// Animation variants
	const fullPageVariants = {
		hidden: {},
		visible: {},
		exit: {}
	};

	const mainTitleDivVariants = {
		hidden: {},
		visible: {
			transition: {
				duration: 1,
				staggerChildren: 0.2
			}
		}
	};

	const titleVariant = {
		hidden: {
			y: (12 + 50) * 3
		},
		visible: {
			y: -26,
			transition: { ease: 'backInOut', duration: 2 }
		}
	};

	const styledTriggerTextVariants = {
		hidden: {
			y: (12 + 50) * 3
		},
		visible: {
			y: -26,
			transition: { ease: 'backInOut', duration: 2 }
		},
		almostVisible: {
			y: -6,
			transition: { type: 'spring', damping: 6, mass: 3, duration: 0.5 }
		}
	};

	const titleBottomLineVariants = {
		hidden: {
			x: -260
		},
		visible: {
			x: 0,
			transition: { ease: 'easeIn', duration: 1.5 }
		}
	};

	const underTextVariants = {
		hidden: {
			y: -200,
			transition: { ease: 'anticipate', duration: 1.5 }
		},
		visible: {
			y: 0,
			transition: { ease: 'anticipate', duration: 1 }
		}
	};

	const homeIntroductionVariants = {
		hidden: {
			opacity: 0,
			x: 50
		},
		// visible: {
		// 	x: 0,
		// 	opacity: 1,
		// 	transition: {
		// 		ease: 'easeInOut',
		// 		duration: 2
		// 	}
		// },
		visibleHovered: {
			scale: 1.1,
			x: 0,
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 2
			}
		},
		visibleNotHovered: {
			scale: 1,
			x: 0,
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 2
			}
		},
		visibleLeft: {
			scale: 1,
			x: 0,
			opacity: 1,
			backgroundColor: '#efefef',
			transition: {
				ease: 'easeInOut',
				duration: 4
			}
		},
		exit: {
			opacity: 0,
			x: 0
		}
	};

	const animatedParagraphVariants = {
		hidden: {
			opacity: 0,
			x: '-100vw'
		},
		visibleNotHovered: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', damping: 100, stiffness: 50 }
		},
		exit: {
			opacity: 0,
			x: '100vw'
		}
	};

	const homeForUsVariants = {
		hidden: {
			opacity: 0,
			x: -200
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 4,
				ease: 'easeInOut'
			}
		}
	};

	const animatedStyledArrowDownVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			y: 10,
			transition: { yoyo: Infinity, duration: 0.6, delay: 14 }
		}
	};

	return (
		<FullPageContainer variants={fullPageVariants} initial="hidden" animate="visible">
			<MainTitleDiv
				variants={mainTitleDivVariants}
				onHoverStart={(e) => {
					setUnderTextVisible(true);
				}}
				onHoverEnd={(e) => {
					setUnderTextVisible(false);
				}}
				onClick={(e) => {
					setHomeForUsIntroductionVisible(true);
				}}
			>
				<AnimatedH1 variants={titleVariant}>Qué es</AnimatedH1>
				<AnimatedH1 variants={titleVariant}>para vos</AnimatedH1>
				<StyledTriggerText
					variants={styledTriggerTextVariants}
					animate={underTextVisible ? 'almostVisible' : 'visible'}
				>
					tu hogar?
				</StyledTriggerText>
				<TitleBottomLine variants={titleBottomLineVariants} />
			</MainTitleDiv>
			<UnderTextDiv>
				<UnderText variants={underTextVariants} animate={underTextVisible ? 'visible' : 'hidden'}>
					hogar
				</UnderText>
			</UnderTextDiv>

			<AnimatedHomeForUsIntroduction>
				{homeForUsIntroductionVisible && (
					<IntroductionContainer>
						{homeForUsIntroduction.length > 0 && (
							<AnimatedIntroductionGoingLeft>
								<Introduction
									variants={homeIntroductionVariants}
									animate={
										isIntroductionMoved ? (
											'visibleLeft'
										) : isIntroductionHovered ? (
											'visibleHovered'
										) : (
											'visibleNotHovered'
										)
									}
									exit="hidden"
									positionTransition
									onHoverStart={(e) => {
										setIsIntroductionHovered(true);
									}}
									onHoverEnd={(e) => {
										setIsIntroductionHovered(false);
									}}
									onClick={(e) => {
										setIsIntroductionMoved(true);
									}}
								>
									{homeForUsIntroduction.map((paragraph, index) => [
										<AnimatedParagraph key={index} variants={animatedParagraphVariants}>
											{paragraph}
										</AnimatedParagraph>
									])}
								</Introduction>
							</AnimatedIntroductionGoingLeft>
						)}
						{isIntroductionMoved && (
							<AnimatedInHomeForUs>
								<motion.div variants={homeForUsVariants}>
									<HomeForUs isUserOutputMoved={isIntroductionMoved} />
								</motion.div>
							</AnimatedInHomeForUs>
						)}
					</IntroductionContainer>
				)}
			</AnimatedHomeForUsIntroduction>
			<AnimatedStyledArrowDown
				variants={animatedStyledArrowDownVariants}
				animate={isIntroductionMoved ? 'visible' : 'hidden'}
			>
				<StyledArrowDown />
			</AnimatedStyledArrowDown>
		</FullPageContainer>
	);
};

// Home Styles in order of apparition
const MainTitleDiv = styled(motion.div)`
	overflow: hidden;
	height: 20rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	&:hover{
		cursor: pointer;
	}
`;

const StyledTriggerText = styled(motion.h1)`cursor: pointer;`;

const TitleBottomLine = styled(motion.div)`
	border-bottom: 1.5px solid;
`;

const UnderTextDiv = styled(motion.div)`
	overflow: hidden;
	height: 10rem;
	position: relative;
	left: -3rem;
	top: 0;
`;

const UnderText = styled(motion.h1)`
	position: relative;
	top: -1rem;
	font-family: 'Lobster Two', cursive;
	font-weight: bold;
	color: var(--red);
`;

const AnimatedH1 = styled(motion.h1)``;

const AnimatedHomeForUsIntroduction = styled(AnimatePresence)`
`;

const AnimatedIntroductionGoingLeft = styled(AnimatePresence)`
`;

const IntroductionContainer = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: center;
	height: 100rem;
	width: 100rem;
`;

const Introduction = styled(motion.div)`
	background: var(--lightBlue);
	padding: 3rem;
	width: 40rem;
	height: 40rem;
	overflow: hidden;
	&:hover{
		cursor: pointer;
	}
`;

const AnimatedParagraph = styled(motion.p)`
	font-size: 3rem;
	line-height: 1;
	margin: 0;
	margin-top: 2rem;
	&:first-child{
		font-weight: bold;
		font-size: 3.6rem;
	}
	@media (max-width: 1400px) {
		font-size: 2.6rem;
	}
	@media (max-height: 950px) {
		font-size: 2.6rem;
	}
`;

const AnimatedInHomeForUs = styled(AnimatePresence)``;

// const FullPageBottomLine = styled(motion.div)`
// 	border-bottom: 1.5px solid var(--almostBlack);
// 	position: relative;
// 	top: 10rem;
// 	display: flex;
// 	justify-content: center;
// `;

const AnimatedStyledArrowDown = styled(motion.div)`
	position: absolute;
	bottom: 21%;
	@media(max-width: 1400px){
		bottom: 17%;
	}
`;

const StyledArrowDown = styled(MdArrowDown)`
	position: absolute;
	bottom: 12rem;
	top: 1rem;
	font-size: 2.6rem;
`;

export default Home;
