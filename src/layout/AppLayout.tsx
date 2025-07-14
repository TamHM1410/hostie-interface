import React from "react";
import { Outlet } from "react-router";
import Header from "../components/navigation/Header";

const AppLayout = () => {
  return (
    <React.Fragment>
      {/* Header */}
      <Header />
      {/* Main content area */}
      <Outlet />
      {/* Footer can be added here if needed */}
    </React.Fragment>
  );
};

export default AppLayout;
