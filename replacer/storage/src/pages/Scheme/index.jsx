import { Route, Routes } from "react-router-dom";
import SchemeMaster from "./SchemeMaster";
import Member from "./Member";
import Opening from "./Opening";
import MonthlyEntry from "./MonthlyEntry";
import AdvanceAdjust from "./AdvanceAdjust";
import SchemeReport from "./SchemeReport";
import SchemeLedger from "./SchemeLedger";
import MonthlyReport from "./MonthlyReport";

const Index = () => {
  return (
    <Routes>
      <Route path="/scheme">
        <Route path="" Component={SchemeMaster}></Route>
        <Route path="schememaster" Component={SchemeMaster}></Route>
        <Route path="member" Component={Member}></Route>
        <Route path="opening" Component={Opening}></Route>
        <Route path="monthlyentry" Component={MonthlyEntry}></Route>
        <Route path="advanceadjust" Component={AdvanceAdjust}></Route>
        <Route path="schemereport" Component={SchemeReport}></Route>
        <Route path="schemeledger" Component={SchemeLedger}></Route>
        <Route path="monthlyreport" Component={MonthlyReport}></Route>
      </Route>
    </Routes>
  );
};

export default Index;
