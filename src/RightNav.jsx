import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SiHomebridge } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { IoIosLogIn } from 'react-icons/io';
import { SiGnuprivacyguard } from 'react-icons/si';




const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ( open ) => {

  return (
    <Ul className="space-y-5 text-white text-xl font-bold flex justify-center  " open={open.open}>
       <div className="font-bold text-gray-500 text-xl">
              {open.name ? `Welcome- ${open.name}` : "PLEASE LOGIN"}
            </div>
      <div className="ml-10 ">
        <Link to="/"><SiHomebridge />  HOME</Link>
        <Link to="/Signup"><SiGnuprivacyguard /> SIGNIN</Link>
        <Link to="/Login"><IoIosLogIn /> LOGIN</Link>
        <Link to="/Profile"><CgProfile /> PROFILE</Link>
   
      </div>

    </Ul>
  )
}

export default RightNav;