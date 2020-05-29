import React, { useState } from 'react';
import Input from '../shared/Input';

import styled from 'styled-components';
import { FullPageContainer } from '../styles/Containers';
import { motion, AnimatePresence } from 'framer-motion';

const Home = ({ userMessage, handleChange, handleSubmit }) => {
	const [ valueUnderText, setValueUnderText ] = useState(-200);
	const [ isVisible, setIsVisible ] = useState(0);

	const splittedUserMessage = userMessage.split(' ');

	return (
		<FullPageContainer>
			<MainTitleDiv>
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
			</MainTitleDiv>
			<UnderTextDiv>
				<UnderText
					initial={{ y: -200 }}
					animate={{ y: +valueUnderText, transition: { ease: 'anticipate', duration: 2 } }}
				>
					hogar
				</UnderText>
			</UnderTextDiv>
			<InputDiv initial={false} animate={{ opacity: isVisible, transition: { ease: 'easeInOut', duration: 1 } }}>
				<Input handleChange={handleChange} handleSubmit={handleSubmit} />
			</InputDiv>
			<AnimatePresence>
				{splittedUserMessage.length > 1 && (
					<UserOutput
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0, transition: { ease: 'easeInOut', duration: 1 } }}
						exit={{ opacity: 0, x: 50 }}
					>
						{splittedUserMessage.map((word, index) => [
							<AnimatedWord
								key={index}
								initial={{
									opacity: 0,
									y: Math.random() < 0.5 ? -200 : 200
								}}
								animate={{ opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 1 } }}
								exit={{
									opacity: 0,
									y: 100
								}}
							>
								{word}
							</AnimatedWord>
						])}
					</UserOutput>
				)}
			</AnimatePresence>
		</FullPageContainer>
	);
};

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
	background: var(--lightBlue);
	padding: 3rem;
	width: 40rem;
	height: 40rem;
	overflow: hidden;
`;

const BottomLine = styled(motion.div)`
	border-bottom: 1.5px solid;
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
