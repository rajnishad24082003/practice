import { Route, Routes } from "react-router-dom";
import IssueItem from "./IssueItem";
import DesignIssue from "./DesignIssue";
import TagwiseReceived from "./TagwiseReceived";
import RepairingRecord from "./RepairingRecord";
import KarigarIssue from "./KarigarIssue";
import KarigarRecord from "./KarigarRecord";
import RepairingDelivery from "./RepairingDelivery";
import CustomerGoldRecord from "./CustomerGoldRecord";
import KarigarIssueGold from "./KarigarIssueGold";
import KarigarRecordOrnament from "./KarigarRecordOrnament";
import CustomerOrnamentDelivery from "./CustomerOrnamentDelivery";
import KarigarItemReturn from "./KarigarItemReturn";
import IssueReceiptReport from "./IssueReceiptReport";

const Index = () => {
  return (
    <Routes>
      <Route path="/karigar">
        <Route path="" Component={IssueItem}></Route>
        <Route path="issueitem" Component={IssueItem}></Route>
        <Route path="designissue" Component={DesignIssue}></Route>
        <Route path="tagwisereceived" Component={TagwiseReceived}></Route>
        <Route path="repairingrecord" Component={RepairingRecord}></Route>
        <Route path="karigarissue" Component={KarigarIssue}></Route>
        <Route path="karigarrecord" Component={KarigarRecord}></Route>
        <Route path="repairingdelivery" Component={RepairingDelivery}></Route>
        <Route path="customergoldrecord" Component={CustomerGoldRecord}></Route>
        <Route path="karigarissuegold" Component={KarigarIssueGold}></Route>
        <Route
          path="karigarrecordornament"
          Component={KarigarRecordOrnament}
        ></Route>
        <Route
          path="customerornamentdelivery"
          Component={CustomerOrnamentDelivery}
        ></Route>
        <Route path="karigaritemreturn" Component={KarigarItemReturn}></Route>
        <Route path="issuereceiptreport" Component={IssueReceiptReport}></Route>
      </Route>
    </Routes>
  );
};

export default Index;
