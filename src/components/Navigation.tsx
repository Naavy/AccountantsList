import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";

const Header = styled.header`
  display: flex;
  margin: 48px 0 48px 84px;
`;

const Logo = styled.img`
  width: 146px;
  height: 38px;
  cursor: pointer;
`;

function Navigation() {
  const navigate = useNavigate();

  return (
    <Header>
      <Logo src={logo} alt="logo infakt" onClick={() => navigate("/")} />
    </Header>
  );
}

export default Navigation;
