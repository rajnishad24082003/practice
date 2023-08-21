import { Transaction_SalesOrderFun } from "../../context/DataCollector";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TransFram from "./TransFram.jsx";
const SalesOrder = () => {
  return (
    <>
      <TransFram
        inputs={[
          { name: "Vch_No", type: "text", placeholder: "Vch No" },
          { name: "Vch_Date", type: "text", placeholder: "Vch Date" },
          { name: "Ac_Code", type: "text", placeholder: "Ac Code" },
          { name: "Ref_No", type: "text", placeholder: "Ref No" },
          { name: "Apr_No", type: "text", placeholder: "Apr No" },
          { name: "Ledr_Ac", type: "text", placeholder: "Ledr Ac" },
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
          "CASH_AMT",
          "CHEQUE_AMT",
          "CARD_AMT",
          "Order_AMT",
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

export default SalesOrder;
