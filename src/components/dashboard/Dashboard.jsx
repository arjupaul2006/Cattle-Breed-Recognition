import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Status from "./Status";
import StartCard from "./StartCard";
import Browsercard from "./Browsercard";
import RecentActivity from "./RecentActivity";
import Label from "./Label";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <MainContent />
      <Status />
      <StartCard />
      <Browsercard />
      <RecentActivity />
      <Label />
    </div>
  );
};

export default Dashboard;
