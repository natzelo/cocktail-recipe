import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #050504;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const ClosedIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  border-style: solid;
  border-width: 0 0 1px 0;
  &:hover {
    color: #b7472a;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarMenu = styled.ul`
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px); */
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-self: auto;
  padding: 0;
  /* @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  } */
`;
