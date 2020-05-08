import React from 'react';
import FullPageContainer from '../styles/Containers';
import styled from 'styled-components';
import IosBugOutline from 'react-ionicons/lib/IosBugOutline';

const NotFound = () => {
	return (
		<FullPageContainer>
			<StyledDiv>
				<StyledH1>Oops!</StyledH1>
				<IosBugOutline fontSize="5.6rem" shake={true} />
			</StyledDiv>
			<StyledH3>No encontramos lo que estás buscando!</StyledH3>
		</FullPageContainer>
	);
};

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
`;
const StyledH1 = styled.h1`
	font-size: 4.6rem;
	margin: 0 2rem 0 0;
`;

const StyledH3 = styled.h3`
	margin: 0;
	font-weight: lighter;
`;

export default NotFound;
