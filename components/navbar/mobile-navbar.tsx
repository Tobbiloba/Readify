"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { markAllNotificationsAsRead } from "@/lib/server-actions";
import Image from "next/image";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import MobileMenus from "./mobile-menu";

interface NotificationIconProps {
  notifications?: any;
}

const MobileMenu = ({}) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center">
            <RiMenu4Fill className="text-black text-2xl" />
          </div>
        </SheetTrigger>
        <SheetContent side="left">
          {/* <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
            <SheetDescription>
              View all your notifications here
            </SheetDescription>
          </SheetHeader> */}
          <div>
            <MobileMenus />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
