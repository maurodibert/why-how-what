import React, { useState } from 'react';
import styled from 'styled-components';
import MdArrowDown from 'react-ionicons/lib/MdArrowDown';
import Item from '../shared/GridImage';
import { Link } from 'react-router-dom';
import { FullPageContainer } from '../styles/Containers';
import { motion, AnimatePresence } from 'framer-motion';


const Details = () => {
	const [isVisible, setIsVisible] = useState(null);
	const detailsList = [
		{
			id: 1,
			title: 'Exacta VR',
			descriptionOne: 'La construcción nace con vos adentro.',
			descriptionTwo: 'Experimentar distancias, perspectivas y espacios.'
		},
		{
			id: 2,
			title: 'Exacta PZ',
			descriptionOne: 'El usuario diseña con sus propias manos el hogar que desea.',
			descriptionTwo: 'Jugar, crear, sentir y reconstruir.'
		},
		{
			id: 3,
			title: 'Exacta DOM',
			descriptionOne: 'Hogares como organismos indepentientes y automatizados.',
			descriptionTwo: 'El tiempo como recurso invaluable; tu hogar como constante creador.'
		},
		{
			id: 4,
			title: 'Exacta GP',
			descriptionOne: 'Trabajo en equipo, primero el otro y buenas prácticas. Orden. Limpieza. Puntualidad.',
			descriptionTwo: 'Un organismo, procesos ágiles, medidos y controlados que crece y evoluciona; procesos donde todos ganamos.'
		},
		{
			id: 5,
			title: 'Exacta CT',
			descriptionOne: 'Cuentas transparentes en todo momento, accesibles desde cualquier dispositivo.',
			descriptionTwo: 'Sistema semanal de reporte de procesos. Cada peso a la vista de su dueño.'
		},
		{
			id: 6,
			title: 'Exacta PN',
			descriptionOne: 'Desde el final, deconstruimos paso a paso hasta el punto cero.',
			descriptionTwo: 'Margen de errores controlado y previsible. Inversión, no gasto. Cada recurso cuenta.'
		},
	];
	console.log(isVisible);

	// Animations
	const fullPageVariants = {
		hidden: {
			x: '100vw',
			transition: {
				duration: 0.5
			}
		},
		visible: {
			x: 0,
			transition: {
				duration: 1.5
			}
		},
		exit: {
			x: '100vw',
			transition: {
				duration: 0.5
			}
		}
	};

	// Components
	return (
		<FullPageContainer variants={fullPageVariants} initial="hidden" animate="visible" exit="exit">
			<MainContainer>
				<Item setIsVisible={setIsVisible} id={1} column={1} row={1} img='exacta-vr.png'></Item>
				<Item setIsVisible={setIsVisible} id={2} column={2} row={1} img='exacta-pz.png'></Item>
				{isVisible && (
					<SpandedItem>
						<Title>{detailsList[isVisible - 1].title}</Title>
						<SubTitle>{detailsList[isVisible - 1].descriptionOne}</SubTitle>
						<SubTitle>{detailsList[isVisible - 1].descriptionTwo}</SubTitle>
					</SpandedItem>
				)}
				<Item setIsVisible={setIsVisible} id={3} column={2} row={2} img='exacta-dom.png'></Item>
				<Item setIsVisible={setIsVisible} id={4} column={3} row={2} img='exacta-gp.png'></Item>
				<Item setIsVisible={setIsVisible} id={5} column={2} row={3} img='exacta-ct.png'></Item>
				<Item setIsVisible={setIsVisible} id={6} column={3} row={3} img='exacta-pn.png'></Item>
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

const SpandedItem = styled(motion.div)`
	grid-column: 1;
	grid-row: 2 / span 3;
	display: flex;
	flex-direction: column;
	padding: 4rem 8rem;
`;

const Title = styled(motion.h1)`
line-height: 1.2`;

const SubTitle = styled(motion.h4)`
	margin: 0;
	margin-bottom: 1.2rem;
`

export default Details;
