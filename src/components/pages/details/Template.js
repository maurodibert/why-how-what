import React from 'react';
import { Link } from 'react-router-dom';
import { FullPageContainerFromTop, FlexColumn, FlexRow } from '../../styles/Containers';
import { StyledLi, StyledUl } from '../../styles/Lists';
import { StyledButton } from '../../styles/Buttons';
import styled from 'styled-components';

const Template = ({ title, list, description, image, altImage, imageSize }) => {
	return (
		<FullPageContainerFromTop>
			<div>
				<h1>{title}</h1>
				<FlexRow>
					<StyledFlexColumn>
						<img src={image} width={imageSize} alt={altImage} />
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
						<Link to={'/how-we-do'}>
							<StyledButton>Volver</StyledButton>
						</Link>
					</StyledFlexColumn>
				</FlexRow>
			</div>
		</FullPageContainerFromTop>
	);
};

const StyledP = styled.p`margin-top: 0;`;
const ReStyledLi = styled(StyledLi)`
	&:first-child {
		margin-top: 0;
	}
`;
const StyledFlexColumn = styled(FlexColumn)`
	margin: 0 2rem;
	width: 20rem;
	&:first-child {
		margin: 0;
		width: 40rem;
	}
`;

export default Template;
