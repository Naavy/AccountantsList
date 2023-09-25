import styled, { keyframes } from "styled-components";
import { Card } from "../styles/commonElements";
import { theme } from "../styles/theme";

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
}

const skeletonAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  width: 216px;
`;

const SkeletonPhoto = styled.div`
  border-radius: 8px;
  width: 64px;
  height: 64px;
  margin-right: 16px;
  background: linear-gradient(
    90deg,
    ${theme.grey100} 25%,
    ${theme.grey200} 50%,
    ${theme.grey100} 75%
  );
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s infinite;
`;

const SkeletonText = styled.div<SkeletonLoaderProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "16px"};
  margin: 2px 0;
  background: linear-gradient(
    90deg,
    ${theme.grey100} 25%,
    ${theme.grey200} 50%,
    ${theme.grey100} 75%
  );
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s infinite;
`;

const InfoSkeleton = styled.div`
  margin: 24px 0;
`;

const AccountantCardSkeleton = () => {
  return (
    <Card>
      <Header>
        <SkeletonPhoto />
        <Info>
          <SkeletonText width="50%" height="22px" />
          <SkeletonText width="70%" height="30px" />
        </Info>
      </Header>
      <InfoSkeleton>
        <SkeletonText width="20%" height="22px" />
        <SkeletonText width="60%" height="22px" />
      </InfoSkeleton>
      <InfoSkeleton>
        <SkeletonText width="30%" height="22px" />
        <SkeletonText width="40%" height="22px" />
      </InfoSkeleton>
      <InfoSkeleton>
        <SkeletonText width="70%" height="22px" />
        <SkeletonText width="30%" height="22px" />
      </InfoSkeleton>
      <InfoSkeleton>
        <SkeletonText width="40%" height="32px" />
      </InfoSkeleton>
    </Card>
  );
};

export default AccountantCardSkeleton;
