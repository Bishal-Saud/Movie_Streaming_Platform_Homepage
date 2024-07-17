import React from "react";
import Navbar from "./components/Navbar";

function AppLayout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="">{children}</main>
      {/*  Footer */}
    </div>
  );
}

export default AppLayout;
