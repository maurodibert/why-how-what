import React from 'react';
import styled from 'styled-components';
import { FullPageContainer, FlexRow, FlexColumn } from '../styles/Containers';

const HowWeDo = () => {
	return (
		<FullPageContainer>
			<h1>Cómo logramos esto?</h1>
			<FlexRow>
				<ExactaFundamental />
			</FlexRow>
		</FullPageContainer>
	);
};

const ExactaFundamental = () => {
	return (
		<StyledFlexColumn>
			<h3>Planificación</h3>
			<p>
				Construimos un sistema que nos permite crear a la talla de cada usuario, dividiéndolo en unidades
				mínimas manejables, previsibles y mesurables, para ejecutar un proyecto de principio a fin pero diseñado
				de fin a principio.
			</p>
		</StyledFlexColumn>
	);
};

const StyledFlexColumn = styled(FlexColumn)`
	width: 20rem;
`;
export default HowWeDo;
