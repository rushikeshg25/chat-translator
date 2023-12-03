import Link from "next/link";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import LogoImg from "../images/logoImg.svg";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={LogoImg}
            alt="Logo"
            className="dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
