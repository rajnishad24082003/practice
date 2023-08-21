import { Route, Routes } from "react-router-dom";
import Party from "./Party";
import Area from "./Area";
import Address from "./Address";
import Product from "./Product";
import Group from "./Group";
import Counter from "./Counter";
import Item from "./Item";
import Tax from "./Tax";
import Salesmen from "./Salesmen";
import PartyOpening from "./PartyOpening";
import ItemOpening from "./ItemOpening";
// import ItemOpening from "./ItemOpening";
import TagOpening from "./TagOpening";
// import FilteringTable from "../../components/Report-Dashboard/ReportData";

const Index = () => {
  return (
    <Routes>
      <Route path="/master">
        <Route path="" Component={Party}></Route>
        <Route path="Area" Component={Area}></Route>
        <Route path="Address" Component={Address}></Route>
        <Route path="Product" Component={Product}></Route>
        <Route path="Group" Component={Group}></Route>
        <Route path="Counter" Component={Counter}></Route>
        <Route path="item" Component={Item}></Route>
        <Route path="tax" Component={Tax}></Route>
        <Route path="salesmen" Component={Salesmen}></Route>
        <Route path="ItemOpening" Component={ItemOpening}></Route>
        <Route path="TagOpening" Component={TagOpening}></Route>
        {/* <Route path="report" Component={FilteringTable}></Route> */}
        <Route path="PartyOpening" Component={PartyOpening}></Route>
      </Route>
    </Routes>
  );
};

export default Index;
