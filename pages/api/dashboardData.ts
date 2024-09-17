import { NextApiRequest, NextApiResponse } from "next";

interface Transaction {
  customer: string;
  email: string;
  type: string;
  status: string;
  date: string;
  amount: string;
}

interface RecentSale {
  name: string;
  email: string;
  amount: string;
  avatar: string;
  avatarFallback: string;
}

interface DashboardData {
  totalRevenue: string;
  subscriptions: string;
  sales: string;
  activeNow: string;
  transactions: Transaction[];
  recentSales: RecentSale[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: DashboardData = {
    totalRevenue: "$45,231.89",
    subscriptions: "+2350",
    sales: "+12,234",
    activeNow: "+573",
    transactions: [
      {
        customer: "Liam Johnson",
        email: "liam@example.com",
        type: "Sale",
        status: "Approved",
        date: "2023-06-23",
        amount: "$250.00",
      },
      {
        customer: "Olivia Smith",
        email: "olivia@example.com",
        type: "Refund",
        status: "Declined",
        date: "2023-06-24",
        amount: "$150.00",
      },
      {
        customer: "Noah Williams",
        email: "noah@example.com",
        type: "Subscription",
        status: "Approved",
        date: "2023-06-25",
        amount: "$350.00",
      },
      {
        customer: "Emma Brown",
        email: "emma@example.com",
        type: "Sale",
        status: "Approved",
        date: "2023-06-26",
        amount: "$450.00",
      },
      {
        customer: "Liam Johnson",
        email: "liam@example.com",
        type: "Sale",
        status: "Approved",
        date: "2023-06-27",
        amount: "$550.00",
      },
    ],
    recentSales: [
      {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        amount: "$1,999.00",
        avatar: "/avatars/01.png",
        avatarFallback: "OM",
      },
      {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        amount: "$39.00",
        avatar: "/avatars/02.png",
        avatarFallback: "JL",
      },
      {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        amount: "$299.00",
        avatar: "/avatars/03.png",
        avatarFallback: "IN",
      },
      {
        name: "William Kim",
        email: "will@email.com",
        amount: "$99.00",
        avatar: "/avatars/04.png",
        avatarFallback: "WK",
      },
      {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        amount: "$39.00",
        avatar: "/avatars/05.png",
        avatarFallback: "SD",
      },
    ],
  };

  res.status(200).json(data);
}
