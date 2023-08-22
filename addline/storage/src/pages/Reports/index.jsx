import { Route, Routes } from "react-router-dom";
import Ledger from "./Ledger";
import TimeWise from "./TimeWise";
import ItemStock from "./ItemStock";
import TagStock from "./TagStock";
import TagOtherDetail from "./TagOtherDetail";
import TagWithImage from "./TagWithImage";
import ImageDetail from "./ImageDetail";
import DiamondReport from "./DiamondReport";
import CashBook from "./CashBook";
import BankBook from "./BankBook";
import SalesOrder from "./SalesOrder";
import Sales from "./Sales";
import Purchase from "./Purchase";
import PartyWiseOS from "./PartyWiseOS";
import OtherReports from "./OtherReports";
import FinalReports from "./FinalReports";
import GSTReport from "./GSTReport";
import StockValue from "./StockValue";
import VatReport from "./VatReport";
import AddressPrint from "./AddressPrint";
import DeleteEntry from "./DeleteEntry";
import ReportsFram from "./ReportsFram";
import FilteringTable from "../../components/Report-Dashboard/ReportData";

const Index = () => {
  let fetchedData = [
    {
      _id: {
        $oid: "64d8bcee0d21ed4d4b841e71",
      },
      tagOpening: {
        Vch_Date: "2023-08-05",
        Data: {
          Item_Type: "BOOM VOOM",
          Item_Code: "BGG916",
          Design_No: "shivam",
          Size: "10",
          Center: "DIAMOND",
          Pcs: "2",
          Gross_Weight: "15",
          Net_Weight: "14",
          Labour_Rate: "100",
          Labour_Amount: "200",
          Other_Amount: "50",
          Net_Amount: "350",
          MRP: "500",
          Product_Cost: "300",
          Image: "image_url",
          Karigar_Name: "John",
          Tag_No: "BGG_0001",
        },
        isPatch: false,
        Vch_No: "1",
      },
      createdAt: {
        $date: "2023-08-13T11:22:22.905Z",
      },
      updatedAt: {
        $date: "2023-08-13T11:22:22.905Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "64d8bcee0d21ed4d4b841e71",
      },
      tagOpening: {
        Vch_Date: "2023-08-05",
        Data: {
          Item_Type: "BOOM VOOM",
          Item_Code: "BGG916",
          Design_No: "shivam",
          Size: "10",
          Center: "DIAMOND",
          Pcs: "2",
          Gross_Weight: "15",
          Net_Weight: "14",
          Labour_Rate: "100",
          Labour_Amount: "200",
          Other_Amount: "50",
          Net_Amount: "350",
          MRP: "500",
          Product_Cost: "300",
          Image: "image_url",
          Karigar_Name: "John",
          Tag_No: "BGG_0001",
        },
        isPatch: false,
        Vch_No: "1",
      },
      createdAt: {
        $date: "2023-08-13T11:22:22.905Z",
      },
      updatedAt: {
        $date: "2023-08-13T11:22:22.905Z",
      },
      __v: 0,
    },
  ];
  let modified = [];
  for (let i = 0; i < fetchedData.length; i++) {
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
    <Routes>
      <Route path="/reports">
        <Route path="" Component={Ledger}></Route>
        <Route path="ledger" Component={Ledger}></Route>
        <Route path="timewise" Component={TimeWise}></Route>
        <Route path="itemstock" Component={ItemStock}></Route>
        <Route path="tagstock" Component={TagStock}></Route>
        <Route path="tagotherdetail" Component={TagOtherDetail}></Route>
        <Route path="tagwithimage" Component={TagWithImage}></Route>
        <Route path="imagedetail" Component={ImageDetail}></Route>
        <Route path="diamondreport" Component={DiamondReport}></Route>
        <Route path="cashbook" Component={CashBook}></Route>
        <Route path="bankbook" Component={BankBook}></Route>
        <Route path="salesorder" Component={SalesOrder}></Route>
        <Route path="sales" Component={Sales}></Route>
        <Route path="purchase" Component={Purchase}></Route>
        <Route path="partywiseos" Component={PartyWiseOS}></Route>
        <Route path="otherreports" Component={OtherReports}></Route>
        <Route path="finalreports" Component={FinalReports}></Route>
        <Route path="gstreport" Component={GSTReport}></Route>
        <Route path="stockvalue" Component={StockValue}></Route>
        <Route path="vatreport" Component={VatReport}></Route>
        {/* <Route path="addressprint" Component={AddressPrint}></Route> */}
        <Route path="addressprint" Component={FilteringTable}></Route>
        <Route path="deleteentry" Component={DeleteEntry}></Route>
        <Route
          path="fram"
          element={
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
              ]}
              tableData={{
                tr: [
                  "Vch_Date",
                  "Item_Type",
                  "Item_Code",
                  "Design_No",
                  "Size",
                  "Center",
                  "Pcs",
                  "Gross_Weight",
                  "Net_Weight",
                  "Labour_Rate",
                  "Labour_Amount",
                  "Other_Amount",
                  "Net_Amount",
                  "MRP",
                  "Product_Cost",
                  "Image",
                  "Karigar_Name",
                  "Tag_No",
                  "Vch_No",
                ],
                editable: false,
                td: mainData,
              }}
              inputs={[
                { name: "From_Dt", type: "text", placeholder: "from date" },
              ]}
              onchangeFun={"Reports_TagStockFun"}
            ></ReportsFram>
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export default Index;
