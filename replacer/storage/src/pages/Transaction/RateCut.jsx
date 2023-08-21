import { Transaction_RateCutFun } from "../../context/DataCollector";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TransFram from "./TransFram.jsx";
const RateCut = () => {
  return (
    <>
      <TransFram
        inputs={[
          { name: "Vch_No", type: "text", placeholder: "Vch No" },
          { name: "Vch_Date", type: "text", placeholder: "Vch Date" },
          { name: "Ref_No", type: "text", placeholder: "Ref_No" },
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
          "Disc Amt",
          "Tax Amt",
          "Total AMT",
          "Cash AMT",
          "Cheque AMT",
          "Card AMT",
          "KASAR_AMT",
          "OS_AMT",
        ]}
        tableData={{
          tr: [
            "Sr .",
            "Isu Code",
            "Isu Item Code",
            "Pcs",
            "GrWt",
            "NetWt",
            "Touch",
            "Ac FineWt",
            "UsRate",
            "OsRate",
            "ConVal",
            "ExchVal",
            "ItRate",
            "ItAmt",
          ],
          editable: false,
          td: [],
        }}
      ></TransFram>
    </>
  );
};

export default RateCut;
