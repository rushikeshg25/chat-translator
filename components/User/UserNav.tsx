"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const UserNav = ({ session }: { session: Session | null }) => {
  if (!session) {
    return (
      <Button
        onClick={() => {
          signIn();
        }}
      >
        Signin
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {session.user && session.user.name ? (
          <UserAvatar
            name={session.user?.name}
            image="https://github.com/shadcn.png"
          />
        ) : (
          <UserAvatar name="User" image="User" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
