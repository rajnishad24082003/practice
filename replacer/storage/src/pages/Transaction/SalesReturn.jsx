import { Transaction_SalesReturnFun } from "../../context/DataCollector";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TransFram from "./TransFram.jsx";
const SalesReturn = () => {
  return (
    <>
      <TransFram
        inputs={[
          { name: "Vch_No", type: "text", placeholder: "Vch No" },
          { name: "Vch_Date", type: "text", placeholder: "Vch Date" },
          { name: "Ref_No", type: "text", placeholder: "Ref_No" },
          { name: "Ac_Code", type: "text", placeholder: "Ac Code" },
        ]}
        selectors={
          [
            // {
            //   name: "Item Type",
            //   options: [
            //     { value: "Gold Purchase" },
            //     { value: "Gold Purchase Tax" },
            //     { value: "Gold URD Purchase" },
            //     { value: "Old Gold Purchase" },
            //     { value: "Other Purchase" },
            //     { value: "Other Purchase Tax" },
            //     { value: "Silver Purchase" },
            //     { value: "Silver Purchase Tax" },
            //     { value: "Silver URD Purchase" },
            //     { value: "Old Silver Purchase" },
            //   ],
            // },
          ]
        }
        onchangeFun={"Purchase_Fun"}
        smallTable={[
          "NET_AMT",
          "Lbr Disc",
          "Tax Amt",
          "Tcs Amt",
          "Total AMT",
          "Total AMT",
          "Cheque AMT",
          "Card AMT",
          "Order AMT",
          "Old Gold AMT",
          "Old Silver AMT",
          "Scheme AMT",
          "Cash AMT",
          "Cash Return AMT",
          "KASAR_AMT",
          "OS_AMT",
        ]}
        tableData={{
          tr: [
            "Sr .",
            "Tag No",
            "Item Code",
            "S Pcs",
            "SI GrWt",
            "LesOthWt",
            "SI NetWt",
            "Touch",
            "West %",
            "FineWt",
            "LbrRate",
            "LbrAmt",
            "OthAmt",
            "NetAmt",
          ],
          editable: false,
          td: [],
        }}
      ></TransFram>
    </>
  );
};

export default SalesReturn;
