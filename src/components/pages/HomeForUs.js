import React from 'react';
import { Link } from 'react-router-dom';

import FullPageContainer from '../styles/Containers';
import styled from 'styled-components';
import { FlexRow } from '../styles/Containers';
import { StyledButton } from '../styles/Buttons';
import { StyledLi, StyledUl } from '../styles/Lists';

const HomeForUs = () => {
	const list = [
		{ regular: 'Un lugar donde pueda descansar.', bold: 'Una pausa' },
		{ regular: 'Un lugar donde mi familia se sienta protegida.', bold: 'Un espacio seguro' },
		{ regular: 'Un lugar que no te consuma sino provea.', bold: 'Un ambiente sostenible' },
		{ regular: 'Un lugar del que no te quieras ir.', bold: 'Una zona de placer' },
		{ regular: 'Un lugar que haga por nosotros.', bold: 'Un organismo inteligente' }
	];

	return (
		<FullPageContainer>
			<div>
				<h2>Para nosotros un hogar es</h2>
				<FlexRow>
					<StyledUl>
						{list.map((item, index) => {
							return (
								<StyledLi key={index}>
									{item['regular']} <b>{item['bold']}</b>
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
