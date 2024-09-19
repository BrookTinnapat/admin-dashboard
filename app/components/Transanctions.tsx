import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useState } from "react";

type Transaction = {
  customer: string;
  email: string;
  type: string;
  status: string;
  date: string;
  amount: string;
};

type Sale = {
  avatar: string;
  avatarFallback: string;
  name: string;
  email: string;
  amount: string;
};

interface TransactionsProps {
  transactions: Transaction[];
  recentSales: Sale[];
}

function Transanctions({ transactions, recentSales }: TransactionsProps) {
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Card className="xl:col-span-2">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Transactions</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden xl:table-column">Type</TableHead>
                <TableHead className="hidden xl:table-column">Status</TableHead>
                <TableHead className="hidden xl:table-column">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="font-medium">{transaction.customer}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {transaction.email}
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    {transaction.type}
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs">{transaction.status}</Badge>
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
          {recentSales.map((sale, index) => (
            <div key={index} className="flex items-center py-2 gap-2">
              <Avatar>
                <AvatarImage src={sale.avatar} alt={sale.name} />
                <AvatarFallback>{sale.avatarFallback}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">{sale.name}</p>
                <p className="text-sm text-muted-foreground">{sale.email}</p>
              </div>
              <div className="ml-auto font-medium">{sale.amount}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Transanctions;
