// import {
//   ChevronLeft,
//   ChevronRight,
//   Copy,
//   CopyIcon,
//   MoreVertical,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
// } from "@/components/ui/pagination";

// import { Separator } from "@/components/ui/separator";

// import React from "react";

// type UserData = {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   status: string;
//   address: string;
//   createdAt: string;
//   updatedAt: string;
// };

// interface UserInfoCardProps {
//   user: UserData;
// }

// function UserInfoCard() {
//   return (
//     <div>
//       <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
//         <CardHeader className="flex flex-row items-start bg-muted/50">
//           <div className="grid gap-0.5">
//             <CardTitle className="group flex items-center gap-2 text-lg">
//               ID 854549184
//               <Button
//                 size="icon"
//                 variant="outline"
//                 className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
//               >
//                 <Copy className="h-3 w-3" />
//                 <span className="sr-only">Copy Order ID</span>
//               </Button>
//             </CardTitle>
//             <CardDescription>{user.createdAt}</CardDescription>
//           </div>
//           <div className="ml-auto flex items-center gap-1">
//             <Button size="sm" variant="outline" className="h-8 gap-1">
//               <CopyIcon className="h-3.5 w-3.5" />
//               <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
//                 Copy ID
//               </span>
//             </Button>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button size="icon" variant="outline" className="h-8 w-8">
//                   <MoreVertical className="h-3.5 w-3.5" />
//                   <span className="sr-only">More</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuItem>Edit</DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Trash</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </CardHeader>
//         <CardContent className="p-6 text-sm">
//           <Separator className="my-4" />
//           <div className="grid grid-cols-2 gap-4">
//             <div className="grid gap-3">
//               <div className="font-semibold">User Address</div>
//               <address className="grid gap-0.5 not-italic text-muted-foreground">
//                 <span>{user.name}</span>
//                 <span>{user.address}</span>
//               </address>
//             </div>
//           </div>
//           <Separator className="my-4" />
//           <div className="grid gap-3">
//             <div className="font-semibold">User Information</div>
//             <dl className="grid gap-3">
//               <div className="flex items-center justify-between">
//                 <dt className="text-muted-foreground">Name</dt>
//                 <dd>{user.name}</dd>
//               </div>
//               <div className="flex items-center justify-between">
//                 <dt className="text-muted-foreground">Email</dt>
//                 <dd>
//                   <a href={`mailto:${user.email}`}>{user.email}</a>
//                 </dd>
//               </div>
//               <div className="flex items-center justify-between">
//                 <dt className="text-muted-foreground">Phone</dt>
//                 <dd>
//                   <a href={`tel:${user.phone}`}>{user.phone}</a>
//                 </dd>
//               </div>
//             </dl>
//           </div>
//           <Separator className="my-4" />
//         </CardContent>
//         <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
//           <div className="text-xs text-muted-foreground">
//             Updated <time dateTime={user.updatedAt}>{user.updatedAt}</time>
//           </div>
//           <Pagination className="ml-auto mr-0 w-auto">
//             <PaginationContent>
//               <PaginationItem>
//                 <Button size="icon" variant="outline" className="h-6 w-6">
//                   <ChevronLeft className="h-3.5 w-3.5" />
//                   <span className="sr-only">Previous Order</span>
//                 </Button>
//               </PaginationItem>
//               <PaginationItem>
//                 <Button size="icon" variant="outline" className="h-6 w-6">
//                   <ChevronRight className="h-3.5 w-3.5" />
//                   <span className="sr-only">Next Order</span>
//                 </Button>
//               </PaginationItem>
//             </PaginationContent>
//           </Pagination>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

// export default UserInfoCard;
