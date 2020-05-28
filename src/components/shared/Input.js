import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import './../../App.css';

const BasicForm = ({ handleChange, handleSubmit }) => {
	return (
		<StyledForm onSubmit={handleSubmit}>
			<label>
				<StyledInput type="text" onChange={handleChange} placeholder="Mi hogar es..." />
			</label>
		</StyledForm>
	);
};

const StyledInput = styled.input`
	font-family: 'Playfair Display', serif;
	font-size: 1.4rem;
	padding: 1rem 2rem;
	border: none;
	border-bottom: 1px dashed black;

	&:focus {
		outline: none;
		border: none;
		border-bottom: 1px dashed black;
	}
`;

const StyledForm = styled.form`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;

export default BasicForm;
