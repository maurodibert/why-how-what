import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FullPageContainer } from '../styles/Containers';
import { motion } from 'framer-motion';

const HowWeDo = () => {
	return (
		<FullPageContainer>
			<StyledH2 animate={{ transition: { duration: 8 } }}>Cómo logramos esto?</StyledH2>
		</FullPageContainer>
	);
};

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

const StyledH2 = styled(motion.h2)`margin-bottom: 2rem;`;

export default HowWeDo;
