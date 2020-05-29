import React from 'react';
import styled from 'styled-components';
import MdHome from 'react-ionicons/lib/MdHome';
import './../../App.css';

const BasicForm = ({ handleChange, handleSubmit }) => {
	return (
		<StyledForm onSubmit={handleSubmit}>
			<label style={{ display: 'flex' }}>
				<StyledInput type="text" onChange={handleChange} placeholder="Un hogar para mí es..." />
				<StyledSubmit type="submit">
					<SyledIcon />
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

const SyledIcon = styled(MdHome)`
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
	border-bottom: 1px dashed black;

	&:focus {
		outline: none;
		border: none;
		border-bottom: 1px dashed black;
	}
`;

const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: row;
`;

export default BasicForm;
