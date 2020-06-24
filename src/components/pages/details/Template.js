import React from 'react';
import { Link } from 'react-router-dom';
import { FullPageContainer, FlexColumn, FlexRow } from '../../styles/Containers';
import { StyledLi, StyledUl } from '../../styles/Lists';
import { StyledButton } from '../../styles/Buttons';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';


const Template = ({ title, list, description, image, altImage, imageSize }) => {

	// Animations
	const fullPageVariants = {
		hidden: {
			x: '50vw'
		},
		visible: {
			x: 0,
			transition: {
				duration: .5
			}
		},
		exit: {}
	};

	return (
		<FullPageContainer variants={fullPageVariants} initial="hidden" animate="visible" exit="exit">
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
		</FullPageContainer>
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
