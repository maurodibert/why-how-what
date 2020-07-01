import styled from 'styled-components';
import { motion } from 'framer-motion';

const MainPageContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
	width: 100vw;
`;

const FullPageContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
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

export { MainPageContainer, FullPageContainer, FullPageContainerFromTop, FlexRow, FlexColumn };

export default FullPageContainer;
