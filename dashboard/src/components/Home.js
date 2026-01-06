import React from "react";
import Menu from "./Menu";

import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="dashboard-wrapper">
      <Menu />
      
        <div className="dashboard-content">
          <Dashboard />
        </div>
      </div>
  
  );
};

export default Home;
