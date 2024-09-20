// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { FormEvent, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const email = formData.get("email");
//     const password = formData.get("password");

//     const response = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       router.push("/dashboard");
//     } else {
//       const data = await response.json();
//       setError(data.message);
//     }
//   }

//   const pathname = usePathname();

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="h-screen flex justify-center items-center"
//     >
//       <Card className="mx-auto max-w-sm">
//         <CardHeader>
//           <CardTitle className="text-2xl">Login</CardTitle>
//           <CardDescription>
//             Enter your email below to login to your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4">
//             {error && <div className="text-red-500">{error}</div>}{" "}
//             {/* Error display */}
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 name="email"
//                 defaultValue="user@example.com"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Password</Label>
//                 <Link
//                   href="#"
//                   className="ml-auto inline-block text-sm underline"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>
//               <Input
//                 id="password"
//                 type="password"
//                 name="password"
//                 defaultValue="password123"
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full">
//               Login
//             </Button>
//           </div>
//           <div className="mt-4 text-center text-sm">
//             Don&apos;t have an account?{" "}
//             <Link href="#" className="underline">
//               Sign up
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </form>
//   );
// }
