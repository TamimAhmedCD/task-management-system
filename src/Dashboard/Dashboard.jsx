import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      This is Dashboard
      <Outlet />
    </div>
  );
};

export default Dashboard;
