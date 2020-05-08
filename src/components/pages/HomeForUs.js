import React from 'react';
import FullPageContainer from '../styles/Containers';
import styled from 'styled-components';

const HomeForUs = () => {
	const list = [
		{ regular: 'un lugar donde pueda descansar.', bold: 'Una pausa' },
		{ regular: 'un lugar donde mi familia se sienta protegida.', bold: 'Un espacio seguro' },
		{ regular: 'un lugar que no te consuma sino provea.', bold: 'Un ambiente sostenible' },
		{ regular: 'un lugar del que no te quieras ir.', bold: 'Una zona de placer' },
		{ regular: 'un lugar que haga por nosotros.', bold: 'Un organismo inteligente' }
	];

	return (
		<FullPageContainer>
			<div>
				<h1>Para nosotros un hogar es</h1>
				<StyledDiv>
					<StyledUl>
						{list.map((item, index) => {
							return (
								<StyledLi key={index}>
									{item['regular']} <b>{item['bold']}</b>
								</StyledLi>
							);
						})}
					</StyledUl>
				</StyledDiv>
			</div>
		</FullPageContainer>
	);
};

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledLi = styled.li`
	list-style: none;
	font-size: 2rem;
`;

const StyledUl = styled.ul`
	padding: 0;
	margin: 0;
`;

export default HomeForUs;
