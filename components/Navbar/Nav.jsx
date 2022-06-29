import { BiMenu, BiX } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav, NavLogo, Menu, MenuItem, MenuLink, MenuIcon } from './index';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [youtube, setYoutube] = useState([]);
  const fetchData = async () => {
    const url = 'https://620527e91aa4e5006752797b--silly-mayer-023d9b.netlify.app/.netlify/functions/Server';
    await axios
      .get(url)
      .then((response) => {
        setYoutube(response.data.cash);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavLogo to='/'>Fleurimond</NavLogo>
        <MenuIcon onClick={handleClick}>{click ? <BiX /> : <BiMenu />}</MenuIcon>

        <Menu onClick={handleClick} click={click}>
          <MenuItem>
            <MenuLink onClick={handleClick} to='/'>
              Home
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink
              onClick={handleClick}
              to={{
                pathname: '/CinematographyPage/',
                state: {
                  youtubeData: youtube,
                },
              }}
            >
              Film
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              onClick={handleClick}
              to={{
                pathname: '/PhotographyPage/',
              }}
            >
              Photos
            </MenuLink>
          </MenuItem>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;
