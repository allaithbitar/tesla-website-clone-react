import React, { useState } from "react";
import {
  Container,
  Menu,
  RightMenu,
  CustomMenu,
  BurgerNav,
  CustomClose,
} from "./styles";

import { useSelector } from "react-redux";
import { selectCars } from "../../features/Car/CarSlice";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <p key={index}>
              <a href="#">{car}</a>
            </p>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setOpenMenu(true)} />
      </RightMenu>

      <BurgerNav show={openMenu}>
        <CustomClose onClick={() => setOpenMenu(false)} />
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;
