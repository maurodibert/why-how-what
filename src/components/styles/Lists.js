import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledLi = styled(motion.li)`
	list-style: none;
	margin: 1rem 0;
`;

const StyledUl = styled(motion.ul)`
	padding: 0;
	margin: 0;
`;

export { StyledLi, StyledUl };
export default StyledUl;
