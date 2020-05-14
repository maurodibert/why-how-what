import React from 'react';
import { FullPageContainer } from '../styles/Containers';
import ExactaLogo from '../../assets/exacta-logo.png';
import { FlexRow } from '../styles/Containers';
import styled from 'styled-components';

const TradeMark = () => {
	return (
		<FullPageContainer>
			<FlexRow>
				<StyledImage src={ExactaLogo} alt="Exacta Logotipo" />
				<StyledH4>exactaconstrucciones@gmail.com</StyledH4>
			</FlexRow>
		</FullPageContainer>
	);
};

const StyledH4 = styled.h4`
	padding: 0 2rem;
	margin-top: 2.1rem;
`;
const StyledImage = styled.img`height: 7rem;`;
export default TradeMark;
