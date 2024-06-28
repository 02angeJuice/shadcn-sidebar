"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  Home,
  ListVideo,
  Menu,
  Mic2,
  Music,
  Play,
  RadioIcon,
  SquareStack,
  User,
  FileLineChart,
  Truck,
  ShieldAlert,
  Database,
  FilePlus2,
  LayoutList,
  UserPlus,
  Pencil,
  SlidersHorizontal,
  Text,
  List,
  Settings,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import * as React from "react";

type Menu = {
  label: string;
  name: string;
  icon: React.ReactNode;
  submenu?: Submenu[];
  href: string;
};

type Submenu = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

export function SidebarMenu() {
  // const searchParams = useSearchParams();

  // const selected = searchParams.get(searchParam) || props.defaultValue;

  const menus: Menu[] = [
    {
      label: "Main",
      name: "Home",
      icon: <Home size={15} className="mr-2" />,
      href: "/home",
    },
    {
      label: "Modules",
      name: "Routing",
      icon: <Truck size={15} className="mr-2" />,
      href: "/routing/",
      submenu: [
        {
          name: "Create Order",
          icon: <FilePlus2 size={15} className="mr-2" />,
          href: "/routing/create-order",
        },
        {
          name: "Trip Arrangement",
          icon: <SlidersHorizontal size={15} className="mr-2" />,
          href: "/routing/trip-arrangement",
        },
        {
          name: "Trip List Status",
          icon: <LayoutList size={15} className="mr-2" />,
          href: "/routing/trip-list-status",
        },
        {
          name: "Edit Trip",
          icon: <UserPlus size={15} className="mr-2" />,
          href: "/routing/edit-trip",
        },
        {
          name: "Delete Order",
          icon: <ShieldAlert size={15} className="mr-2" />,
          href: "/routing/del-order",
        },
        {
          name: "Trip Cancel",
          icon: <ShieldAlert size={15} className="mr-2" />,
          href: "/routing/trip-cancel",
        },
        {
          name: "Edit Truck",
          icon: <Pencil size={15} className="mr-2" />,
          href: "/routing/trip-cancel",
        },
      ],
    },

    {
      label: "Modules",
      name: "Master Data",
      icon: <Database size={15} className="mr-2" />,
      href: "/master/",
      submenu: [
        {
          name: "Product",
          icon: <Text size={15} className="mr-2" />,
          href: "/master/product",
        },
        {
          name: "Customer",
          icon: <Text size={15} className="mr-2" />,
          href: "/master/customer",
        },
        {
          name: "Truck",
          icon: <Text size={15} className="mr-2" />,
          href: "/master/truck",
        },
        {
          name: "Code Coop",
          icon: <Text size={15} className="mr-2" />,
          href: "/master/code-coop",
        },
        {
          name: "Driver",
          icon: <Text size={15} className="mr-2" />,
          href: "/master/driver",
        },
        {
          name: "Client",
          icon: <Text size={15} className="mr-2" />,
          href: "/master/client",
        },
        {
          name: "User",
          icon: <Text size={15} className="mr-2" />,
          href: "/master/user",
        },
        {
          name: "Customer Zone",
          icon: <Text size={15} className="mr-2" />,
          href: "/master/zone",
        },
      ],
    },
    {
      label: "Documnet Report",
      name: "Report",
      icon: <FileLineChart size={15} className="mr-2" />,
      href: "/home/",
    },

    {
      label: "Settings",
      name: "Settings",
      icon: <Settings size={15} className="mr-2" />,
      href: "/master/",
      submenu: [
        {
          name: "Change Password",
          icon: <Lock size={15} className="mr-2" />,
          href: "/master/product",
        },
      ],
    },

    // {
    //   label: "Master Data",
    //   name: "Product Master",
    //   icon: <User size={15} className="mr-2" />,
    //   href: "/home/",
    // },
    // {
    //   label: "Master Data",
    //   name: "Customer Master",
    //   icon: <Mic2 size={15} className="mr-2" />,
    //   href: "/home/",
    // },
  ];

  const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));

  const pathname = usePathname();

  // console.log(pathname === "/routing/create-order");

  return (
    <ScrollArea className="h-screen lg:w-56 sm:w-full rounded-md">
      <div className="md:px-4 sm:p-0 mt-5 ">
        {uniqueLabels.map((label, index) => (
          <>
            <React.Fragment key={label}>
              {label && (
                <>
                  <p
                    className={`mx-4 mb-3 text-xs text-left tracking-wider font-bold text-slate-300 ${index > 0 ? "mt-5" : ""}`}
                  >
                    {label}
                  </p>
                </>
              )}

              {menus
                .filter((menu) => menu.label === label)
                .map((menu) => (
                  <React.Fragment key={menu.name}>
                    {menu.submenu && menu.submenu.length > 0 ? (
                      <Accordion
                        key={menu.name}
                        type="single"
                        className="mt-[-10px] mb-[-10px] p-0 font-normal"
                        defaultValue={
                          pathname.includes(menu.href) ? menu.href : null
                        }
                        collapsible
                      >
                        <AccordionItem
                          value={menu?.href}
                          className="m-0 p-0 font-normal"
                        >
                          <AccordionTrigger>
                            <a
                              key={menu.name}
                              className="w-full flex justify-start text-xs font-normal h-8 bg-background my-2 items-center p-3 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md"
                            >
                              <div
                                className={cn(
                                  "flex justify-between w-full [&[data-state=open]>svg]:rotate-180",
                                )}
                              >
                                <div className="flex">
                                  <div className="w-6">{menu.icon}</div>
                                  {menu.name}
                                </div>
                                <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                              </div>
                            </a>
                          </AccordionTrigger>
                          <AccordionContent>
                            {menu.submenu.map((submenu) => (
                              <Link
                                key={submenu.name}
                                href={submenu.href}
                                className={`${pathname === submenu.href ? "text-blue-500 font-semibold" : "text-gray-500"}  mt-0 mb-0 flex text-xs h-4 bg-white dark:bg-background dark:hover:bg-primary dark:hover:text-background my-2 items-center p-3 ml-4 hover:bg-primary hover:text-white rounded-md`}
                              >
                                <div className="w-6">{submenu.icon}</div>
                                {submenu.name}
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <div key={menu.name}>
                        <Link
                          href={menu.href}
                          className="flex text-xs h-4 bg-white dark:bg-background my-2 items-center p-3 hover:bg-primary dark:hover:bg-primary dark:hover:text-background hover:text-white rounded-md"
                        >
                          <div className="w-6">{menu.icon}</div>
                          {menu.name}
                        </Link>
                      </div>
                    )}
                  </React.Fragment>
                ))}
            </React.Fragment>
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
