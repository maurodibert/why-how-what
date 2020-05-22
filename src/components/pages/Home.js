import React, { useState } from 'react';
import styled from 'styled-components';
import { FullPageContainer } from '../styles/Containers';

import { motion } from 'framer-motion';

const Home = (props) => {
	const [ valueUnderText, setValueUnderText ] = useState(-200);

	return (
		<FullPageContainer>
			<StyledDiv>
				<motion.h1
					initial={{ y: (12 + 50) * 3 }}
					animate={{ y: -26, transition: { ease: 'easeOut', duration: 3 } }}
				>
					Qué es
				</motion.h1>
				<motion.h1
					initial={{ y: (12 + 50) * 3 }}
					animate={{ y: -26, transition: { ease: 'easeOut', duration: 3.2 } }}
				>
					para vos
				</motion.h1>
				<StyledTriggerText
					initial={{ y: (12 + 50) * 3 }}
					animate={{ y: -26, transition: { ease: 'easeOut', duration: 3.4 } }}
					onHoverStart={(e) => {
						setValueUnderText(0);
					}}
					onHoverEnd={(e) => {
						setValueUnderText(-200);
					}}
				>
					tu hogar?
				</StyledTriggerText>
			</StyledDiv>
			<StyledOnHoverText>
				<StyledUnderText
					initial={{ y: -200 }}
					animate={{ y: +valueUnderText, transition: { ease: 'easeOut', duration: 1 } }}
				>
					hogar
				</StyledUnderText>
			</StyledOnHoverText>
		</FullPageContainer>
	);
};

const StyledDiv = styled(motion.div)`
	overflow: hidden;
	height: 19rem;
	border-bottom: 1px solid;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const StyledTriggerText = styled(motion.h1)`cursor: pointer;`;

const StyledOnHoverText = styled(motion.div)`
	overflow: hidden;
	height: 7rem;
	position: relative;
	left: -5rem;
	top: 0;
	font-family: 'Lobster Two', cursive;
	font-weight: bold;
	color: var(--red);
`;

const StyledUnderText = styled(motion.h1)`
	position: relative;
	top: -1rem;
`;
export default Home;
