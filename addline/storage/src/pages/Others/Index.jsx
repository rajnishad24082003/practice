import { Route, Routes } from "react-router-dom";
import OnlyTagEntry from "./OnlyTagEntry";
import TagPrint from "./TagPrint";
import StockAdjust from "./StockAdjust";
import OrderCancel from "./OrderCancel";
import CardAdjust from "./CardAdjust";
import PhysicalStock from "./PhysicalStock";
import PhoneCall from "./PhoneCall";
import TagWeightChange from "./TagWeightChange";
import ConsignmentReceived from "./ConsignmentReceived";
import ConsignmentIssue from "./ConsignmentIssue";
import ConsignmentPurchase from "./ConsignmentPurchase";
import Depreciation from "./Depreciation";
import BankReconcile from "./BankReconcile";
import FineJVEntry from "./FineJVEntry";
import BillwiseRecord from "./BillwiseRecord";
import CounterTransfer from "./CounterTransfer";
import ServiceIncome from "./ServiceIncome";
import TagTransfer from "./TagTransfer";
import LaborUpdate from "./LaborUpdate";

const Index = () => {
  return (
    <Routes>
      <Route path="/others">
        <Route path="" Component={OnlyTagEntry}></Route>
        <Route path="onlytagentry" Component={OnlyTagEntry}></Route>
        <Route path="tagprint" Component={TagPrint}></Route>
        <Route path="stockadjust" Component={StockAdjust}></Route>
        <Route path="ordercancel" Component={OrderCancel}></Route>
        <Route path="cardadjust" Component={CardAdjust}></Route>
        <Route path="physicalstock" Component={PhysicalStock}></Route>
        <Route path="phonecall" Component={PhoneCall}></Route>
        <Route path="tagweightchange" Component={TagWeightChange}></Route>
        <Route
          path="consignmentreceived"
          Component={ConsignmentReceived}
        ></Route>
        <Route path="consignmentissue" Component={ConsignmentIssue}></Route>
        <Route
          path="consignmentpurchase"
          Component={ConsignmentPurchase}
        ></Route>
        <Route path="depreciation" Component={Depreciation}></Route>
        <Route path="bankreconcile" Component={BankReconcile}></Route>
        <Route path="finejventry" Component={FineJVEntry}></Route>
        <Route path="billwiserecord" Component={BillwiseRecord}></Route>
        <Route path="countertransfer" Component={CounterTransfer}></Route>
        <Route path="serviceincome" Component={ServiceIncome}></Route>
        <Route path="tagtransfer" Component={TagTransfer}></Route>
        <Route path="laborupdate" Component={LaborUpdate}></Route>
      </Route>
    </Routes>
  );
};

export default Index;
