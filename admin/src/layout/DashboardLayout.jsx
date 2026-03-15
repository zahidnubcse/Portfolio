import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 flex flex-col">

        <Navbar setOpen={setOpen} />

        <main className="p-4 md:p-6 flex-1">
          <Outlet />
        </main>

      </div>

    </div>
  );
}