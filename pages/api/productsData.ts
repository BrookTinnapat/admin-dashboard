import { NextApiRequest, NextApiResponse } from "next";

interface ProductsData {
  id: number;
  name: string;
  status: string;
  price: number;
  totalSales: number;
  createdAt: string;
  imageUrl: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: ProductsData[] = [
    {
      id: 1,
      name: "Laser Lemonade Machine",
      status: "Draft",
      price: 499.99,
      totalSales: 25,
      createdAt: "2023-07-12 10:42 AM",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Hypernova Headphones",
      status: "Active",
      price: 129.99,
      totalSales: 100,
      createdAt: "2023-10-18 03:21 PM",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      name: "AeroGlow Desk Lamp",
      status: "Active",
      price: 39.99,
      totalSales: 50,
      createdAt: "2023-11-29 08:15 AM",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      name: "iPhone 15 Pro",
      status: "Active",
      price: 999.99,
      totalSales: 150,
      createdAt: "2024-03-15 12:00 PM",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 5,
      name: "AirPods Pro",
      status: "Active",
      price: 249.99,
      totalSales: 200,
      createdAt: "2024-04-10 11:00 AM",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Smartwatch X1",
      status: "Active",
      price: 199.99,
      totalSales: 75,
      createdAt: "2024-02-22 02:30 PM",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 7,
      name: "Portable Charger 10000mAh",
      status: "Draft",
      price: 29.99,
      totalSales: 10,
      createdAt: "2024-01-05 09:45 AM",
      imageUrl: "/placeholder.svg",
    },
  ];

  res.status(200).json(data);
}
