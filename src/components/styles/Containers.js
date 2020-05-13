import styled from 'styled-components';

const FullPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 96vh;
`;

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
`;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export { FullPageContainer, FlexRow, FlexColumn };

export default FullPageContainer;
