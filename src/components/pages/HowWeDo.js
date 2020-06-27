import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FullPageContainer } from '../styles/Containers';
import { motion, AnimatePresence } from 'framer-motion';
import MdArrowForward from 'react-ionicons/lib/MdArrowForward';


const HowWeDo = () => {
	const [expanded, setExpanded] = useState();
	const rulesList = [
		{
			url: '/planificacion',
			title: 'planificación',
			functionTitle: 'planification',
			description:
				'Construimos un sistema que nos permite crear a la talla de cada usuario, dividiéndolo en unidades mínimas manejables, previsibles y mesurables, para ejecutar un proyecto de principio a fin pero diseñado de fin a principio.'
		},
		{
			url: '/diseño',
			title: 'diseño',
			functionTitle: 'design',
			description:
				'Desde la escucha atenta con el usuario, compartiendo lo que imagina como ideal y en un proceso de interacción, juego y exploración, plasmamos modelos totalmente immersivos, para que pueda previsualizar el proyecto que desea.'
		},
		{
			url: '/sistema',
			title: 'sistema',
			functionTitle: 'system',
			description:
				'Mediante la utilización de metodologías ágiles y tecnología aplicada a la gestión y comunicación, consolidamos grupos de trabajo eficaces, confiables y que disfrutan de crear.'
		}
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

	const titleVariants = {
		hidden: {
			y: '100vh',
			rotate: '180deg'
		},
		visible: {
			y: 0,
			rotate: '180deg',

			transition: {
				ease: [0, .55, .22, 1],
				duration: 1.5
			}
		},
		exit: {}
	};

	const rulesContainerVariants = {
		hidden: {
			y: '100vh',

		},
		visible: {
			y: 0,
			transition: {
				ease: [0, .55, .22, 1],
				duration: 1.5
			}
		},
		exit: {
		}
	}

	const ease = {
		ease: "easeInOut",
		duration: 0.5
	}


	const individualRuleContainerVariants = {
		hidden: {},
		visible: {},
		exit: {}
	}

	const ruleVariants = {
		hidden: {
		},
		visible: {
			transition: { ease: 'backInOut', duration: 2 }
		},
		exit: {},
		hover: {
			x: 20,
			transition: { duration: .5 }
		}
	}

	const descriptionContainerVariants = {
		hidden: {
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 2
			}
		},
	}

	const descriptionVariants = {
		hidden: {
			x: -200,
		},
		visible: {
			x: 0,
			transition: { duration: 1 }
		},
		exit: {
		},
	}


	const arrowDownVariants = {
		hidden: {
			x: -10,
			opacity: 0
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: { yoyo: Infinity, duration: 0.6, delay: 1 }
		},
	};

	// Components
	const Accordion = ({ rule, i, expanded, setExpanded }) => {
		const isOpen = i === expanded;

		return (
			<IndividualRuleContainer variants={individualRuleContainerVariants} initial="hidden" animate="visible" exit="exit">
				<Rule
					variants={ruleVariants}
					whileHover={isOpen ? "visible" : "hover"}
					onClick={() => {
						setExpanded(isOpen ? false : i);
					}
					}>{rule.title}
				</Rule>
				<AnimatePresence>
					{isOpen && (
						<DescriptionContainer variants={descriptionContainerVariants} >
							<Description variants={descriptionVariants} >
								{rule.description}
							</Description>
							<ArrowDownContainer variants={arrowDownVariants}>
								<ArrowLink to="/details">
									<ArrowDown
										onClick={() => {
										}} />
								</ArrowLink>
							</ArrowDownContainer>
						</DescriptionContainer>
					)}
				</AnimatePresence>
			</IndividualRuleContainer>
		)
	}

	return (
		<FullPageContainer variants={fullPageVariants} initial="hidden" animate="visible" exit="exit">
			<MainTitleContainer >
				<Title variants={titleVariants}>
					Cómo <br /> lo logramos?
				</Title>
				<RulesContainer variants={rulesContainerVariants} positionTransition={ease}>
					{rulesList.map((rule, i) => {
						return <Accordion rule={rule} i={i} expanded={expanded} setExpanded={setExpanded} />
					}
					)}
				</RulesContainer>
			</MainTitleContainer>
		</FullPageContainer>
	);
};

const MainTitleContainer = styled(motion.div)`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
`;

const Title = styled(motion.h1)`
	line-height: 0.9;
	writing-mode: vertical-rl;
	margin: 0;
	margin-right: 2rem;
`;

const RulesContainer = styled(motion.div)`
	width: 30rem;
`;

const IndividualRuleContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

const Rule = styled(motion.h1)`
	font-family: 'Lobster Two', cursive;
	font-weight: bold;
	color: var(--red);
	line-height: 1;
	margin: 0;
	&:hover {
		cursor: pointer;
	}
`;

const DescriptionContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow: hidden;
`
const Description = styled(motion.p)`
	width: 38rem;
`;

const ArrowDownContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-self: flex-end;
	&:hover {
		cursor: pointer;
	}
`;

const ArrowDown = styled(MdArrowForward)`
	font-size: 2.6rem;
`;

const ArrowLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-self: flex-end;
`;

export default HowWeDo;
