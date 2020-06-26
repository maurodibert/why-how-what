import React, { useState } from 'react';
import styled from 'styled-components';
import MdArrowDown from 'react-ionicons/lib/MdArrowDown';
import Item from '../shared/GridImage';
import { Link } from 'react-router-dom';
import { FullPageContainer } from '../styles/Containers';
import { motion, AnimatePresence } from 'framer-motion';


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
		<FullPageContainer>
			<MainContainer>
				<Item column={1} row={1}></Item>
				<Item column={2} row={1}></Item>
				<Item column={2} row={2}></Item>
				<Item column={3} row={2}></Item>
				<Item column={2} row={3}></Item>
				<Item column={3} row={3}></Item>
			</MainContainer>
		</FullPageContainer>
	);
};

const MainContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	column-gap: 1rem;
	row-gap: 1rem;
	width: 60vw;
	height: 90vh;
	padding: 2rem 10rem;
`;

export default Details;
