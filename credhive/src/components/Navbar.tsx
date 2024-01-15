import React from "react";
import * as FaIcons from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { Link } from "react-router-dom";

import "../App.css";
import { IconContext } from "react-icons";
import { SidebarItem } from "../helpers/interface";

const Navbar = () => {
  const SidebarData: SidebarItem[] = [
    {
      title: "Overview",
      path: "/",
      icon: <MdRemoveRedEye />,
      cName: "nav-text",
    },
    {
      title: "Credit Details",
      path: "/CreditDetails",
      icon: <FaIcons.FaHandHoldingUsd />,
      cName: "nav-text",
    },
    {
      title: "Financial Information",
      path: "/FinanceInfo",
      icon: <FaSackDollar />,
      cName: "nav-text",
    },
    {
      title: "Financial Analysis",
      path: "/FinanceAnalysis",
      icon: <FaIcons.FaChartPie />,
      cName: "nav-text",
    },
    {
      title: "Documents",
      path: "/Documents",
      icon: <HiMiniClipboardDocumentList />,
      cName: "nav-text",
    },
    {
      title: "Contact Info",
      path: "/contactUs",
      icon: <BsInfoCircleFill />,
      cName: "nav-text",
    },
  ];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginTop: "16px" }}>
          <IconContext.Provider value={{ color: "undefined" }}>
            <div className="navbar">
              <Link to="#" className="menu-bars"></Link>
            </div>

            <nav className={"nav-menu active"}>
              <ul className="nav-menu-items">
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars"></Link>
                </li>
                {SidebarData?.map((item, index) => {
                  return (
                    <li key={index} className={item?.cName}>
                      <Link to={item?.path}>
                        {item?.icon}
                        <span>{item?.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Navbar;
