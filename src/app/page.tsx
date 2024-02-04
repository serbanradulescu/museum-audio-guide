import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-white">
      <h1 className="text-2xl font-bold text-red-400 text-center">
        Muzeul de ...
      </h1>
      <div className="flex flex-row items-center">
        <Link href="/en">
          <div className="flex flex-col bg-gray-100 text-gray-700 px-4 py-4 m-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
              width="100"
              height="100"
            />
            English
          </div>
        </Link>
        <Link href="/ro">
          <div className="flex flex-col bg-gray-100 text-gray-700 px-4 py-4 m-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg"
              width="100"
              height="100"
            />
            Romanian
          </div>
        </Link>
      </div>
    </main>
  );
}
