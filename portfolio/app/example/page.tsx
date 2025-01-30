"use client";

// import TextPressure from "../components/textPressure";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-black text-white p-6 rounded-2xl shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen text-white p-4 md:p-8 grid gap-8 grid-cols-1 md:grid-cols-3 grid-rows-7">
      <Card className="md:col-span-3 bg-gray-800">1</Card>

      <div className="md:col-span-2 grid grid-cols-8 gap-8 row-span-6">
        <Card className="bg-gray-800 col-span-5">2</Card>

        <Card className="flex bg-gray-800 col-span-3">3</Card>

        <Card className="bg-gray-800 col-span-4">4</Card>

        <Card className="bg-gray-800 col-span-4">5</Card>
      </div>

      <div className="grid h-full grid-rows-2 gap-8 row-span-6">
        <Card className="bg-gray-800 row-span-2">6</Card>
        <Card className="bg-gray-800 row-span-2">7</Card>
      </div>
    </div>
  );
}
