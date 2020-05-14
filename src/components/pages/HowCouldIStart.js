import React from 'react';
import { Link } from 'react-router-dom';
import FullPageContainerFromTop from '../styles/Containers';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
// import { FlexRow } from '../styles/Containers';
import { StyledButton } from '../styles/Buttons';

const HowCouldIStart = () => {
	return (
		<StyledFullPageContainerFromTop>
			<div>
				<StyledH2>Cómo podés empezar?</StyledH2>
				<StyledH4>
					empezá creando tu hogar en un <b>tablero</b>
				</StyledH4>
				<StyledDiv>
					<ReactPlayer url="https://youtu.be/tdRpeaUfMY8" controls="true" width="54rem" height="30rem" />
				</StyledDiv>
				<Link to="/trade-mark">
					<StyledButton>Terminá</StyledButton>
				</Link>
			</div>
		</StyledFullPageContainerFromTop>
	);
};

const StyledH2 = styled.h2`margin-bottom: 0;`;
const StyledH4 = styled.h4`margin-top: 1rem;`;

const StyledFullPageContainerFromTop = styled(FullPageContainerFromTop)`overflow: hidden`;
const StyledDiv = styled.div`
	display: flex;
	align-items: flex-start;
	padding: 1rem;
	background-color: lightgray;
`;

export default HowCouldIStart;
