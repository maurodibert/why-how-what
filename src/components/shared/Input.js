import React from 'react';
import styled from 'styled-components';

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

const StyledInput = styled.input`
	font-size: 2rem;
	padding: 1rem 2rem;
	margin: 0 2rem 1rem 0;
	width: 100%;
`;

const StyledButton = styled.input`padding: 1rem 2rem;`;

const StyledForm = styled.form`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;

export default BasicForm;
