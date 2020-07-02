import React from 'react';
import styled from 'styled-components';
import './../../App.css';
import { motion } from 'framer-motion';

const GridImage = ({ id, column, row, img, itemsState }) => {
  // Animation
  const itemVariants = {
    visible: {
      filter: 'brightness(1.5) saturate(0.5) contrast(0.9) grayscale(100%)'
    },
    hover: {
      filter: 'brightness(1.2) saturate(0.8) contrast(1) grayscale(0%)',
      transition: { duration: .3 }
    },

    //  brightness(1.2) saturate(0.20) grayscale(100%)


  }
  return (
    <Item variants={itemVariants}
      positionTransition
      onClick={() => {
        return itemsState(id);
      }}
      animate='visible'
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
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--red);
    opacity: 1;
    z-index: 1;
    mix-blend-mode: soft-light;
  }
  &:hover{
  cursor: pointer;
  }
`;

export default GridImage;