import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import AccountantsList from "./components/AccountantsList";
import AccountantDetails from "./components/AccountantDetails";
import { theme } from "./styles/theme";

const AppContainer = styled.div`
  background-color: ${theme.white};
  text-align: center;
  font-family: "Roboto-Regular";
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/ksiegowi",
    element: <AccountantsList />,
  },
  {
    path: "/ksiegowi/:id",
    element: <AccountantDetails />,
  },
]);

function App() {
  return (
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  );
}

export default App;
