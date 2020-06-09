import React, { useState } from 'react';

import { FlexRow } from '../styles/Containers';
import { StyledLi, StyledUl } from '../styles/Lists';
import styled from 'styled-components';

import { motion } from 'framer-motion';

const HomeForUs = ({ isUserOutputMoved }) => {
	const paragraphs = [
		{
			body: 'Para nosotros un hogar es un lugar donde nuestras familias se sientan protegidas y seguras.'
		},
		{ body: 'Es un espacio donde poder descansar, compartir y disfrutar; un lugar del que no te querés ir.' },
		{ body: 'Un hogar debería ser un organismo inteligente que no te consuma sino que haga por nosotros.' }
	];

	// Animation Variants
	const containerVariants = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2,
				duration: 2,
				delayChildren: 2,
				staggerChildren: 4
			}
		},
		notVisible: { opacity: 0, x: '-100%' }
	};

	const itemVariants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 2
			}
		},
		notVisible: { opacity: 0, y: '20%' }
	};

	return (
		<MotionedDiv variants={containerVariants} animate={isUserOutputMoved ? 'visible' : 'notVisible'}>
			{paragraphs.map((p, i) => {
				return (
					<StyleH3 key={i} variants={itemVariants}>
						{p.body}
					</StyleH3>
				);
			})}
		</MotionedDiv>
	);
};

const MotionedDiv = styled(motion.div)`
	display: flex;
	flex-direction: column;
	text-align: right;
	justify-content: flex-end;
	color: var(--almostBlack);
	width: 40rem;
	height: 40rem;
	position: absolute;
	background-color: white;
	top: 25%;
	left: 50%;
	padding: 3rem;
`;

const StyleH3 = styled(motion.h3)`
	font-weight: normal;
	font-size: 2.6rem;
	margin-bottom: 2rem;
	&:last-child{
		margin: 0;
	}
`;

export default HomeForUs;
