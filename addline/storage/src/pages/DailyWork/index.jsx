import { Route, Routes } from "react-router-dom";
import DailyRate from "./DailyRate";
import ReminderEntry from "./ReminderEntry";
import CashBook from "./CashBook";
import ItemInOut from "./ItemInOut";
import Rojmel from "./Rojmel";
import AmountRojmel from "./AmountRojmel";
import DailyReminder from "./DailyReminder";

const Index = () => {
  return (
    <Routes>
      <Route path="/dailywork">
        <Route path="" Component={DailyRate}></Route>
        <Route path="dailyrate" Component={DailyRate}></Route>
        <Route path="reminderentry" Component={ReminderEntry}></Route>
        <Route path="cashbook" Component={CashBook}></Route>
        <Route path="iteminout" Component={ItemInOut}></Route>
        <Route path="rojmel" Component={Rojmel}></Route>
        <Route path="amountrojmel" Component={AmountRojmel}></Route>
        <Route path="dailyreminder" Component={DailyReminder}></Route>
      </Route>
    </Routes>
  );
};

export default Index;
