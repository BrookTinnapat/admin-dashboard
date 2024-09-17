import React from "react";
import UserList from "../components/UserList";

function Dashboard() {
  return (
    <div className="space-y-2 h-full">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">
          Hi, Welcome back 👋 Username
        </h2>
      </div>
      <UserList />
    </div>
  );
}

export default Dashboard;
