import React, { useState } from 'react';
import styled from 'styled-components';
import MdArrowDown from 'react-ionicons/lib/MdArrowDown';
import Item from '../shared/GridImage';
import { Link } from 'react-router-dom';
import { FullPageContainer } from '../styles/Containers';
import { motion } from 'framer-motion';


const Details = () => {
	const [itemClicked, setItemClicked] = useState(0);
	const [oneClicked, setOneClicked] = useState(false);
	const [twoClicked, setTwoClicked] = useState(false);
	const [threeClicked, setThreeClicked] = useState(false);
	const [fourClicked, setFourClicked] = useState(false);
	const [fiveClicked, setFiveClicked] = useState(false);
	const [sixClicked, setSixClicked] = useState(false);

	const noClickedYet = !(oneClicked
		|| twoClicked
		|| threeClicked
		|| fourClicked
		|| fiveClicked
		|| sixClicked);

	const itemsState = (id) => {
		setItemClicked(id);
		switch (id) {
			case 1:
				setOneClicked(true)
				break;
			case 2:
				setTwoClicked(true)
				break;
			case 3:
				setThreeClicked(true)
				break;
			case 4:
				setFourClicked(true)
				break;
			case 5:
				setFiveClicked(true)
				break;
			case 6:
				setSixClicked(true)
				break;

			default: console.log('default switch');
		}
	}

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
			descriptionOne: 'Hogares como organismos independientes y automatizados.',
			descriptionTwo: 'El tiempo como recurso invaluable; tu hogar como constante creador.'
		},
		{
			id: 4,
			title: 'Exacta GP',
			descriptionOne: 'Trabajo en equipo, primero el otro y buenas prácticas. Orden. Limpieza. Puntualidad.',
			descriptionTwo: 'Un organismo, procesos ágiles y controlados.'
		},
		{
			id: 5,
			title: 'Exacta CT',
			descriptionOne: 'Cuentas transparentes en todo momento, accesibles desde cualquier dispositivo.',
			descriptionTwo: 'Sistema semanal de reporte de procesos. Cuentas claras, siempre.'
		},
		{
			id: 6,
			title: 'Exacta PN',
			descriptionOne: 'Desde el final, deconstruimos paso a paso hasta el punto cero.',
			descriptionTwo: 'Margen de errores controlado y previsible. Inversión. Cada recurso cuenta.'
		},
	];

	// Animations
	const fullPageVariants = {
		hidden: {
			x: 2000,
		},
		visible: {
			x: 0,
			transition: { ease: 'easeInOut', duration: 1.5 }
		},
		exit: {
			y: 2000,
			transition: { ease: 'easeInOut', duration: 1.5 }

		}
	};

	const spandedVariants = {
		hidden: {
			y: 40,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
			}
		},
		exit: {
			y: -200,
			opacity: 0
		}
	}

	const ArrowAlignerVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: { duration: 1.8, delay: 2 }
		},
	};

	const arrowDownVariants = {
		hidden: {
			y: 10
		},
		visible: {
			y: 0,
			transition: { yoyo: Infinity, duration: 0.6 }
		},
	};

	// Components
	return (
		<FullPageContainer variants={fullPageVariants} initial="hidden" animate="visible" exit="exit">
			<MainContainer>
				<Item itemsState={itemsState} id={1} column={itemClicked === 1 ? 1 : 2} row={1} img='exacta-vr.jpg'></Item>
				<Item itemsState={itemsState} id={2} column={itemClicked === 2 ? 2 : 3} row={1} img='exacta-pz.jpg'></Item>
				{itemClicked !== 0 && (
					<SpandedItem variants={spandedVariants} positionTransition>
						<Title>{detailsList[itemClicked - 1].title}</Title>
						<SubTitle>{detailsList[itemClicked - 1].descriptionOne}</SubTitle>
						<SubTitle>{detailsList[itemClicked - 1].descriptionTwo}</SubTitle>
						{(oneClicked
							&& twoClicked
							&& threeClicked
							&& fourClicked
							&& fiveClicked
							&& sixClicked) && (
								<ArrowAligner variants={ArrowAlignerVariants}>
									<ArrowDownContainer
										variants={arrowDownVariants}
									>
										<ArrowLink to="/why-we-do">
											<ArrowDown />
										</ArrowLink>
									</ArrowDownContainer>
								</ArrowAligner>
							)}
					</SpandedItem>
				)}
				<Item itemsState={itemsState} id={3} column={noClickedYet ? 1 : 3} row={2} img='exacta-dom.jpg'></Item>
				<Item itemsState={itemsState} id={4} column={itemClicked === 4 ? 3 : 2} row={2} img='exacta-gp.jpg'></Item>
				<Item itemsState={itemsState} id={5} column={itemClicked === 5 ? 3 : 3} row={3} img='exacta-ct.jpg'></Item>
				<Item itemsState={itemsState} id={6} column={itemClicked === 6 ? 2 : 3} row={3} img='exacta-pn.jpg'></Item>
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

const ArrowAligner = styled(motion.div)`
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: flex-start;

`

const ArrowDownContainer = styled(motion.div)`
	grid-column: 1 / span 3;
	grid-row: 1 / span 3;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5rem;
	&:hover {
		cursor: pointer;
	}
`;

const ArrowDown = styled(MdArrowDown)`
	font-size: 2.6rem;
`;

const ArrowLink = styled(Link)`
	display: flex;
	justify-content: center;
`;

const SpandedItem = styled(motion.div)`
	grid-column: 1;
	grid-row: 2 / span 3;
	display: flex;
	flex-direction: column;
	padding: 4rem 8rem;
`;

const Title = styled(motion.h2)`
line-height: 1.2`;

const SubTitle = styled(motion.p)`
	margin: 0;
	margin-bottom: 2rem;
`

export default Details;
