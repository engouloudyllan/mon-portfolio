import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";


const AdminLayout: React.FC = () => {
    return (
        <div className="flex flex-row h-screen relative">
          <Sidebar />
          <Header />
          <main>
             <Outlet />
          </main>
          <Footer />
        </div>
    )
};

export default AdminLayout;