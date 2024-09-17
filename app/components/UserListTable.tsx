import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Editor",
  },
];

function UserListTable() {
  return (
    <Card className="mx-auto max-w-2xl ">
      <CardHeader>
        <CardTitle className="text-xl font-bold">User List</CardTitle>
      </CardHeader>

      <CardContent>
        <input
          type="text"
          placeholder="Search name..."
          className="mb-4 w-full p-2 bg-slate-800 rounded-md"
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4">Name</TableHead>
              <TableHead className="w-1/4">Email</TableHead>
              <TableHead className="w-1/4">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default UserListTable;
