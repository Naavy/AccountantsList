import { useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Navigation from "./Navigation";
import AccountantCardSkeleton from "./AccountantCardSkeleton";
import AccountantCard from "./AccountantCard";
import { AccountantType } from "../types/AccountantType";
import { Button } from "../styles/commonElements";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonMore = styled(Button)`
  margin: 20px 20px 40px;
`;

const AccountantsList = () => {
  const [page, setPage] = useState(1);
  const [displayedData, setDisplayedData] = useState<AccountantType[]>([]);
  const URL = `https://randomuser.me/api/?seed=abc&gender=female&page=${page}&results=4`;
  const { data, isLoading, error } = useFetch(URL);
  const { fetcher, data: newData, isLoading: newIsLoading } = useFetch();

  useEffect(() => {
    setDisplayedData(data);
  }, [data]);

  useEffect(() => {
    if (page === 1) return;
    fetcher(URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setDisplayedData([...displayedData, ...newData]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData]);

  const view = () => {
    if (isLoading) return <AccountantCardSkeleton />;
    if (error)
      return (
        <>Something went wrong. Please try refresh the page or contact us.</>
      );
    return (
      <>
        {displayedData.map((accountant) => (
          <AccountantCard accountant={accountant} key={accountant.login.uuid} />
        ))}
        {newIsLoading && <AccountantCardSkeleton />}
      </>
    );
  };

  return (
    <>
      <Navigation />
      <List>{view()}</List>
      {displayedData.length > 0 && (
        <ButtonMore onClick={() => setPage(page + 1)}>Zobacz więcej</ButtonMore>
      )}
    </>
  );
};

export default AccountantsList;
