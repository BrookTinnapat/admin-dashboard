"use client";

import { useEffect, useState } from "react";
import { Activity, DollarSign, Users, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarGraph } from "../components/charts/BarGraph";
import Transanctions from "../components/Transanctions";

type Transaction = {
  customer: string;
  email: string;
  type: string;
  status: string;
  date: string;
  amount: string;
};

type Sale = {
  name: string;
  email: string;
  amount: string;
  avatar: string;
  avatarFallback: string;
};

type DashboardData = {
  totalRevenue: string;
  subscriptions: string;
  sales: string;
  activeNow: string;
  transactions: Transaction[];
  recentSales: Sale[];
};

function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/dashboardData");
      const json: DashboardData = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="space-y-2 h-full">
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <h1 className="font-bold text-xl">Welcome Back🫰, Demo User</h1>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.totalRevenue}</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.subscriptions}</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.sales}</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.activeNow}</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          <Transanctions
            transactions={data.transactions}
            recentSales={data.recentSales}
          />
          <BarGraph />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
