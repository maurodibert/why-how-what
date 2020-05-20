import React from 'react';

import { FullPageContainer } from '../styles/Containers';
import Input from '../shared/Input';

import { motion } from 'framer-motion';

const Home = (props) => {
	const containerVariants = {
		before: {},
		after: { transition: { staggerChildren: 7 } }
	};

	const childVariants = {
		before: {
			y: [ -36 * 1.2 ],
			opacity: 0
		},
		after: {
			y: 0,
			opacity: 1,
			transition: { ease: 'easeInOut', duration: 4 }
		}
	};

	return (
		<FullPageContainer>
			<motion.div variants={containerVariants} initial="before" animate="after">
				<motion.h2 variants={childVariants}>Qué es para vos tu hogar?</motion.h2>
				<motion.div variants={childVariants}>
					<Input goto="/home-for-us" history={props.history} />
				</motion.div>
			</motion.div>
		</FullPageContainer>
	);
};

export default Home;
