import React from 'react';
import { FullPageContainer, FlexColumn, FlexRow } from '../../styles/Containers';
import { StyledLi, StyledUl } from '../../styles/Lists';
import ExactaVR from '../../../assets/exacta-vr.png';
import styled from 'styled-components';

const Diseno = (props) => {
	const list = [
		{
			id: 1,
			bold: 'exacta pz > ',
			description: 'jugando, el usuario con sus propias manos diseña el hogar que desea.'
		},
		{ id: 2, bold: 'exacta vr > ', description: 'realidad y recursos ya no son una limitación para crear.' },
		{ id: 3, bold: 'exacta qa > ', description: 'psicología al servicio del diseño y la construcción.' },
		{ id: 4, bold: 'exacta dom > ', description: 'hogares como organismos independientes y automatizados.' },
		{
			id: 5,
			bold: 'exacta pr > ',
			description: ' experiencia de usuario aplicado al cliente interno y los sistemas.'
		}
	];

	const description =
		'Nos apasiona la búsqueda estética como resultante: la belleza surge como efecto de una exploración esencial en la funcionalidad, en lograr con lo mínimo. Por eso el diseño se filtra en todos los procesos de lo que hacemos, desde una hoja de presupuesto hasta la organización de una reunión con un usuario interno.';

	return (
		<FullPageContainer>
			<StyledDiv>
				<h1>diseño</h1>
				<FlexRow>
					<StyledFlexColumn>
						<img src={ExactaVR} alt="Exacta VR" />
					</StyledFlexColumn>
					<StyledFlexColumn>
						<StyledUl>
							{list.map((item) => {
								return (
									<ReStyledLi key={item.id}>
										<b>{item.bold}</b>
										{item.description}
									</ReStyledLi>
								);
							})}
						</StyledUl>
					</StyledFlexColumn>
					<StyledFlexColumn>
						<StyledP>
							<i>{description}</i>
						</StyledP>
					</StyledFlexColumn>
				</FlexRow>
			</StyledDiv>
		</FullPageContainer>
	);
};

const StyledP = styled.p`margin-top: 0;`;
const ReStyledLi = styled(StyledLi)`
	&:first-child {
		margin-top: 0;
	}
`;
const StyledDiv = styled.div`width: 60%;`;
const StyledFlexColumn = styled(FlexColumn)`
	margin: 0 2rem;
`;

export default Diseno;
