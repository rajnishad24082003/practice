import { Transaction_LaborWorkFun } from "../../context/DataCollector";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TransFram from "./TransFram.jsx";
const LaborWork = () => {
  return (
    <>
      <TransFram
        inputs={[
          { name: "Vch_No", type: "text", placeholder: "Vch No" },
          { name: "Vch_Date", type: "text", placeholder: "Vch Date" },
          { name: "Ac_Code", type: "text", placeholder: "Ac Code" },
        ]}
        selectors={[
          {
            name: "Item Type",
            options: [
              { value: "Gold Purchase" },
              { value: "Gold Purchase Tax" },
              { value: "Gold URD Purchase" },
              { value: "Old Gold Purchase" },
              { value: "Other Purchase" },
              { value: "Other Purchase Tax" },
              { value: "Silver Purchase" },
              { value: "Silver Purchase Tax" },
              { value: "Silver URD Purchase" },
              { value: "Old Silver Purchase" },
            ],
          },
        ]}
        onchangeFun={"Purchase_Fun"}
        smallTable={[
          "NET_AMT",
          "Sale Tax",
          "Lbr Amt",
          "Lbr Disc",
          "Lbr Tax",

          "Total_AMT",
          "Cheque AMT",
          "Card AMT",
          "Order AMT",
          "Schm AMT",
          "Cash AMT",
          "KASAR_AMT",
          "OS_AMT",
        ]}
        tableData={{
          tr: [
            "Sr .",
            "Tag NO",
            "It Code",
            "Item Name",
            "Pcs",
            "GrWt",
            "NetWt",
            "GhatWt",
            "Touch",
            "West %",
            "Fine",
            "LRate",
            "LAmt",
            "OthAmt",
          ],
          editable: false,
          td: [],
        }}
      ></TransFram>
    </>
  );
};

export default LaborWork;
