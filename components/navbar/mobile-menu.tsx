import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { IoIosArrowForward } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/",
  },
  {
    title: "Wishlist",
    href: "/",
  },
  {
    title: "Cart",
    href: "/",
  },
  {
    title: "Contact ",
    href: "/",
  },
];


const categories = [
    {
      icon: "/categories/spy.png",
      name: "Action & Adventure",
      href: "/action",
    },
    {
      icon: "/categories/america.png",
      name: "Americas",
      href: "/americas",
    },
    {
      icon: "/categories/palette.png",
      name: "Arts & Photography",
      href: "/arts",
    },
    {
      icon: "/categories/bokok1.png",
      name: "Biographies",
      href: "/bography",
    },
    {
      icon: "/categories/boy.png",
      name: "Children's Books",
      href: "/children",
    },
  
    {
      icon: "/categories/conductor.png",
      name: "Classics",
      href: "/classic",
    },
    {
      icon: "/categories/red-flag.png",
      name: "Contemporary",
      href: "/americas",
    },
    {
      icon: "/categories/e-learning.png",
      name: "Education & Reference",
      href: "/arts",
    },
    {
      icon: "/categories/genres.png",
      name: "Genre Fiction",
      href: "/bography",
    },
    {
      icon: "/categories/history-book.png",
      name: "Historical",
      href: "/children",
    },
  ];
const MobileMenus = () => {
  return (
    <Tabs defaultValue="main-menu" className="w-[100%] mt-4">
      <TabsList className="grid w-full grid-cols-2 bg-red-100">
        <TabsTrigger value="main-menu">Main Menu</TabsTrigger>
        <TabsTrigger value="categories">Categories</TabsTrigger>
      </TabsList>
      <TabsContent value="main-menu">
        <Card>
          {/* <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="space-y-2 py-4 flex flex-col gap-4">
            {links.map((link, i) => (
              <div key={i} className="flex items-center justify-between text-slate-600">
                <Link href={link.href}>{link.title}</Link>

                <IoIosArrowForward />
              </div>
            ))}
          </CardContent>
          {/* <CardFooter>
            <Button>Save changes</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
      <TabsContent value="categories">
        <Card>
          
          <CardContent className="py-4 px-2">
            <div className="space-y-1">
              {
                categories.map((category, i) => <div
                key={i}
                className="flex items-center w-[100%] hover:bg-red-100 text-gray-500 hover:text-[#ff6154] gap-4 py-3 px-2"
              >
                <Image
                  alt={category.name}
                  width={20}
                  height={20}
                  src={category.icon}
                  className="w-6 h-6"
                />
                <h1 className="text-[14px]">{category.name}</h1>
              </div>)
              }
            </div>
            
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default MobileMenus;
