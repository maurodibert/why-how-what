import React from 'react';
import { Link } from 'react-router-dom';

import FullPageContainer from '../styles/Containers';
import { FlexRow } from '../styles/Containers';
import { StyledButton } from '../styles/Buttons';
import { StyledLi, StyledUl } from '../styles/Lists';

import { motion } from 'framer-motion';

const HomeForUs = () => {
	const list = [
		{ id: 1, regular: 'Un lugar donde mi familia se sienta protegida.', bold: 'Un espacio seguro' },
		{ id: 2, regular: 'Un lugar que no te consuma sino provea.', bold: 'Un ambiente sostenible' },
		{ id: 3, regular: 'Un lugar donde pueda descansar.', bold: 'Una pausa' },
		{ id: 4, regular: 'Un lugar del que no te quieras ir.', bold: 'Una zona de placer' },
		{ id: 5, regular: 'Un lugar que haga por nosotros.', bold: 'Un organismo inteligente' }
	];

	const containerVariants = {
		before: {},
		after: { transition: { staggerChildren: 7 } }
	};

	const childrenVariants = {
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

	const ulVariants = {
		before: {},
		after: { transition: { staggerChildren: 3 } }
	};

	const liVariants = {
		before: {
			y: -16 * 1.2,
			opacity: 0
		},
		after: {
			y: 0,
			opacity: 1,
			transition: { ease: 'easeInOut', duration: 2 }
		}
	};

	return (
		<FullPageContainer>
			<motion.div variants={containerVariants} initial="before" animate="after">
				<motion.h2 variants={childrenVariants}>Para nosotros un hogar es</motion.h2>
				<FlexRow>
					<StyledUl variants={childrenVariants}>
						{list.map((item, index) => {
							return (
								<StyledLi variants={liVariants} key={index}>
									{item.regular} <b>{item.bold}</b>
								</StyledLi>
							);
						})}
					</StyledUl>
				</FlexRow>
				<Link to="/how-we-do">
					<StyledButton>Continuar</StyledButton>
				</Link>
			</motion.div>
		</FullPageContainer>
	);
};

export default HomeForUs;
