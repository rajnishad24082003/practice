import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Company() {
  const [PartyMaster, setPartyMaster] = useState({});
  const [addedData, setAddedData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://www.example.com/partyData");
      const data = response?.data?.Data || []; // Use optional chaining and provide a default value if response.data.Data is null or undefined
      console.log(response);
      let modifiedData = data.map((item) => ({
        id: item.partyData.Ac_Code,
        name: item.partyData.Ac_Name,
        ...item.partyData,
        mainId: item._id,
      }));

      setAddedData(modifiedData);
      console.log(modifiedData);
      // console.log(item);
    } catch (error) {
      // console.log(item);
      console.log(error);
      toast.error("Error fetching data", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filterFun = (e) => {
    setFilterText(e.target.value);
  };

  const rowClickFun = (data) => {
    Company_CompanyFun(data, true);
  };

  const Company_CompanyFun = (e, ch) => {
    if (ch) {
      setPartyMaster(e);
    } else {
      setPartyMaster({
        ...PartyMaster,
        [e.target.name]: e.target.value,
      });
    }
  };

  const DataSaveFun = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.post("http://www.example.com/partyData", {
    //     partyData: PartyMaster,
    //   });
    //   fetchData();
    //   toast.success("Record added", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Error adding record", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
  };

  const deleteData = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.delete(`http://www.example.com/partyData/${PartyMaster.mainId}`);
    //   fetchData();
    //   toast.info("Record deleted", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Error deleting record", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
  };

  const updateData = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.patch(`http://www.example.com/partyData/${PartyMaster.mainId}`, {
    //     partyData: PartyMaster,
    //   });
    //   fetchData();
    //   toast.success("Record updated", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Error updating record", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
  };

  const columns = [
    { id: "id", label: "id", minWidth: 100 },
    { id: "name", label: "name", minWidth: 150 },
  ];

  const filteredData = addedData.filter(
    (item) =>
      item.name?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.id.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <section className="form_container">
        <div className="container">
          <div className="row tiltle-row">
            <div className="col-md-12">
              <div className="heading-text">
                <h1>Company Master</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="search-table-filter-sec">
                <div>
                  <input
                    className="search-input-btn"
                    name="filter"
                    onChange={filterFun}
                    placeholder="Search...."
                    value={filterText}
                  ></input>
                  <Paper sx={{ width: "100%", overflow: "hidden" }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table
                        stickyHeader
                        aria-label="sticky table"
                        className="table table-striped table-bordered table-hover"
                      >
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {filteredData
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.id}
                                onClick={() => rowClickFun(row)}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell key={column.id} align="left">
                                      {value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25, 100]}
                      component="div"
                      count={PartyMaster.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </Paper>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <form className="selectformsec">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="Code"
                        name="Code"
                        aria-required="true"
                        placeholder="Code"
                        value={PartyMaster.Code ? PartyMaster.Code : ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="Co_Name"
                        name="Co_Name"
                        aria-required="true"
                        placeholder="Co Name"
                        value={PartyMaster.Co_Name ? PartyMaster.Co_Name : ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <textarea
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="Address"
                        name="Address"
                        aria-required="true"
                        placeholder="Address"
                        value={PartyMaster.Address ? PartyMaster.Address : ""}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="number"
                        id="STATE"
                        name="STATE"
                        aria-required="true"
                        placeholder="STATE"
                        value={PartyMaster.STATE ? PartyMaster.STATE : ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="City"
                        name="City"
                        aria-required="true"
                        placeholder="City"
                        value={PartyMaster.City ? PartyMaster.City : ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="number"
                        id="Pin_Code"
                        name="Pin_Code"
                        aria-required="true"
                        placeholder="Pin code"
                        value={PartyMaster.Pin_Code ? PartyMaster.Pin_Code : ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="number"
                        id="Phone_NO"
                        name="Phone_NO"
                        aria-required="true"
                        placeholder="Phone NO"
                        value={PartyMaster.Phone_NO ? PartyMaster.Phone_NO : ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="number"
                        id="Mobile_No"
                        name="Mobile_No"
                        aria-required="true"
                        placeholder="Mobile No"
                        value={
                          PartyMaster.Mobile_No ? PartyMaster.Mobile_No : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="email"
                        id="Email"
                        name="Email"
                        aria-required="true"
                        placeholder="Email"
                        value={PartyMaster.Email ? PartyMaster.Email : ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="number"
                        id="Tin_NO"
                        name="Tin_NO"
                        aria-required="true"
                        placeholder="Tin NO"
                        value={PartyMaster.Tin_NO ? PartyMaster.Tin_NO : ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="CST_NO"
                        name="CST_NO"
                        aria-required="true"
                        placeholder="CST NO"
                        value={PartyMaster.CST_NO ? PartyMaster.CST_NO : ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="PAN_NO"
                        name="PAN_No"
                        aria-required="true"
                        placeholder="PAN NO"
                        value={PartyMaster.PAN_NO ? PartyMaster.PAN_NO : ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="Dhiran_No"
                        name="Dhiran_No"
                        aria-required="true"
                        placeholder="Dhiran No"
                        value={
                          PartyMaster.Dhiran_No ? PartyMaster.Dhiran_No : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="GST_NO"
                        name="GST_NO"
                        aria-required="true"
                        placeholder="GST NO"
                        value={PartyMaster.GST_NO ? PartyMaster.GST_NO : ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="EXCISC NO"
                        name="EXCISC_NO"
                        aria-required="true"
                        placeholder="EXCISC NO"
                        value={
                          PartyMaster.EXCISC_NO ? PartyMaster.EXCISC_NO : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="jurisdiction NO"
                        name="jurisdiction_NO"
                        aria-required="true"
                        placeholder="jurisdiction NO"
                        value={
                          PartyMaster.jurisdiction_NO
                            ? PartyMaster.jurisdiction_NO
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="Bank_Name"
                        name="Bank_Name"
                        aria-required="true"
                        placeholder="Bank Name"
                        value={
                          PartyMaster.Bank_Name ? PartyMaster.Bank_Name : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="Branch"
                        name="Branch_Name"
                        aria-required="true"
                        placeholder="Branch Name"
                        value={
                          PartyMaster.Branch_Name ? PartyMaster.Branch_Name : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="Bank_AC"
                        name="Bank_AC"
                        aria-required="true"
                        placeholder="Bank A/C"
                        value={PartyMaster.Bank_AC ? PartyMaster.Bank_AC : ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group-box">
                      <input
                        onChange={Company_CompanyFun}
                        className="form-control"
                        type="text"
                        id="Rtgs_No"
                        name="Rtgs_No"
                        aria-required="true"
                        placeholder="Rtgs  No"
                        value={PartyMaster.Rtgs_No ? PartyMaster.Rtgs_No : ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="btn-box">
                      <button
                        className="modify-btn save-modify"
                        onClick={DataSaveFun}
                      >
                        Save
                      </button>
                      <button
                        className="modify-btn  clear-modify"
                        onClick={(e) => {
                          e.preventDefault();
                          Company_CompanyFun({}, true);
                        }}
                      >
                        clear
                      </button>
                      <button
                        className="modify-btn update-modify"
                        onClick={updateData}
                      >
                        update
                      </button>
                      <button
                        className="modify-btn delete-modify"
                        onClick={deleteData}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
