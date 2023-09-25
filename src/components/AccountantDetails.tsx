import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";
import { Button } from "../styles/commonElements";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AccountantDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <>
      <Navigation />
      <DetailsContainer>
        <p>Id księgowego: {id}</p>
        <Button onClick={() => navigate("/ksiegowi")}>Powrót</Button>
      </DetailsContainer>
    </>
  );
};

export default AccountantDetails;
