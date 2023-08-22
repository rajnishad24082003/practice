import face from "../assets/images/faces/face28.png";
import { BiLogoMastercard } from "react-icons/bi";
import { SiWebcomponentsdotorg, SiHomebridge } from "react-icons/si";
import { IoIosMan } from "react-icons/io";
import { GiLuckyFisherman, GiFalloutShelter } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import uuid4 from "uuid4";
import { useState } from "react";
let links = [
  {
    heading: "Company",
    subpages: [
      "Company",
      "Year Create",
      "Balance Transfer",
      "Account Group",
      "User Create",
      "User Rights",
      "Settings",
      "Books",
      "Data Refresh",
      "Data Backup",
    ],
    icon: <SiWebcomponentsdotorg></SiWebcomponentsdotorg>,
  },
  {
    heading: "Master",
    subpages: [
      "Party",
      "Address",
      "Product",
      "Group",
      "Counter",
      "Item",
      "Tax",
      "Salesmen",
      "PartyOpening",
      "ItemOpening",
      "TagOpening",
    ],
    icon: <BiLogoMastercard></BiLogoMastercard>,
  },
  {
    heading: "Transaction",
    subpages: [
      "Purchase",
      "Other Purchase",
      "Tag Cancel",
      "Wholesales",
      "Sales Order",
      "Delivery Challan",
      "Sales",
      "Sales Return",
      "Approval Issue",
      "Approval Return",
      "Rate Cut",
      "Old Item Sales",
      "Labor Work",
      "Cash Received",
      "Cash Payment",
      "Bank Payment",
      "Contract Entry",
      "Purchase Return",
    ],
    icon: <AiOutlineTransaction></AiOutlineTransaction>,
  },
  {
    heading: "Others",
    subpages: [
      "Only Tag Entry",
      "Tag Print",
      "Stock Adjust",
      "Order Cancel",
      "Card Adjust",
      "Physical Stock",
      "Phone Call",
      "Tag Weight Change",
      "Consignment Received",
      "Consignment Issue",
      "Consignment Purchase",
      "Depreciation",
      "Bank Reconcile",
      "Fine JV Entry",
      "Bill-wise Record",
      "Counter Transfer",
      "Service Income",
      "Tag Transfer",
      "Labor Update",
    ],
    icon: <SiHomebridge></SiHomebridge>,
  },
  {
    heading: "Karigar",
    subpages: [
      "Issue Item",
      "Design Issue",
      "Tagwise Received",
      "Repairing Record",
      "Karigar Issue",
      "Karigar Record",
      "Repairing Delivery",
      "Customer Gold Record",
      "Karigar Issue Gold",
      "Karigar Record Ornament",
      "Customer Ornament Delivery",
      "Karigar Item Return",
      "Issue/Receipt Report",
    ],
    icon: <IoIosMan></IoIosMan>,
  },
  {
    heading: "Scheme",
    subpages: [
      "Scheme Master",
      "Member",
      "Opening",
      "Monthly Entry",
      "Advance Adjust",
      "Scheme Report",
      "Scheme Ledger",
      "Monthly Report",
    ],
    icon: <GiLuckyFisherman></GiLuckyFisherman>,
  },
  {
    heading: "Dhiran",
    subpages: [
      "Issue",
      "Interest Received",
      "Received",
      "Interest Record All",
      "Dhiran Report",
      "Dhiran Rojmel",
      "Interest Report",
      "Dhiran Due",
      "Loan Received",
      "Loan Issue",
      "Interest Issue All",
      "Loan Report",
      "Loan Interest",
    ],
    icon: <GiFalloutShelter></GiFalloutShelter>,
  },
  {
    heading: "Reports",
    subpages: [
      "Ledger",
      "Time Wise",
      "Item Stock",
      "Tag Stock",
      "Tag Other Detail",
      "Tag With Image",
      "Image Detail",
      "Diamond Report",
      "Cash Book",
      "Bank Book",
      "Sales Order",
      "Sales",
      "Purchase",
      "Party Wise OS",
      "Other Reports",
      "Final Reports",
      "GST Report",
      "Stock Value",
      "Vat Report",
      "Address Print",
      "Delete Entry",
    ],
    icon: <TbReportSearch></TbReportSearch>,
  },
  {
    heading: "Daily Work",
    subpages: [
      "Daily Rate",
      "Reminder Entry",
      "Cash Book",
      "Item In Out",
      "Rojmel",
      "Amount Rojmel",
      "Daily Reminder",
    ],
    icon: <MdWork></MdWork>,
  },
];

function Lielement({ data, index, sidebarTogglenew }) {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link"
          data-toggle={sidebarTogglenew ? "" : "collapse"}
          href={`#ui-basic${index}`}
          aria-expanded="false"
          aria-controls={`ui-basic${index}`}
        >
          <span className="icon-bg">{data.icon}</span>
          <span className="menu-title" style={{ width: "120px" }}>
            {data.heading}
          </span>
          {!sidebarTogglenew ? (
            <span className="" style={{}}>
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          ) : (
            <></>
          )}
        </a>
        <div className="collapse" id={`ui-basic${index}`}>
          <ul className="nav flex-column sub-menu" id="style-2">
            {data.subpages.map((val, index) => {
              return (
                <li className="nav-item1" key={uuid4()}>
                  {index === 0 ? (
                    <Link
                      className="nav-link link-menu"
                      to={`/${data.heading.replaceAll(" ", "").toLowerCase()}`}
                    >
                      {val}
                    </Link>
                  ) : (
                    <Link
                      className="nav-link"
                      to={`/${data.heading
                        .replaceAll(" ", "")
                        .toLowerCase()}/${val
                        .toLowerCase()
                        .replaceAll(" ", "")
                        .replaceAll("/", "")}`}
                    >
                      {val}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    </>
  );
}

export default function Sidebar(props) {
  const [selectedColor, setSelectedColor] = useState("");
  const [txtCOlor, settxtCOlor] = useState("");
  // Function to update the selected color
  const handleColorChange = (color, txt) => {
    props.sidebarcolClick(color, txt);
    setSelectedColor(color);
    settxtCOlor(txt);
  };

  // Styles for the target div
  const targetDivStyle = {
    backgroundColor: selectedColor,
  };

  // List of available colors
  const colors = [
    { bg: "#000", txt: "white" },
    { bg: "#00425A", txt: "white" },
    { bg: "#400E32", txt: "white" },
    { bg: "#2E0249", txt: "black" },
  ]; // Sample color options
  const [isActive, setIsActive] = useState(false);

  const handleClickonw = (event) => {
    // 👇️ toggle isActive state variable
    setIsActive((current) => !current);
  };

  return (
    <>
      <nav
        className="sidebar sidebar-offcanvas top-sidebarone sidebar-menutwo "
        id="sidebar"
        style={targetDivStyle}
      >
        <ul className="nav">
          {links.map((val, index) => {
            return (
              <div key={index}>
                <Lielement
                  sidebarTogglenew={props.sidebarToggle}
                  data={val}
                  index={index}
                ></Lielement>
              </div>
            );
          })}
        </ul>
      </nav>
      <section className="color_picker_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className={`color_picker ${isActive ? "bg-salmon" : ""}`}>
                {/* Render color options */}
                {colors.map((color) => (
                  <div
                    key={color.bg}
                    className={`color_option `}
                    style={{ backgroundColor: color.bg }}
                    onClick={() => handleColorChange(color.bg, color.txt)}
                  ></div>
                ))}
              </div>
              <div className={`switchcolors_icon`} onClick={handleClickonw}>
                <i className="fas fa-cog"></i>
              </div>
              {/* <div className="target_div" style={targetDivStyle}></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
