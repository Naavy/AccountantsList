import { theme } from "../styles/theme";
import styled from "styled-components";

export const Button = styled.button`
    border-radius: 8px;
    background-color: ${theme.blue50};
    border: none;
    color: ${theme.blue600};
    padding: 8px 16px;
    cursor: pointer;
    width: fit-content;
`;

export const Card = styled.div`
    text-align: left;
    width: 300px;
    margin: 0 24px 24px;
    border-radius: 16px;
    background-color: ${theme.white};
    border: 1px solid ${theme.grey200};
    padding: 24px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;