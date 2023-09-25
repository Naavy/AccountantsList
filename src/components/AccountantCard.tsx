import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AccountantType } from "../types/AccountantType";
import { Button, Card } from "../styles/commonElements";
import { theme } from "../styles/theme";

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  border-radius: 8px;
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;

const NameHeader = styled.div`
  text-align: left;
`;

const YourAccountant = styled.p`
  color: ${theme.grey800};
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

const AccountantName = styled.p`
  color: ${theme.black};
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin: 0;
`;

const InfoHeader = styled.p`
  color: ${theme.grey800};
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  margin-top: 24px;
`;

const Email = styled.p`
  color: ${theme.black};
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  margin: 0;
`;

const Info = styled.div`
  color: ${theme.black};
  font-size: 16px;
  line-height: 24px;
  margin: 0;

  span {
    font-size: 12px;
  }
`;

const ButtonAccountant = styled(Button)`
  margin-top: 24px;
`;

const AccountantCard = ({ accountant }: { accountant: AccountantType }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Header>
        <Photo src={accountant.picture.medium} />
        <NameHeader>
          <YourAccountant>Twoja księgowa</YourAccountant>
          <AccountantName>
            {accountant.name.first} {accountant.name.last}
          </AccountantName>
        </NameHeader>
      </Header>
      <InfoHeader>E-mail</InfoHeader>
      <Email>{accountant.email}</Email>
      <InfoHeader>Telefon</InfoHeader>
      <Info>{accountant.cell}</Info>
      <InfoHeader>Średnia cena netto usługi / m-c</InfoHeader>
      <Info>
        350,00 <span>PLN</span>
      </Info>
      <ButtonAccountant onClick={() => navigate(`${accountant.login.uuid}`)}>
        Dowiedz się więcej
      </ButtonAccountant>
    </Card>
  );
};

export default AccountantCard;
