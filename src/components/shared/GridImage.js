import React from 'react';
import styled from 'styled-components';
import './../../App.css';
import { motion } from 'framer-motion';

const GridImage = ({ column, row }) => {

  // Animation
  const itemVariants = {
    hover: {
      filter: 'grayscale(100%)',
    },
    transition: { duration: 2 }

  }
  return <Item variants={itemVariants} whileHover='hover' column={column} row={row}></Item>
}

const Item = styled(motion.div)`
	grid-column: ${props => props.column};
	grid-row: ${props => props.row};
	display: flex;
	background:  url(exacta-vr.png);
	background-size: cover;
  &:hover{
    cursor: pointer;
  }
`

export default GridImage;