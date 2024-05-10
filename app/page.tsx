import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col text-5xl h-screen justify-center items-center font-extrabold">
      <h1>Home</h1>
      <Button asChild>
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  );
};

export default Home;
