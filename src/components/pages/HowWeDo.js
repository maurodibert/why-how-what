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

	const fullPageVariants = {
		hidden: {},
		visible: {},
		exit: {}
	};

	const TitleVariants = {
		hidden: {
			y: '100vh',
			rotate: '180deg'
		},
		visible: {
			y: 0,
			rotate: '180deg',

			transition: {
				ease: 'easeOut',
				duration: 1
			}
		},
		exit: {}
	};

	const Accordion = ({ rule, i, expanded, setExpanded }) => {
		const isOpen = i === expanded;

		return (
			<IndividualRuleContainer>
				<Rule
					onClick={() => {
						setExpanded(isOpen ? false : i);
					}
					}>{rule.title}
				</Rule>
				<AnimatePresence>
					{isOpen && (
						<DescriptionContainer>
							<Description>
								{rule.description}
							</Description>
							<ArrowLink to="/how-we-do">
								<ArrowDown />
							</ArrowLink>
							<DescriptionBottomLine />
						</DescriptionContainer>
					)}
				</AnimatePresence>
			</IndividualRuleContainer>
		)
	}

	return (
		<FullPageContainer variants={fullPageVariants} initial="hidden" animate="visible" exit="exit">
			<MainTitleContainer>
				<Title variants={TitleVariants}>
					Cómo <br /> lo logramos?
				</Title>
				<RulesContainer>
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
	line-height: normal;
	margin: 0;
	&:hover{
		cursor: pointer;
	}
`;

const DescriptionContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`
const Description = styled(motion.p)``;

const DescriptionBottomLine = styled(motion.div)`
	border-bottom: 1.5px solid;
	width: 30rem;
	margin: 1rem 0;
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
