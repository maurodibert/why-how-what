import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FullPageContainer } from '../styles/Containers';
import { motion, AnimatePresence } from 'framer-motion';
import MdArrowDown from 'react-ionicons/lib/MdArrowDown';


const Details = () => {
	const [expanded, setExpanded] = useState();
	const detailsList = [
		{
			key: 0,
			title: 'Exacta VR',
			descriptionOne: 'La construcción nace con vos adentro.',
			descriptionTwo: 'Experimentar distancias, perspectivas y espacios.'
		},
		{
			key: 1,
			title: 'Exacta PZ',
			descriptionOne: 'El usuario diseña con sus propias manos el hogar que desea.',
			descriptionTwo: 'Jugar, crear, sentir y reconstruir.'
		},
		{
			key: 2,
			title: 'Exacta DOM',
			descriptionOne: 'Hogares como organismos indepentientes y automatizados.',
			descriptionTwo: 'El tiempo como recurso invaluable; tu hogar como constante creador.'
		},
		{
			key: 3,
			title: 'Exacta GP',
			descriptionOne: 'Trabajo en equipo, primero el otro y buenas prácticas. Orden. Limpieza. Puntualidad.',
			descriptionTwo: 'Un organismo, procesos ágiles, medidos y controlados que crece y evoluciona; procesos donde todos ganamos.'
		},
		{
			key: 4,
			title: 'Exacta CT',
			descriptionOne: 'Cuentas transparentes en todo momento, accesibles desde cualquier dispositivo.',
			descriptionTwo: 'Sistema semanal de reporte de procesos. Cada peso a la vista de su dueño.'
		},
		{
			key: 5,
			title: 'Exacta PN',
			descriptionOne: 'Desde el final, deconstruimos paso a paso hasta el punto cero.',
			descriptionTwo: 'Margen de errores controlado y previsible. Inversión, no gasto. Cada recurso cuenta.'
		},
	];

	// Animations
	const fullPageVariants = {
		hidden: {},
		visible: {},
		exit: {
			x: '-75vw',
			transition: {
				duration: 0.5
			}
		}
	};

	// Components
	return (
		<MainContainer>
			<Item0></Item0>
			<Item8></Item8>
		</MainContainer>
	);
};

const MainContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	column-gap: 4rem;
	row-gap: 4rem;
	width: 60vw;
	height: 100vh;
	padding: 10rem;
`;

const Item0 = styled(motion.div)`
	grid-column: 1;
	grid-row: 1;
	display: flex;
	min-height: 100%;
	background:  url(exacta-vr.png) rgba(236, 30, 30, 1);
	background-size: cover;
	background-blend-mode: overlay;
	border: 3px solid black;
`

const Item8 = styled(motion.div)`
	grid-column: 2;
	grid-row: 2;
	display: flex;
	background: url(exacta-vr.png) center center/cover;
	border: 3px solid black;

`



export default Details;
