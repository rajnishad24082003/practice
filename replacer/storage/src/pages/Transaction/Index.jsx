import { Route, Routes } from "react-router-dom";
import Purchase from "./Purchase";
import OtherPurchase from "./OtherPurchase";
import TagCancel from "./TagCancel";
import Wholesales from "./Wholesales";
import SalesOrder from "./SalesOrder";
import DeliveryChallan from "./DeliveryChallan";
import LaborWork from "./LaborWork";
import OldItemSales from "./OldItemSales";
import RateCut from "./RateCut";
import PurchaseReturn from "./PurchaseReturn";
import Sales from "./Sales";
import SalesReturn from "./SalesReturn";
import ApprovalIssue from "./ApprovalIssue";
import ApprovalReturn from "./ApprovalReturn";
import CashReceived from "./CashReceived";
import CashPayment from "./CashPayment";
import BankPayment from "./BankPayment";
import ContractEntry from "./ContractEntry";

const Index = () => {
  return (
    <Routes>
      <Route path="/transaction">
        <Route path="" Component={Purchase}></Route>
        <Route path="otherpurchase" Component={OtherPurchase}></Route>
        <Route path="tagcancel" Component={TagCancel}></Route>
        <Route path="wholesales" Component={Wholesales}></Route>
        <Route path="salesorder" Component={SalesOrder}></Route>
        <Route path="deliverychallan" Component={DeliveryChallan}></Route>
        <Route path="laborwork" Component={LaborWork}></Route>
        <Route path="olditemsales" Component={OldItemSales}></Route>
        <Route path="purchasereturn" Component={PurchaseReturn}></Route>
        <Route path="ratecut" Component={RateCut}></Route>
        <Route path="sales" Component={Sales}></Route>
        <Route path="salesreturn" Component={SalesReturn}></Route>
        <Route path="TagCancel" Component={TagCancel}></Route>
        <Route path="approvalissue" Component={ApprovalIssue}></Route>
        <Route path="approvalreturn" Component={ApprovalReturn}></Route>
        <Route path="cashreceived" Component={CashReceived}></Route>
        <Route path="cashpayment" Component={CashPayment}></Route>
        <Route path="bankpayment" Component={BankPayment}></Route>
        <Route path="contractentry" Component={ContractEntry}></Route>
      </Route>
    </Routes>
  );
};

export default Index;
