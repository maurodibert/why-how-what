import React from 'react';
import { FullPageContainer } from '../styles/Containers';
import Input from '../shared/Input';
// import Next from './styles/Buttons';

const Home = (props) => {
	return (
		<FullPageContainer>
			<div>
				<h2>Qué es para vos tu hogar?</h2>
				<Input goto="/home-for-us" history={props.history} />
			</div>
		</FullPageContainer>
	);
};

export default Home;
