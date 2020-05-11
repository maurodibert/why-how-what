import styled from 'styled-components';

const StyledButton = styled.button`
	margin: 2rem 0;
	padding: 1rem 2rem;
	background-color: white;
	border: 2px solid black;
	border-radius: .3rem;
	transition: .5s ease-in-out;
	width: 11rem;

	&:hover {
		background-color: var(--custom-green);
		cursor: pointer;
		transition: .5s ease-in-out;
	}

	&:focus {
		outline-color: var(--custom-green);
		border: 2px solid darkgrey;
	}
`;

export { StyledButton };

export default StyledButton;
