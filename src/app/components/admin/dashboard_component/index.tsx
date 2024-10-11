"use client";

import AsideMenu from "@/app/components/admin/aside_menu";
import AdminProductsComponent from "../products_table";
import { ProductFromDB } from "@/utils/interfaces";
import { useState } from "react";
import AdminOverview from "../overview";

export default function AdminDashboardComponent({
  isAdmin,
  products,
}: {
  isAdmin: boolean;
  products: ProductFromDB[];
}) {
  const [activePage, setActivePage] = useState("dashboard");

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };
  return (
    <>
      <AsideMenu showUsers={isAdmin} onPageChange={handlePageChange} />
      <div className="flex-auto">
        <AdminOverview show={activePage === "dashboard"} />

        <AdminProductsComponent
          show={activePage === "products"}
          products={products}
        />
      </div>
    </>
  );
}
