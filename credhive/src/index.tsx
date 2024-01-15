import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar.tsx";

import FinanceInfo from "./routes/FinanceInfo.tsx";
import CreditDetails from "./routes/CreditDetails.tsx";
import ContactUs from "./routes/ContactUs.tsx";
import CompanyDetails from "./components/CompanyDetails.tsx";
import FinanceAnalysis from "./routes/FinanceAnalysis.tsx";
import Documents from "./routes/Documents.tsx";
import Overview from "./routes/Overview.tsx";


const AppLayout  = () => (
  <>
  
<CompanyDetails/>

    <div style={{ display: "flex", width: "100%", columnGap: "20px" }}>
      <div style={{ width: "20%" }}>
        <Navbar />
      </div>
      <div style={{ width: "80%" }}>
        <Outlet />
      </div>
    </div>
  </>
);

const routes= [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "FinanceInfo",
        element: <FinanceInfo />,
      },
      {
        path: "CreditDetails",
        element: <CreditDetails />,
      },
      {
        path: "FinanceAnalysis",
        element: < FinanceAnalysis />,
      },
      {
        path: "Documents",
        element: < Documents />,
      },
      
      {
        path:"contactUS",
        element:<ContactUs/>
      }
     
    ],
  },
];

const router = createBrowserRouter(routes);

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
} else {
  console.error("Root element not found");
}
