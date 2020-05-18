import React from 'react';
import { Link } from 'react-router-dom';

import FullPageContainer from '../styles/Containers';
import { FlexRow } from '../styles/Containers';
import { StyledButton } from '../styles/Buttons';
import { StyledLi, StyledUl } from '../styles/Lists';

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
		after: { transition: { staggerChildren: 3 } }
	};

	const itemVariants = {
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
			<div>
				<h2>Para nosotros un hogar es</h2>
				<FlexRow>
					<StyledUl variants={containerVariants} initial={'before'} animate={'after'}>
						{list.map((item, index) => {
							return (
								<StyledLi variants={itemVariants} key={index}>
									{item.regular} <b>{item.bold}</b>
								</StyledLi>
							);
						})}
					</StyledUl>
				</FlexRow>
				<Link to="/how-we-do">
					<StyledButton>Continuar</StyledButton>
				</Link>
			</div>
		</FullPageContainer>
	);
};

export default HomeForUs;
