import { Transaction_OldItemSalesFun } from "../../context/DataCollector";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TransFram from "./TransFram.jsx";
const OldItemSales = () => {
  return (
    <>
      <TransFram
        inputs={[
          { name: "Vch_No", type: "text", placeholder: "Vch No" },
          { name: "Vch_Date", type: "text", placeholder: "Vch Date" },
          { name: "Ac_Code", type: "text", placeholder: "Ac Code" },
          { name: "Gross_Wt", type: "text", placeholder: "Gross Wt" },
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
          "Cash AMT",
          "Cheque AMT",
          "Card AMT",
          "KASAR_AMT",
          "OS_AMT",
        ]}
        tableData={{
          tr: [
            "Sr .",
            "It Code",
            "Item Name",
            "Pcs",
            "GrWt",
            "Oth Less",
            "Ghat",
            "NetWt",
            "Touch",
            "LessTch",
            "FineWt",
            "Rate",
            "ItmAmt",
            "LbrAmt",
          ],
          editable: false,
          td: [],
        }}
      ></TransFram>
    </>
  );
};

export default OldItemSales;
