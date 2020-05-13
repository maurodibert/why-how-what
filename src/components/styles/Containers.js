import styled from 'styled-components';

const FullPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 96vh;
`;

const FullPageContainerFromTop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding-top: 20rem;
	align-items: center;
	height: 66vh;
`;

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
`;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export { FullPageContainer, FullPageContainerFromTop, FlexRow, FlexColumn };

export default FullPageContainer;
