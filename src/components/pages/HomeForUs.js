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
		{ body: 'Es un espacio donde poder descansar, compartir y disfrutar. Un lugar del que no te querés ir.' },
		{ body: 'Un hogar debería ser un organismo inteligente que no te consuma, que haga por nosotros.' }
	];

	// const list = [
	// 	{ id: 1, regular: 'Un lugar donde mi familia se sienta protegida.', bold: 'Un espacio seguro' },
	// 	{ id: 2, regular: 'Un lugar que no te consuma sino provea.', bold: 'Un ambiente sostenible' },
	// 	{ id: 3, regular: 'Un lugar donde pueda descansar.', bold: 'Una pausa' },
	// 	{ id: 4, regular: 'Un lugar del que no te quieras ir.', bold: 'Una zona de placer' },
	// 	{ id: 5, regular: 'Un lugar que haga por nosotros.', bold: 'Un organismo inteligente' }
	// ];

	const variants = {
		visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 20, restDelta: 2, duration: 2 } },
		notVisible: { opacity: 0, x: '-100%' }
	};

	return (
		<StyledDiv variants={variants} animate={isUserOutputMoved ? 'visible' : 'notVisible'}>
			{paragraphs.map((p) => {
				return (
					<StyleH3
						intial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1, transition: { duration: 4 } }}
					>
						{p.body}
					</StyleH3>
				);
			})}
		</StyledDiv>
	);
};
const StyledDiv = styled(motion.div)`
	display: flex;
	flex-direction: column;
	text-align: right;
	justify-content: flex-end;
	color: white;
	width: 40rem;
	height: 40rem;
	position: absolute;
	background-color: var(--lightBlue);
	top: 25%;
	left: 50%;
	padding: 3rem;
`;

const StyleH3 = styled(motion.h3)`
	font-size: 2.6rem;
	margin-bottom: 2rem;
	&:last-child{
		margin: 0;
	}
`;

export default HomeForUs;
