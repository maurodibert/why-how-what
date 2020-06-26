import React from 'react';
import styled from 'styled-components';
import './../../App.css';
import { motion } from 'framer-motion';

const GridImage = ({ id, column, row, img, setIsVisible }) => {
  // Animation
  const itemVariants = {
    hover: {
      filter: 'grayscale(100%)',
      transition: { duration: .3 }
    },


  }
  return (
    <Item variants={itemVariants}
      positionTransition
      onClick={() => {
        setIsVisible(id)
      }}
      whileHover='hover'
      column={column}
      row={row}
      img={img} />
  )
}

const Item = styled(motion.div)`
	grid-column: ${props => props.column};
	grid-row: ${props => props.row};
	display: flex;
	background:  url(${props => props.img});
  background-size: cover;
  &:hover{
  cursor: pointer;
  }
`;

export default GridImage;