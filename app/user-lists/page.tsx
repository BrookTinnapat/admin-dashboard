"use client";

import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CopyIcon,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // Import Shadcn Dialog
import Spinner from "../components/Spinner";

type userData = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  address: string;
  createdAt: string;
};

function UserListsPage() {
  const [data, setData] = useState<userData[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<userData | null>(null); // State for selected user
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [isMdScreen, setIsMdScreen] = useState(false); // Track screen size
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/userData");
      const json: userData[] = await res.json();
      setData(json);
    };
    fetchData();

    // Check screen size
    const handleResize = () => {
      setIsMdScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleUserClick = (user: userData) => {
    setSelectedUser(user);
    if (isMdScreen) {
      setShowModal(true); // Show modal on small screens
    }
  };

  const searchData = data
    ? data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLocaleLowerCase())
      )
    : [];

  if (!data) return <Spinner />;
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-16 ">
        <Breadcrumb className="hidden sm:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Users List</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          {/* Header Code (omitted for brevity) */}
        </header>

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          {/* User List Section */}
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Tabs defaultValue="week">
              <TabsContent value="week">
                <Card>
                  <CardHeader className="px-7">
                    <CardTitle>Users</CardTitle>
                    <CardDescription>Recent new users.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative ml-auto flex-1 md:grow-0">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        value={searchText}
                        placeholder="Search name here..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Created Date
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        {searchData?.map((user) => (
                          <TableRow
                            className="bg-accent cursor-pointer"
                            key={user.id}
                            onClick={() => handleUserClick(user)}
                          >
                            <TableCell>
                              <div className="font-medium">{user.name}</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                {user.email}
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {user.createdAt}
                            </TableCell>
                            <TableCell className="text-right flex justify-start">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* User Detail Side Card */}
          <div>
            {/* Md screen or lower */}
            {isMdScreen ? (
              <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogTrigger asChild></DialogTrigger>
                {selectedUser && (
                  <DialogContent>
                    <Card>
                      <CardHeader className="flex flex-row items-start bg-muted/50">
                        <div className="grid gap-0.5">
                          <CardTitle className="group flex items-center gap-2 text-lg">
                            {selectedUser.name}
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                            >
                              <Copy className="h-3 w-3" />
                              <span className="sr-only">Copy User ID</span>
                            </Button>
                          </CardTitle>
                          <CardDescription>
                            Created At: {selectedUser.createdAt}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 text-sm">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <div className="font-semibold">User Address</div>
                            <address className="grid gap-0.5 not-italic text-muted-foreground">
                              <span>{selectedUser.name}</span>
                              <span>{selectedUser.address}</span>
                            </address>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid gap-3">
                          <div className="font-semibold">User Information</div>
                          <dl className="grid gap-3">
                            <div className="flex items-center justify-between">
                              <dt className="text-muted-foreground">Name</dt>
                              <dd>{selectedUser.name}</dd>
                            </div>
                            <div className="flex items-center justify-between">
                              <dt className="text-muted-foreground">Email</dt>
                              <dd>
                                <a href={`mailto:${selectedUser.email}`}>
                                  {selectedUser.email}
                                </a>
                              </dd>
                            </div>
                            <div className="flex items-center justify-between">
                              <dt className="text-muted-foreground">Phone</dt>
                              <dd>
                                <a href={`tel:${selectedUser.phone}`}>
                                  {selectedUser.phone}
                                </a>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-row items-center bg-muted/50 px-6 py-3">
                        <div className="text-xs text-muted-foreground">
                          Updated on {selectedUser.createdAt}
                        </div>
                      </CardFooter>
                    </Card>
                  </DialogContent>
                )}
              </Dialog>
            ) : selectedUser ? (
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-start bg-muted/50">
                  <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                      {selectedUser.name}
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <Copy className="h-3 w-3" />
                        <span className="sr-only">Copy User ID</span>
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      Created At: {selectedUser.createdAt}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <div className="font-semibold">User Address</div>
                      <address className="grid gap-0.5 not-italic text-muted-foreground">
                        <span>{selectedUser.name}</span>
                        <span>{selectedUser.address}</span>
                      </address>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid gap-3">
                    <div className="font-semibold">User Information</div>
                    <dl className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Name</dt>
                        <dd>{selectedUser.name}</dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Email</dt>
                        <dd>
                          <a href={`mailto:${selectedUser.email}`}>
                            {selectedUser.email}
                          </a>
                        </dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Phone</dt>
                        <dd>
                          <a href={`tel:${selectedUser.phone}`}>
                            {selectedUser.phone}
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                  <div className="text-xs text-muted-foreground">
                    Updated on {selectedUser.createdAt}
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardContent>
                  <div className="text-center pt-5">
                    Select a user to view details
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserListsPage;
