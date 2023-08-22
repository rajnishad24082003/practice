import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGroupMaster } from "../../context/GroupMaster";
import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
export default function Group() {
  const [isRowSelected, setIsRowSelected] = useState(false);
  let [Master_Group, setMaster_Group] = useState({});
  let Master_GroupFun = (e, ch) => {
    if (ch) {
      setMaster_Group(e);
    } else {
      setMaster_Group({
        ...Master_Group,
        [e.target.name]: e.target.value.toUpperCase(),
      });
    }
  };

  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false);


  const columns = [
    { id: "id", label: "id", minWidth: 100 },
    { id: "name", label: "name", minWidth: 150 },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let rowClickFun = (data) => {
    Master_GroupFun(data, true);
  };
  let [filterText, setfilterText] = useState("");
  let filterFun = (e) => {
    setfilterText(e.target.value);
    console.log(filterText);
  };
  let apiData = useGroupMaster();

  let data = apiData.GroupMaster ? apiData.GroupMaster : [];
  let [addedData, setaddedData] = useState([]);
  let DataSaveFun = (e) => {
    e.preventDefault();
    if (!Master_Group.Group_Code || !Master_Group.Group_Name) {
      toast.error("Group Code and Group Name are required.", {
        position: "top-right",
        // ... other toast settings
      });
      return; // Stop execution if required fields are missing
    }
  
    setSaveButtonDisabled(true);

    axios
      .post("http://www.example.com/groupData", {
        groupData: Master_Group,
      })
      .then(async () => {
        let response = await axios.get("http://www.example.com/groupData");
        let modifiedData = [];
        for (let i = 0; i < response.data.Data.length; i++) {
          modifiedData.push({
            id: response.data.Data[i].groupData?.Group_Code,
            name: response.data.Data[i].groupData?.Group_Name,
            ...response.data.Data[i].groupData,
            mainId: response.data.Data[i]._id,
          });
        }
        setSaveButtonDisabled(true)
        setaddedData(modifiedData);
        toast.success("record added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        Master_GroupFun({}, true);
        setSaveButtonDisabled(false);
      })
      .catch(function (error) {
        console.log(error);
        toast.error("error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSaveButtonDisabled(false);
      });
  };
  let deleteData = (e) => {
    e.preventDefault();
    axios
      .delete(`http://www.example.com/groupData/${Master_Group.mainId}`, {
        groupData: Master_Group,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get("http://www.example.com/groupData");
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].groupData?.Group_Code,
            name: dataFromDataBase.data.Data[i].groupData?.Group_Name,
            ...dataFromDataBase.data.Data[i].groupData,
            mainId: dataFromDataBase.data.Data[i]._id,
          });
        }
        setaddedData(modifiedData);
        toast.info("record deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        Master_GroupFun({}, true);
      })
      .catch(function (error) {
        console.log(error);
        toast.error("error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  let updateData = (e) => {
    e.preventDefault();
    axios
      .patch(`http://www.example.com/groupData/${Master_Group.mainId}`, {
        groupData: Master_Group,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get("http://www.example.com/groupData");
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].groupData.Group_Code,
            name: dataFromDataBase.data.Data[i].groupData.Group_Name,
            ...dataFromDataBase.data.Data[i].groupData,
            mainId: dataFromDataBase.data.Data[i]._id,
          });
        }
        setaddedData(modifiedData);
        toast.success("record updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(function (error) {
        console.log(error);
        toast.error("error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        Master_GroupFun({}, true);
      });
  };

  return (
    <section className="form_container">
      <ToastContainer />
      <div className="container">
        <div className="row tiltle-row">
          <div className="col-md-12">
            <div className="heading-text">
              <h1>Group Master</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="search-table-filter-sec">
              {apiData.isLoading ? (
                <div class="loading"></div>
              ) : (
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
                          {addedData.length > 0
                            ? addedData
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row) => {
                                return (
                                  <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.id}
                                    onClick={() => {
                                      rowClickFun(row);
                                    }}
                                  >
                                    {columns.map((column) => {
                                      const value = row[column.id];
                                      return (
                                        <TableCell
                                          key={column.id}
                                          align={"left"}
                                        >
                                          {value}
                                        </TableCell>
                                      );
                                    })}
                                  </TableRow>
                                );
                              })
                            : data
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row) => {
                                return (
                                  <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.id}
                                    onClick={() => {
                                      rowClickFun(row);
                                    }}
                                  >
                                    {columns.map((column) => {
                                      const value = row[column.id];
                                      return (
                                        <TableCell
                                          key={column.id}
                                          align={"left"}
                                        >
                                          {value}
                                        </TableCell>
                                      );
                                    })}
                                  </TableRow>
                                );
                              })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25, 100]}
                      component="div"
                      count={
                        addedData.length > 0 ? addedData.length : data.length
                      }
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </Paper>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-8">
            <form className="selectformsec">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Master_GroupFun}
                      value={
                        Master_Group.Group_Code ? Master_Group.Group_Code : ""
                      }
                      className="form-control"
                      type="text"
                      id="Gr"
                      name="Group_Code"
                      required
                      aria-required="true"
                      placeholder="GR code"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Master_GroupFun}
                      value={
                        Master_Group.Group_Name ? Master_Group.Group_Name : ""
                      }
                      className="form-control"
                      type="text"
                      id="GR"
                      required
                      name="Group_Name"
                      aria-required="true"
                      placeholder="GR Name"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                {/* <div className="col-md-6"> */}
                  {/* <div className="form-group-box"> */}
                    {/* <select
                      className="custom-select"
                      name="Item_Type"
                      onChange={Master_GroupFun}
                      id="Item_Type"
                      value={
                        Master_Group.Item_Type ? Master_Group.Item_Type : ""
                      }
                    >
                      <option selected>ITEM TYPE</option>
                      <option value="Jewelry">JEWELRY</option>
                      <option value="two">TWO</option>
                      <option value="three">THREE</option>
                      <option value="gold">GOLD</option>
                    </select> */}
                  {/* </div> */}
                {/* </div> */}
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Master_GroupFun}
                      value={
                        Master_Group.Group_Rate_Touch
                          ? Master_Group.Group_Rate_Touch
                          : ""
                      }
                      className="form-control"
                      type="text"
                      id="GR Rate Touch"
                      name="Group_Rate_Touch"
                      aria-required="true"
                      placeholder="GR Rate Touch"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Master_GroupFun}
                      value={
                        Master_Group.Pure_Touch ? Master_Group.Pure_Touch : ""
                      }
                      className="form-control"
                      type="text"
                      id="Purc"
                      name="Pure_Touch"
                      aria-required="true"
                      placeholder="Purc Touch"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Master_GroupFun}
                      value={
                        Master_Group.Melting_Percentage
                          ? Master_Group.Melting_Percentage
                          : ""
                      }
                      className="form-control"
                      type="text"
                      id="Melting"
                      name="Melting_Percentage"
                      aria-required="true"
                      placeholder="Melting (%) "
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Master_GroupFun}
                      value={
                        Master_Group.West_Perchantage
                          ? Master_Group.West_Perchantage
                          : ""
                      }
                      className="form-control"
                      type="text"
                      id="Con NO"
                      name="West_Perchantage"
                      aria-required="true"
                      placeholder="West (%)"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Master_GroupFun}
                      value={Master_Group.Sales_Ac ? Master_Group.Sales_Ac : ""}
                      className="form-control"
                      type="text"
                      id="Sales"
                      name="Sales_Ac"
                      aria-required="true"
                      placeholder="Sales AC"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Master_GroupFun}
                      value={
                        Master_Group.Purchase_Ac ? Master_Group.Purchase_Ac : ""
                      }
                      className="form-control"
                      type="text"
                      id="Address2"
                      name="Purchase_Ac"
                      aria-required="true"
                      placeholder="Purchase Ac"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input  
                      onChange={Master_GroupFun}
                      value={Master_Group.HSN_code ? Master_Group.HSN_code : ""}
                      className="form-control"
                      type="number"
                      id="HSN_code"
                      name="HSN_code"
                      aria-required="true"
                      placeholder="HSN Code"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <button
                    className="modify-btn save-modify"
                    onClick={DataSaveFun}
                    disabled={saveButtonDisabled}
                  >
                    Save
                  </button>
                  <button
                    className="modify-btn  clear-modify"
                    onClick={(e) => {
                      e.preventDefault();
                      Master_GroupFun({}, true);
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
                    Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
