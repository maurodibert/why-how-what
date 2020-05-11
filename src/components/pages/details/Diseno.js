import React from 'react';
import { FullPageContainer, FlexColumn, FlexRow } from '../../styles/Containers';
import { StyledLi, StyledUl } from '../../styles/Lists';

const Diseno = (props) => {
	const list = [
		{
			id: 1,
			bold: 'Exacta PZ',
			description: 'jugando, el usuario con sus propias manos diseña el hogar que desea.'
		},
		{ id: 2, bold: 'Exacta VR', description: 'realidad y recursos ya no son una limitación para crear.' },
		{ id: 3, bold: 'Exacta QA', description: 'psicología al servicio del diseño y la construcción.' },
		{ id: 4, bold: 'Exacta DOM', description: 'hogares como organismos independientes y automatizados.' },
		{ id: 5, bold: 'Exacta PR', description: ' experiencia de usuario aplicado al cliente interno y los sistemas.' }
	];
	return (
		<FullPageContainer>
			<FlexRow>
				<FlexColumn>Imagen</FlexColumn>
				<FlexColumn>
					<StyledUl>
						{list.map((item) => {
							return (
								<StyledLi key={item.id}>
									<b>{item.bold}</b>
									{item.description}
								</StyledLi>
							);
						})}
					</StyledUl>
				</FlexColumn>
				<FlexColumn />
			</FlexRow>
		</FullPageContainer>
	);
};

export default Diseno;
