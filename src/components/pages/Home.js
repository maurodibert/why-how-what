import React, { useState } from 'react';
import Input from '../shared/Input';

import styled from 'styled-components';
import { FullPageContainer } from '../styles/Containers';
import MdArrowDown from 'react-ionicons/lib/MdArrowDown';
import { motion, AnimatePresence } from 'framer-motion';

const Home = ({ userMessage, handleChange, handleSubmit, isUserOutputMoved }) => {
	const [ underTextVisible, setUnderTextVisible ] = useState(false);
	const [ isInputVisible, setIsInputVisible ] = useState(false);

	const splittedUserMessage = userMessage.split(' ');

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
			transition: { type: 'spring', damping: 6, mass: 3, duration: 1.5 }
		}
	};

	const titleBottomLineVariants = {
		hidden: {
			x: -260
		},
		visible: {
			x: 0,
			transition: { ease: 'easeIn', duration: 1 }
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

	const inputVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 1
			}
		}
	};

	const userOutputVariants = {
		hidden: {
			opacity: 0,
			x: 50
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 2
			}
		},
		visibleLeft: {
			x: '-50%',
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 2
			}
		},
		exit: {
			opacity: 0,
			x: 0
		}
	};

	const animatedWordVariants = {
		hidden: {
			opacity: 0,
			y: Math.random() < 0.5 ? -200 : 200
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { ease: 'easeOut', duration: 1 }
		},
		exit: {
			opacity: 0,
			y: 100
		}
	};

	const fullPageBottomLineVariants = {
		hidden: {
			width: 0,
			opacity: 0
		},
		visible: {
			width: '92rem',
			opacity: 1,
			transition: { ease: 'easeOut', duration: 13 }
		}
	};

	const animatedStyledArrowDownVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			y: 10,
			transition: { yoyo: Infinity, duration: 0.6, delay: 12 }
		}
	};

	return (
		<FullPageContainer variants={fullPageVariants} initial="hidden" animate="visible">
			<MainTitleDiv variants={mainTitleDivVariants}>
				<AnimatedH1 variants={titleVariant}>Qué es</AnimatedH1>
				<AnimatedH1 variants={titleVariant}>para vos</AnimatedH1>
				<StyledTriggerText
					variants={styledTriggerTextVariants}
					animate={underTextVisible ? 'almostVisible' : 'visible'}
					onHoverStart={(e) => {
						setUnderTextVisible(true);
					}}
					onHoverEnd={(e) => {
						setUnderTextVisible(false);
					}}
					onClick={(e) => {
						setIsInputVisible(!isInputVisible);
					}}
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
			<InputDiv variants={inputVariants} animate={isInputVisible && !isUserOutputMoved ? 'visible' : 'hidden'}>
				<Input handleChange={handleChange} handleSubmit={handleSubmit} />
			</InputDiv>
			<AnimatedUserOutput>
				{splittedUserMessage.length > 1 && (
					<UserOutput variants={userOutputVariants} animate={isUserOutputMoved ? 'visibleLeft' : 'visible'}>
						{splittedUserMessage.map((word, index) => [
							<AnimatedWord key={index} variants={animatedWordVariants}>
								{word}
							</AnimatedWord>
						])}
					</UserOutput>
				)}
			</AnimatedUserOutput>
			<FullPageBottomLine
				variants={fullPageBottomLineVariants}
				animate={isInputVisible && isUserOutputMoved ? 'visible' : 'hidden'}
			/>
			<AnimatedStyledArrowDown
				variants={animatedStyledArrowDownVariants}
				animate={isUserOutputMoved ? 'visible' : 'hidden'}
			>
				<StyledArrowDown />
			</AnimatedStyledArrowDown>
		</FullPageContainer>
	);
};

const AnimatedUserOutput = styled(AnimatePresence)``;

const AnimatedH1 = styled(motion.h1)``;

const InputDiv = styled(motion.div)`
	position: absolute;
	bottom: 10rem;
`;

const AnimatedWord = styled(motion.h1)`
	font-size: 3.6rem;
	line-height: 1;
	display: inline-block;
	margin: 0;
	margin-right: 1rem;
`;

const UserOutput = styled(motion.div)`
	position: absolute;
	top: 25%;
	background: var(--lightBlue);
	padding: 3rem;
	width: 40rem;
	height: 40rem;
	overflow: hidden;
`;

const TitleBottomLine = styled(motion.div)`
	border-bottom: 1.5px solid;
`;

const FullPageBottomLine = styled(motion.div)`
	border-bottom: 1.5px solid var(--almostBlack);
	position: absolute;
	bottom: 22%;
	display: flex;
	justify-content: center;
`;

const AnimatedStyledArrowDown = styled(motion.div)`
	position: absolute;
	bottom: 21%;
`;

const StyledArrowDown = styled(MdArrowDown)`
	position: absolute;
	top: 1rem;
	font-size: 2.6rem;
`;

const MainTitleDiv = styled(motion.div)`
	overflow: hidden;
	height: 19rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const StyledTriggerText = styled(motion.h1)`cursor: pointer;`;

const UnderTextDiv = styled(motion.div)`
	overflow: hidden;
	height: 7rem;
	position: relative;
	left: -5rem;
	top: 0;

`;

const UnderText = styled(motion.h1)`
	position: relative;
	top: -1rem;
	font-family: 'Lobster Two', cursive;
	font-weight: bold;
	color: var(--red);
`;

export default Home;
