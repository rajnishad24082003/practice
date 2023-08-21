import { Route, Routes } from "react-router-dom";
import Issue from "./Issue";
import InterestReceived from "./InterestReceived";
import Received from "./Received";
import InterestRecordAll from "./InterestRecordAll";
import DhiranReport from "./DhiranReport";
import DhiranRojmel from "./DhiranRojmel";
import InterestReport from "./InterestReport";
import DhiranDue from "./DhiranDue";
import LoanReceived from "./LoanReceived";
import LoanIssue from "./LoanIssue";
import InterestIssueAll from "./InterestIssueAll";
import LoanReport from "./LoanReport";
import LoanInterest from "./LoanInterest";

const Index = () => {
  return (
    <Routes>
      <Route path="/dhiran">
        <Route path="" Component={Issue}></Route>
        <Route path="issue" Component={Issue}></Route>
        <Route path="interestreceived" Component={InterestReceived}></Route>
        <Route path="received" Component={Received}></Route>
        <Route path="interestrecordall" Component={InterestRecordAll}></Route>
        <Route path="dhiranreport" Component={DhiranReport}></Route>
        <Route path="dhiranrojmel" Component={DhiranRojmel}></Route>
        <Route path="interestreport" Component={InterestReport}></Route>
        <Route path="dhirandue" Component={DhiranDue}></Route>
        <Route path="loanreceived" Component={LoanReceived}></Route>
        <Route path="loanissue" Component={LoanIssue}></Route>
        <Route path="interestissueall" Component={InterestIssueAll}></Route>
        <Route path="loanreport" Component={LoanReport}></Route>
        <Route path="loaninterest" Component={LoanInterest}></Route>
      </Route>
    </Routes>
  );
};

export default Index;
