import { Master_SalesmenFun } from "../../context/DataCollector";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProduct } from "../../context/Product";
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
import { Button } from "react-bootstrap";
export default function Salesmen() {
  let [Master_Product, setMaster_Product] = useState({});
  let Master_ProductFun = (e, ch) => {
    if (ch) {
      setMaster_Product(e);
    } else {
      setMaster_Product({
        ...Master_Product,
        [e.target.name]: e.target.value.toUpperCase(),
      });
    }
  };

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
    Master_ProductFun(data, true);
  };
  let [filterText, setfilterText] = useState("");
  let filterFun = (e) => {
    setfilterText(e.target.value);
    console.log(filterText);
  };
  let apiData = [];

  let data = apiData.product ? apiData.product : [];
  let [addedData, setaddedData] = useState([]);
  let DataSaveFun = (e) => {
    e.preventDefault();
    axios
      .post("http://www.example.com/productData", {
        productData: Master_Product,
      })
      .then(async () => {
        let response = await axios.get("http://www.example.com/productData");
        let modifiedData = [];
        for (let i = 0; i < response.data.Data.length; i++) {
          modifiedData.push({
            id: response.data.Data[i].productData.PRODUCT_CODE,
            name: response.data.Data[i].productData.PRODUCT_NAME,
            ...response.data.Data[i].productData,
            mainId: response.data.Data[i]._id,
          });
        }
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
  let deleteData = (e) => {
    e.preventDefault();
    axios
      .delete(`http://www.example.com/productData/${Master_Product.mainId}`, {
        PartyData: Master_Product,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get(
          "http://www.example.com/productData"
        );
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].productData.PRODUCT_CODE,
            name: dataFromDataBase.data.Data[i].productData.PRODUCT_NAME,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].productData,
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
      .patch(`http://www.example.com/productData/${Master_Product.mainId}`, {
        productData: Master_Product,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get(
          "http://www.example.com/productData"
        );
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].productData.PRODUCT_CODE,
            name: dataFromDataBase.data.Data[i].productData.PRODUCT_NAME,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].productData,
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
      });
  };
  return (
    <section className="form_container">
      <div className="container">
        <div className="row tiltle-row">
          <div className="col-md-12">
            <div className="heading-text">
              <h1>slaes men</h1>
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
            </div>
          </div>
          <div className="col-md-8">
            <form className="selectformsec">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_SalesmenFun}
                      className="form-control"
                      type="text"
                      id="Slmn_code"
                      name="Slmn_code"
                      aria-required="true"
                      placeholder="Slmn code"
                      value={
                        Master_Product.Slmn_code ? Master_Product.Slmn_code : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_SalesmenFun}
                      className="form-control"
                      type="text"
                      id="Slmn_Name"
                      name="Slmn_Name"
                      aria-required="true"
                      placeholder="Slmn Name"
                      value={
                        Master_Product.Slmn_Name ? Master_Product.Slmn_Name : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_SalesmenFun}
                      className="form-control"
                      id="Ac_Code"
                      name="Ac_Code"
                      aria-required="true"
                      placeholder="Ac Code"
                      value={
                        Master_Product.Ac_Code ? Master_Product.Ac_Code : ""
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_SalesmenFun}
                      className="form-control"
                      type="text"
                      id="Amount"
                      name="Amount"
                      aria-required="true"
                      placeholder="Amount"
                      value={Master_Product.Amount ? Master_Product.Amount : ""}
                    />
                  </div>
                </div>
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
                        Master_SalesmenFun({}, true);
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
  );
}
