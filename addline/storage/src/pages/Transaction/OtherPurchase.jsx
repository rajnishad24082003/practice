import { Transaction_OtherPurchaseFun } from "../../context/DataCollector";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TransFram from "./TransFram.jsx";
const OtherPurchase = () => {
  return (
    <>
      <TransFram
        inputs={[
          { name: "Vch_No", type: "text", placeholder: "Vch No" },
          { name: "Vch_Date", type: "text", placeholder: "Vch Date" },
          { name: "Bill_No", type: "text", placeholder: "Bill No" },
          { name: "Bill_Date", type: "text", placeholder: "Bill Date" },
          { name: "Ac_Code", type: "text", placeholder: "Ac Code" },
          { name: "Ac_Balance", type: "text", placeholder: "Ac Balance" },
          { name: "Ledr_Ac", type: "text", placeholder: "Ledr Ac" },
        ]}
        selectors={[
          {
            name: "Bill Type",
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
          "IGST Amt",
          "CGST Amt",
          "SGST Amt",
          "TOTAL_AMT",
          "CASH_AMT",
          "CHEQUE_AMT",
          "CARD_AMT",
          "KASAR_AMT",
          "OS_AMT",
        ]}
        tableData={{
          tr: [
            "Sr .",
            "Hsn Code",
            "Item Name",
            "Tax Code",
            "Tax %",
            "Net Amount",
            "Tax Type",
            "Taxable Amt",
            "IGS Tamt",
            " CGS Tamt",
            "SGS Tamt",
            "Total Amt ",
          ],
          editable: false,
          td: [],
        }}
      ></TransFram>
    </>
  );
};

export default OtherPurchase;
