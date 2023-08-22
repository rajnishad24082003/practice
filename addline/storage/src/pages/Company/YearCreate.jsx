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

import { Company_YearCreateFun } from "../../context/DataCollector";
const YearCreate = () => {
  let [Master_Product, setMaster_Product] = useState({});
  let Company_YearCreateFun = (e, ch) => {
    if (ch) {
      setMaster_Product(e);
    } else {
      setMaster_Product({
        ...Master_Product,
        [e.target.name]: e.target.value,
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
    Company_YearCreateFun(data, true);
  };
  let [filterText, setfilterText] = useState("");
  let filterFun = (e) => {
    setfilterText(e.target.value);
    console.log(filterText);
  };
  // let apiData = useProduct();

  // let data = apiData.product ? apiData.product : [];
  let data = [];
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
    <>
      <div>
        <section className="form_container">
          <div className="container">
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>Year Create</h1>
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
                    <div className="col-md-6">
                      <div className="form-group-box">
                        <input
                          className="form-control"
                          type="text"
                          id="Year_Code"
                          name="Year_Code"
                          aria-required="true"
                          placeholder="Year Code"
                          value={
                            Master_Product.Year_Code
                              ? Master_Product.Year_Code
                              : ""
                          }
                          onChange={Company_YearCreateFun}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group-box">
                        <input
                          className="form-control"
                          type="text"
                          id="Opening_Date"
                          name="Opening_Date"
                          aria-required="true"
                          placeholder="Opening Date"
                          value={
                            Master_Product.Opening_Date
                              ? Master_Product.Opening_Date
                              : ""
                          }
                          onChange={Company_YearCreateFun}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group-box">
                        <input
                          className="form-control"
                          type="text"
                          id="Closing_Date"
                          name="Closing_Date"
                          aria-required="true"
                          placeholder="Closing Date"
                          value={
                            Master_Product.Closing_Date
                              ? Master_Product.Closing_Date
                              : ""
                          }
                          onChange={Company_YearCreateFun}
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
                            Company_YearCreateFun({}, true);
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
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default YearCreate;
