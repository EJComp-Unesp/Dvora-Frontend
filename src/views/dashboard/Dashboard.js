import React from "react";
import { DashboardContainer } from "./styles/dashboard";
import Menu from "../../components/menus/Nav";
import Siderbar from "../../components/menus/Sidebar";

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <div className="navbar">
        <Menu />
      </div>
      <div className="sidebar">
        <Siderbar/>
      </div>
    </DashboardContainer>
  );
}