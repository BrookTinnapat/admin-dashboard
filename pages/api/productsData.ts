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
      createdAt: "2023-07-12T10:42:00Z",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Hypernova Headphones",
      status: "Active",
      price: 129.99,
      totalSales: 100,
      createdAt: "2023-10-18T15:21:00Z",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      name: "AeroGlow Desk Lamp",
      status: "Active",
      price: 39.99,
      totalSales: 50,
      createdAt: "2023-11-29T08:15:00Z",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      name: "iPhone 14 Pro",
      status: "Active",
      price: 999.99,
      totalSales: 500,
      createdAt: "2024-01-15T10:00:00Z",
      imageUrl: "/iphone-14-pro.svg",
    },
    {
      id: 5,
      name: "AirPods Pro 2",
      status: "Active",
      price: 249.99,
      totalSales: 300,
      createdAt: "2024-02-10T11:30:00Z",
      imageUrl: "/airpods-pro-2.svg",
    },
    {
      id: 6,
      name: "MacBook Pro 16",
      status: "Active",
      price: 2399.99,
      totalSales: 150,
      createdAt: "2024-03-01T09:00:00Z",
      imageUrl: "/macbook-pro-16.svg",
    },
    {
      id: 7,
      name: "Apple Watch Ultra",
      status: "Draft",
      price: 799.99,
      totalSales: 50,
      createdAt: "2024-04-20T12:00:00Z",
      imageUrl: "/apple-watch-ultra.svg",
    },
    {
      id: 8,
      name: "iPad Pro 12.9",
      status: "Active",
      price: 1199.99,
      totalSales: 200,
      createdAt: "2024-05-15T14:45:00Z",
      imageUrl: "/ipad-pro-12.9.svg",
    },
    {
      id: 9,
      name: "AirTag",
      status: "Active",
      price: 29.99,
      totalSales: 700,
      createdAt: "2024-06-10T10:30:00Z",
      imageUrl: "/airtag.svg",
    },
    {
      id: 10,
      name: "HomePod Mini",
      status: "Archived",
      price: 99.99,
      totalSales: 400,
      createdAt: "2024-07-22T11:00:00Z",
      imageUrl: "/homepod-mini.svg",
    },
  ];

  res.status(200).json(data);
}
