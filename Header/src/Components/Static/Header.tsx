import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="bg-[blue] flex justify-center h-20">
        <div className="w-[90%] text-white flex justify-between items-center h-[100%] ">
          <Logo>iModule Federation</Logo>

          <div className="hidden md:flex">
            <Nav to="/">Data Fetching</Nav>
            <Nav to="/todo">Todo</Nav>
            <Nav to="/state-management">State Management</Nav>
          </div>

          <div className="text-white text-[30px] md:hidden cursor-pointer" onClick={onToggle}>
            {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>

      <div
        className={
          toggle
            ? "bg-purple-500 text-white fixed w-[70%] pl-4 top-0 mt-20 duration-300 transition-all z-[-2] md:hidden "
            : "bg-purple-500 text-white fixed w-[70%] pl-4 top-[-100%] mt-20 duration-300 transition-all  z-[-2] md:hidden"
        }
      >
        <div>Data Fetching</div>
        <div>State Management</div>
        <div>Todo</div>
      </div>
    </div>
  );
};

export default Header;

const Nav = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 0 5px;
  font-weight: bold;
  transition: all 300ms;

  :hover {
    cursor: pointer;
    transform: translate(0px, -5px);
  }
`;

const NavHolder = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 30px;
`;

const Main = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid silver;
  background-color: #0258a3;
  color: white;
`;
