import { Route, Routes } from "react-router-dom";
import Company from "./Company";
import YearCreate from "./YearCreate";
import BalanceTransfer from "./BalanceTransfer";
import AccountGroup from "./AccountGroup";
import UserCreate from "./UserCreate";
import UserRights from "./UserRights";
import Settings from "./Settings";
import Books from "./Books";
import DataRefresh from "./DataRefresh";
import DataBackup from "./DataBackup";
import Dashboard from "../Dashboard";
import UserProfile from "../UserProfile";
import Invoice from "../Invoicegenerator";

const Index = () => {
  return (
    <Routes>
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/pdf" element={<Invoice />} />
      <Route path="/company">
        <Route path="" Component={Company}></Route>
        <Route path="yearcreate" Component={YearCreate}></Route>
        <Route path="balancetransfer" Component={BalanceTransfer}></Route>
        <Route path="accountgroup" Component={AccountGroup}></Route>
        <Route path="usercreate" Component={UserCreate}></Route>
        <Route path="userrights" Component={UserRights}></Route>
        <Route path="settings" Component={Settings}></Route>
        <Route path="books" Component={Books}></Route>
        <Route path="datarefresh" Component={DataRefresh}></Route>
        <Route path="databackup" Component={DataBackup}></Route>
      </Route>
    </Routes>
  );
};

export default Index;
