import styled from 'styled-components';
import './../../App.css';

const StyledButton = styled.button`
	padding: 1rem 2rem;
	background-color: white;
	border: 2px solid black;
	border-radius: .3rem;
	transition: .5s ease-in-out;

	&:hover {
		background-color: var(--custom-green);
		cursor: pointer;
		transition: .5s ease-in-out;
	}
`;

export default StyledButton;
