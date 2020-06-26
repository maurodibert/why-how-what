import React from 'react';
import styled from 'styled-components';
import './../../App.css';
import { motion } from 'framer-motion';

const GridImage = ({ column, row, img }) => {

  // Animation
  const itemVariants = {
    hover: {
      filter: 'grayscale(100%)',
    },
    transition: { duration: 2 }

  }
  return <Item variants={itemVariants} whileHover='hover' column={column} row={row} img={img}></Item>
}

const Item = styled(motion.div)`
	grid-column: ${props => props.column};
	grid-row: ${props => props.row};
	display: flex;
	background:  url(${props => props.img});
  background-size: contain;
  &:hover{
  cursor: pointer;
  }
`;

export default GridImage;