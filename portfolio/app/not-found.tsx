"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="font-inter font-semibold w-full h-screen flex items-center justify-center">
      <div className="bg-secondary w-3/5 h-3/5 p-8 rounded-2xl shadow-lg flex flex-col justify-evenly items-center space-y-4">
        <h2 className="text-6xl">404 :0</h2>
        <h2 className="text-3xl">Page Not Found! Let's get you back home!</h2>
        <div>
          <div className="bg-primary text-foreground font-semibold p-4 rounded-xl transition-colors duration-300 self-start">
            <Link href="/">
              <h1 className="text-xl">Return Home</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
