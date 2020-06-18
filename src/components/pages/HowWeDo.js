import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FullPageContainer } from '../styles/Containers';
import { motion } from 'framer-motion';

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
};

const HowWeDo = () => {
	const fullPageVariants = {
		hidden: {},
		visible: {},
		exit: {}
	};

	const animatedH1TitleVariants = {
		hidden: {
			y: '100vh',
			rotate: '-90deg'
		},
		visible: {
			y: 0,
			rotate: '-90deg',
			transition: {
				duration: 3,
				ease: [ 0, 0.92, 0.3, 1.7 ]
			}
		},
		exit: {}
	};

	return (
		<FullPageContainer variants={fullPageVariants} initial="hidden" animate="visible" exit="exit">
			<AnimatedH1Title variants={animatedH1TitleVariants}>
				Cómo <br /> lo logramos?
			</AnimatedH1Title>
			<SubTitleDiv />
		</FullPageContainer>
	);
};

// Home Styles in order of apparition
// const MainTitleDiv = styled(motion.div)`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-end;
// `;
const SubTitleDiv = styled(motion.div)`

`;

const AnimatedH1Title = styled(motion.h1)`
	line-height: 0.9;
	transform: rotate(-90deg);
`;

export default HowWeDo;
