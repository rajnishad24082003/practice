import Company from "./Company/Index";
import DailyWork from "./DailyWork/index";
import Dhiran from "./Dhiran/index";
import Karigar from "./Karigar/Index";
import Master from "./Master/Index";
import Others from "./Others/Index";
import Reports from "./Reports/index";
import Scheme from "./Scheme/index";
import Transaction from "./Transaction/Index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { ItemMasterProvider } from "../context/ItemMaster";
import { PartyMasterProvider } from "../context/PartyMaster";
import { GroupMasterProvider } from "../context/GroupMaster";

const Main = () => {
  let [sidebarToggle, setsidebarToggle] = useState("");
  let sidebartogglefun = () => {
    if (sidebarToggle === "") {
      setsidebarToggle("sidebar-icon-only");
    } else {
      setsidebarToggle("");
    }
  };
  let [navCol, setnavCol] = useState({});
  let sidebarcolClick = (color, txt) => {
    setnavCol({ color: color, txt: txt });
  };
  return (
    <ItemMasterProvider>
      <GroupMasterProvider>
        <div className={sidebarToggle}>
          <div className="container-scroller ">
            <Navbar
              sidebartogglefun={sidebartogglefun}
              navCol={navCol}
            ></Navbar>
            <div className="container-fluid page-body-wrapper">
              <Sidebar
                sidebarToggle={sidebarToggle}
                sidebarcolClick={sidebarcolClick}
              ></Sidebar>
              <div className="main-panel">
                <Company />
                <DailyWork />
                <Dhiran />
                <Karigar />
                <Master />
                <Others />
                <Reports />
                <Scheme />
                <Transaction />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </GroupMasterProvider>
    </ItemMasterProvider>
  );
};

export default Main;
