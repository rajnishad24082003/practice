import { Transaction_PurchaseFun } from "../../context/DataCollector";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TransFram from "./TransFram.jsx";
const Purchase = () => {
  return (
    <>
      <TransFram
        inputs={[
          { name: "Vch_No", type: "text", placeholder: "Vch No" },
          { name: "Bill_No", type: "text", placeholder: "Bill No" },
          { name: "Vch_Date", type: "text", placeholder: "Vch Date" },
          { name: "Bill_Date", type: "text", placeholder: "Bill Date" },
          { name: "SI_Bill_No", type: "text", placeholder: "SI Bill No" },
          { name: "Ac_Code", type: "text", placeholder: "Ac Code" },
          { name: "Ac_Name", type: "text", placeholder: "Ac Name" },
        ]}
        selectors={[
          {
            name: "Book_Name",
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
          "DISC_AMT",
          "TAX_AMT",
          "ROF_AMT",
          "HM_AMT",
          "TOTAL_AMT",
          "CASH_AMT",
          "CHEQUE_AMT",
          "CARD_AMT",
          "KASAR_AMT",
          "OS_AMT",
        ]}
        tableData={{
          tr: [
            "Sr",
            "Vch Date",
            "Tag No",
            "Vch No",
            "Item Type",
            "Item Code",
            "Design No",
            "Size",
            "Center",
            "Pcs",
            "Gross Weight",
            "Net Weight",
            "Labour Rate",
            "Labour Amount",
            "Other Amount",
            "Net Amount",
            "MRP",
            "Product Cost",
            "Image",
            "Karigar Name",
          ],
          editable: false,
          td: [],
        }}
      ></TransFram>
    </>
  );
};

export default Purchase;
