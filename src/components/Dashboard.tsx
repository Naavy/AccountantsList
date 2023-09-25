import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { Button } from "../styles/commonElements";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      <Button onClick={() => navigate("/ksiegowi")}>
        Zobacz naszych księgowych
      </Button>
    </>
  );
}

export default Dashboard;
