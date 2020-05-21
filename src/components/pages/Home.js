import React from 'react';
import styled from 'styled-components';
import { FullPageContainer } from '../styles/Containers';

import { motion } from 'framer-motion';

const Home = (props) => {
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
				<motion.h1
					initial={{ y: (12 + 50) * 3 }}
					animate={{ y: -26, transition: { ease: 'easeOut', duration: 3.4 } }}
					whileHover={{
						skew: -5
					}}
				>
					tu hogar?
				</motion.h1>
			</StyledDiv>
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

export default Home;
