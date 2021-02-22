import React from "react";
import {
  ClosedIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/search">Search for Cocktail Reciepes</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
