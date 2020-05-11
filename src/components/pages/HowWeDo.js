import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FullPageContainer, FlexRow, FlexColumn } from '../styles/Containers';
import StyledButton from '../styles/Buttons';

const HowWeDo = () => {
	return (
		<FullPageContainer>
			<FlexColumn>
				<h1>Cómo logramos esto?</h1>
				<FlexRow>
					<ExactaFundamental />
				</FlexRow>
				<StyledButton>Continuar</StyledButton>
			</FlexColumn>
		</FullPageContainer>
	);
};

const ExactaFundamental = () => {
	const fundamentalsList = [
		{
			url: '/planificacion',
			title: 'Planificación',
			paragraph:
				'Construimos un sistema que nos permite crear a la talla de cada usuario, dividiéndolo en unidades mínimas manejables, previsibles y mesurables, para ejecutar un proyecto de principio a fin pero diseñado de fin a principio.'
		},
		{
			url: '/diseño',
			title: 'Diseño',
			paragraph:
				'Desde la escucha atenta con el usuario, compartiendo lo que imagina como ideal y en un proceso de interacción, juego y exploración, plasmamos modelos totalmente immersivos, para que pueda previsualizar el proyecto que desea.'
		},
		{
			url: '/sistema-de-trabajo',
			title: 'Sistema de trabajo',
			paragraph:
				'Mediante la utilización de metodologías ágiles y tecnología aplicada a la gestión y comunicación, consolidamos grupos de trabajo eficaces, confiables y que disfrutan de crear.'
		}
	];

	return fundamentalsList.map((fundamental, index) => {
		return (
			<StyledFlexColumn key={index}>
				<div>
					<Link to={fundamental.url}>
						<h3>{fundamental.title}</h3>
					</Link>
					<StyledP>{fundamental.paragraph}</StyledP>
				</div>
			</StyledFlexColumn>
		);
	});
};

const StyledP = styled.p`margin: 1rem 1rem 2rem 0;`;

const StyledFlexColumn = styled(FlexColumn)`
	justify-content: space-between;
	width: 20rem;
	margin: 0 1rem 0 0;
`;
export default HowWeDo;
