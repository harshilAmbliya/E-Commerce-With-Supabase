import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const MasterLayout = (props: Props) => {
  return (
    <div className="flex flex-col h-screen  ">
      {/* Navbar */}
      <nav className=" p-4 text-zinc-900 bg-slate-50 sticky z-10 top-0 w-full border shadow-md">
        <ul className="flex">
          <li className="mr-6">
            <Link href="/dashboard">Home</Link>
          </li>
          <li className="mr-6">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-6">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      {/* h-[calc(100vh-57px)] */}
      <div className="flex-1 flex flex-row">
        {/* Sidebar */}
        <div className="w-64 bg-slate-100 p-4 text-zinc-700 h-[calc(100vh-57px)]">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <ul className="mt-4">
            <li className="py-2 hover:bg-gray-400">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="py-2 hover:bg-gray-400">
              <Link href="/users">Users</Link>
            </li>
            <li className="py-2 hover:bg-gray-400">
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 h-[calc(100vh-57px)]  overflow-y-auto">
          <div className="bg-slate-300 p-4  shadow  min-h-screen ">{props.children}</div>
          {/* footer */}
          <footer className="p-4 bg-gray-300 text-center text-sm text-gray-400">
            © Copyright 2021 - Powered by NextJS and TailwindCSS
          </footer>
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
