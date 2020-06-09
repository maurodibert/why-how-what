import React from 'react';
import styled from 'styled-components';
import MdArrowForward from 'react-ionicons/lib/MdArrowForward';
import './../../App.css';
import { motion } from 'framer-motion';

const arrowVariants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		x: 10,
		transition: { yoyo: Infinity, duration: 0.6 }
	}
};

const BasicForm = ({ handleChange, handleSubmit }) => {
	return (
		<StyledForm onSubmit={handleSubmit}>
			<label style={{ display: 'flex' }}>
				<StyledInput type="text" onChange={handleChange} placeholder="Un hogar para mí es..." />
				<StyledSubmit type="submit">
					<AnimatedIcon variants={arrowVariants} animate="visible">
						<SyledIcon />
					</AnimatedIcon>
				</StyledSubmit>
			</label>
		</StyledForm>
	);
};

const StyledSubmit = styled.button`
	padding: 0 2rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
	&:focus {
		outline: none;
		border: none;
	}
`;

const AnimatedIcon = styled(motion.div)``;

const SyledIcon = styled(MdArrowForward)`
	transition: ease-in-out 0.5s;
	&:hover {
		fill: var(--red);
		transition: ease-in-out 0.5s;
	}
`;

const StyledInput = styled.input`
	font-family: 'Playfair Display', serif;
	font-size: 1.4rem;
	padding: 1rem 2rem;
	border: none;

	&:focus {
		outline: none;
		border: none;
	}
`;

const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: row;
	border-bottom: 1px black;
`;

export default BasicForm;
