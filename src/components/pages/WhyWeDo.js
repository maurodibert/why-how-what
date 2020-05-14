import React from 'react';
import { Link } from 'react-router-dom';

import FullPageContainer from '../styles/Containers';
import styled from 'styled-components';
import { FlexRow } from '../styles/Containers';
import { StyledButton } from '../styles/Buttons';
import { StyledLi, StyledUl } from '../styles/Lists';

const WhyWeDo = () => {
	return (
		<FullPageContainer>
			<div>
				<h2>Por qué lo hacemos?</h2>
				<FlexRow>
					<StyledUl>
						<ReStyledLi>
							porque <b>respiramos orden,</b>
						</ReStyledLi>
						<ReStyledLi>
							porque <b>vivimos diseño,</b>
						</ReStyledLi>
						<ReStyledLi>
							porque <b>nos apasiona...</b>
						</ReStyledLi>
						<ReStyledLi>
							y <b>porque podemos.</b>
						</ReStyledLi>
					</StyledUl>
				</FlexRow>
				<Link to="/how-could-I-start">
					<StyledButton>Continuá</StyledButton>
				</Link>
			</div>
		</FullPageContainer>
	);
};

const ReStyledLi = styled(StyledLi)`
	font-size: 2.2rem;
	&:last-child {
		margin-top: 5rem;
	}
`;
export default WhyWeDo;
