import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface UserAvatarProps {
  name: string;
  image: string;
  className?: string;
}

const UserAvatar = ({ name, image, className }: UserAvatarProps) => {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      <Image
        src={image}
        alt={name || ""}
        width={40}
        height={40}
        className="rounded-full"
      />
      {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
      <AvatarFallback
        delayMs={1500}
        className="text-lg dark:bg-white dark:text-black"
      >
        {name
          ?.split("")
          .map((i) => i[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
