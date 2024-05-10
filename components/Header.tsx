import React from "react";
import { UserResource } from "@clerk/types";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

interface HeaderProps {
  user: UserResource | null | undefined;
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center px-[24px] bg-teal-900 h-[100px] text-white shadow-lg">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex justify-center items-center gap-5">
        <h1> </h1>
        <Link href="/profile">{user?.username}</Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
