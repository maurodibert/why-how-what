import React, { useState } from 'react';

import { FlexRow } from '../styles/Containers';
import { StyledLi, StyledUl } from '../styles/Lists';
import styled from 'styled-components';

import { motion } from 'framer-motion';

const HomeForUs = ({ isUserOutputMoved }) => {
	const list = [
		{ id: 1, regular: 'Un lugar donde mi familia se sienta protegida.', bold: 'Un espacio seguro' },
		{ id: 2, regular: 'Un lugar que no te consuma sino provea.', bold: 'Un ambiente sostenible' },
		{ id: 3, regular: 'Un lugar donde pueda descansar.', bold: 'Una pausa' },
		{ id: 4, regular: 'Un lugar del que no te quieras ir.', bold: 'Una zona de placer' },
		{ id: 5, regular: 'Un lugar que haga por nosotros.', bold: 'Un organismo inteligente' }
	];

	return (
		<StyledDiv initial={{ x: 2000 }} animate={{ x: isUserOutputMoved ? 0 : 2000, transition: { duration: 2 } }}>
			<div>
				<h2>Para nosotros un hogar es</h2>
				<FlexRow>
					<StyledUl>
						{list.map((item, index) => {
							return (
								<StyledLi key={index}>
									{item.regular} <b>{item.bold}</b>
								</StyledLi>
							);
						})}
					</StyledUl>
				</FlexRow>
			</div>
		</StyledDiv>
	);
};
const StyledDiv = styled(motion.div)`
	color: white;
	width: 50rem;
	height: 40rem;
	position: absolute;
	background-color: var(--lightBlue);
	top: 25%;
	left: 50%;
	padding: 3rem;
`;

export default HomeForUs;
