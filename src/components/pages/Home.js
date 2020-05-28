import React, { useState } from 'react';
import styled from 'styled-components';
import { FullPageContainer } from '../styles/Containers';

import Input from '../shared/Input';

import { motion } from 'framer-motion';

const Home = ({ userMessage, handleChange, handleSubmit }) => {
	const [ valueUnderText, setValueUnderText ] = useState(-200);
	const [ isVisible, setIsVisible ] = useState(0);

	return (
		<FullPageContainer>
			<StyledDiv>
				<motion.h1
					initial={{ y: (12 + 50) * 3 }}
					animate={{ y: -26, transition: { ease: 'backInOut', duration: 2 } }}
				>
					Qué es
				</motion.h1>
				<motion.h1
					initial={{ y: (12 + 50) * 3 }}
					animate={{ y: -26, transition: { ease: 'backInOut', duration: 2.2 } }}
				>
					para vos
				</motion.h1>
				<StyledTriggerText
					initial={{ y: (12 + 50) * 3 }}
					animate={{
						y: +valueUnderText === -200 ? -26 : 0,
						transition: { ease: 'backInOut', duration: 2.4 }
					}}
					onHoverStart={(e) => {
						setValueUnderText(0);
					}}
					onHoverEnd={(e) => {
						setValueUnderText(-200);
					}}
					onClick={(e) => {
						setIsVisible(isVisible === 0 ? 1 : 0);
					}}
				>
					tu hogar?
				</StyledTriggerText>
				<BottomLine initial={{ x: -260 }} animate={{ x: 0, transition: { ease: 'easeIn', duration: 1 } }} />
			</StyledDiv>
			<StyledUnderTextDiv>
				<StyledUnderText
					initial={{ y: -200 }}
					animate={{ y: +valueUnderText, transition: { ease: 'anticipate', duration: 2 } }}
				>
					hogar
				</StyledUnderText>
			</StyledUnderTextDiv>
			<motion.div animate={{ opacity: isVisible, transition: { ease: 'easeInOut', duration: 1 } }}>
				<Input handleChange={handleChange} handleSubmit={handleSubmit} />
			</motion.div>
			<div>{userMessage}</div>
		</FullPageContainer>
	);
};

const BottomLine = styled(motion.div)`
	border-bottom: 1.5px solid;
`;
const StyledDiv = styled(motion.div)`
	overflow: hidden;
	height: 19rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const StyledTriggerText = styled(motion.h1)`cursor: pointer;`;

const StyledUnderTextDiv = styled(motion.div)`
	overflow: hidden;
	height: 7rem;
	position: relative;
	left: -5rem;
	top: 0;

`;

const StyledUnderText = styled(motion.h1)`
	position: relative;
	top: -1rem;
	font-family: 'Lobster Two', cursive;
	font-weight: bold;
	color: var(--red);
`;
export default Home;
