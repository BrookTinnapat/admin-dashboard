import { NextApiRequest, NextApiResponse } from "next";

interface userData {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  address: string;
  createdAt: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: userData[] = [
    {
      id: 759810123,
      name: "Liam Johnson",
      email: "liam@acme.com",
      phone: "+1 234 567 890",
      status: "Active",
      address: "1234 Main St., Anytown, CA 12345",
      createdAt: "November 23, 2023",
    },
    {
      id: 759810124,
      name: "Emma Davis",
      email: "emma@acme.com",
      phone: "+1 987 654 321",
      status: "Active",
      address: "5678 Elm St., Somewhere, NY 67890",
      createdAt: "October 10, 2023",
    },
    {
      id: 759810125,
      name: "Noah Miller",
      email: "noah@acme.com",
      phone: "+1 123 456 789",
      status: "Active",
      address: "910 Oak St., Springfield, IL 54321",
      createdAt: "September 15, 2023",
    },
    {
      id: 759810126,
      name: "Olivia Smith",
      email: "olivia@acme.com",
      phone: "+1 456 789 123",
      status: "Offline",
      address: "789 Pine St., Riverside, TX 98765",
      createdAt: "August 5, 2023",
    },
    {
      id: 759810127,
      name: "William Brown",
      email: "william@acme.com",
      phone: "+1 321 654 987",
      status: "Active",
      address: "432 Maple St., Oceanside, CA 45678",
      createdAt: "July 20, 2023",
    },
    {
      id: 759810128,
      name: "Sophia Wilson",
      email: "sophia@acme.com",
      phone: "+1 654 321 987",
      status: "Offline",
      address: "246 Cedar St., Lakeview, FL 11223",
      createdAt: "June 18, 2023",
    },
    {
      id: 759810129,
      name: "James Martinez",
      email: "james@acme.com",
      phone: "+1 789 456 123",
      status: "Offline",
      address: "135 Birch St., Willowtown, GA 33445",
      createdAt: "May 12, 2023",
    },
    {
      id: 759810130,
      name: "Isabella Taylor",
      email: "isabella@acme.com",
      phone: "+1 567 890 234",
      status: "Offline",
      address: "678 Willow St., Harmony, CO 44567",
      createdAt: "April 28, 2023",
    },
  ];

  res.status(200).json(data);
}
