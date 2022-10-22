import React, { useState} from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import Hamburger from 'hamburger-react';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

    } 
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);



  return (
    <>
      <StyledBurger  open={open} onClick={() => setOpen(!open)}>
        <Hamburger />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}

export default Burger;