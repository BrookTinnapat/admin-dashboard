"use client";

import { useEffect, useState } from "react";
import { Activity, DollarSign, Users, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarGraph } from "../components/charts/BarGraph";

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
          <h1 className="font-bold text-xl">Welcome Back, Username</h1>
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
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Transactions</CardTitle>
                </div>
                <input
                  className="ml-auto p-2 bg-slate-600 rounded-sm"
                  type="text"
                  placeholder="Search name here..."
                />
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden xl:table-column">
                        Type
                      </TableHead>
                      <TableHead className="hidden xl:table-column">
                        Status
                      </TableHead>
                      <TableHead className="hidden xl:table-column">
                        Date
                      </TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.transactions.map((transaction, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="font-medium">
                            {transaction.customer}
                          </div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {transaction.email}
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          {transaction.type}
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Badge className="text-xs">
                            {transaction.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          {transaction.date}
                        </TableCell>
                        <TableCell className="text-right">
                          {transaction.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {data.recentSales.map((sale, index) => (
                  <div key={index} className="flex items-center">
                    <Avatar>
                      <AvatarImage src={sale.avatar} alt={sale.name} />
                      <AvatarFallback>{sale.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">
                        {sale.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {sale.email}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">{sale.amount}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <BarGraph />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
