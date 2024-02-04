"use client";

import React from "react";
interface pageProps {
  params: {
    language: string;
  };
}

export default function PageEn({ params }: pageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-white">
      <div className="flex flex-col min-w-20 bg-gray-200 p-5 m-5">
        <div className="flex">
          <h2 className="text-2xl font-bold text-gray-400 text-center m-5">
            Type the number of the item you want to go to
          </h2>
        </div>
        <div className="flex justify-center min-w-20">
          <input
            type="number"
            id="item"
            name="go-to-item"
            min="1"
            max="3"
            className="min-w-20 border border-solid border-l-1 text-stone-900 text-right"
          />
        </div>
        <div className="flex justify-center min-w-20 m-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const item = (document.getElementById("item") as HTMLInputElement)
                .value;
              window.location.href = `/${params.language}/${item}`;
            }}
          >
            Go
          </button>
        </div>
      </div>
    </main>
  );
}
