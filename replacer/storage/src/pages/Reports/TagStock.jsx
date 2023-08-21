import ReportsFram from "./ReportsFram";
import { useState, useEffect } from "react";
import axios from "axios";
const TagStock = () => {
  let [fetchedData, setfetchedData] = useState([]);
  let getFun = async () => {
    let response = await axios.get("http://www.example.com/tagData");
    console.log(response.data[0]);
    setfetchedData(response.data[0]);
  };
  useEffect(() => {
    getFun();
  }, []);
  let modified = [];
  for (let i = 0; i < fetchedData?.length; i++) {
    let temp = {
      Vch_Date: fetchedData[i].tagOpening.Vch_Date,
      ...fetchedData[i].tagOpening.Data,
      Vch_No: fetchedData[i].tagOpening.Vch_No,
    };
    modified.push(temp);
  }
  let mainData = [];
  for (let i = 0; i < modified.length; i++) {
    let modified2 = [];
    let temp = modified[i];
    for (const key in temp) {
      modified2.push({ key: key, value: temp[key] });
    }
    mainData.push(modified2);
  }
  return (
    <>
      <ReportsFram
        Heading="tag wise stock report"
        selectors={[
          {
            name: "Design",
            options: [
              { value: "GOLD" },
              { value: "SILVER" },
              { value: "PLATINUM" },
            ],
          },
          {
            name: "Size",
            options: [
              { value: "GOLD" },
              { value: "SILVER" },
              { value: "PLATINUM" },
            ],
          },
          {
            name: "Design",
            options: [
              { value: "GOLD" },
              { value: "SILVER" },
              { value: "PLATINUM" },
            ],
          },
          {
            name: "It Type",
            options: [
              { value: "GOLD" },
              { value: "SILVER" },
              { value: "PLATINUM" },
            ],
          },
          {
            name: "Tag No",
            options: [
              { value: "GOLD" },
              { value: "SILVER" },
              { value: "PLATINUM" },
            ],
          },
          {
            name: "Kr Name",
            options: [
              { value: "GOLD" },
              { value: "SILVER" },
              { value: "PLATINUM" },
            ],
          },
        ]}
        tableData={{
          tr: [
            "Sr",
            "Vch Date",
            "Item Code",
            "Tag No",
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
            "Tag No",
            "Vch No",
          ],
          editable: false,
          td: mainData,
        }}
        inputs={[
          { name: "From_Dt", type: "text", placeholder: "from date" },
          { name: "To_Date", type: "text", placeholder: "to date" },
          { name: "Group", type: "text", placeholder: "Group" },
          { name: "AC_Code", type: "text", placeholder: "AC Code" },
          { name: "Counter", type: "text", placeholder: "Counter" },
          { name: "Vch_No", type: "text", placeholder: "Vch No" },
          { name: "Product", type: "text", placeholder: "Product" },
          { name: "It_Code", type: "text", placeholder: "It Code" },
          { name: "Pcs", type: "text", placeholder: "Pcs" },
          { name: "Weight_Less", type: "text", placeholder: "Weight_Less" },
          { name: "Weight_More", type: "text", placeholder: "Weight_More" },
        ]}
        onchangeFun={"Reports_TagStockFun"}
      ></ReportsFram>
    </>
  );
};

export default TagStock;
