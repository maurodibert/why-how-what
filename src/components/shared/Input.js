import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './../../App.css';

class BasicForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	handleSubmit(e) {
		alert(this.state.value);

		e.preventDefault();
	}

	render() {
		return (
			<StyledForm onSubmit={this.handleSubmit}>
				<label>
					<StyledInput type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<StyledButton type="submit" value="continuar" />
			</StyledForm>
		);
	}
}

const StyledInput = styled.textarea`
	font-size: 1.4rem;
	padding: 1rem 2rem;
	margin: 0 2rem 1rem 0;
	width: 40rem;
	border-radius: .3rem;
	border: 2px solid black;

	&:focus {
		outline-color: var(--custom-green);
		border: 2px solid darkgrey;
	}
`;

const StyledButton = styled.input`
	padding: 1rem 2rem;
	background-color: white;
	border: 2px solid black;
	border-radius: .3rem;

	&:hover {
		background-color: var(--custom-green);
		cursor: pointer;
	}
`;

const StyledForm = styled.form`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	width: 50rem;
`;

export default BasicForm;
