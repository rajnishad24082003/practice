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

const Product = () => {
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
  let [fetchedData, setfetchedData] = useState([]);
  let [isLoading, setisLoading] = useState(false);
  const [isRowClicked, setIsRowClicked] = useState(false);
  let [isSaving, setIsSaving] = useState(false);
  let getData = async (message) => {
    setisLoading(true);
    try {
      let dataFromDataBase = await axios.get("http://www.example.com/productData");
      let modifiedData = [];
      for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
        modifiedData.push({
          id: dataFromDataBase.data.Data[i].productData?.PRODUCT_CODE,
          name: dataFromDataBase.data.Data[i].productData?.PRODUCT_NAME,
          mainId: dataFromDataBase.data.Data[i]._id,
          ...dataFromDataBase.data.Data[i].productData,
        });
      }
      setfetchedData(modifiedData);
      if (message) {
        toast.success(message, {
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
      setMaster_Product({});
      setisLoading(false);
    } catch (error) {
      toast.error("cannot get products", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setisLoading(false);
    }
  };
  useEffect(() => {
    getData();
    return () => { };
  }, []);
  //table-start
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
  //table-end
  //table-funtions-start
  const rowClickFun = (data) => {
    setIsRowClicked(true); // Set isRowClicked to true when a row is clicked
    setMaster_Product(data);
  };
  let [filterText, setfilterText] = useState("");
  let filterFun = (e) => {
    setfilterText(e.target.value);
    console.log(filterText);
  };
  //table-funtions-end
  //operation-start
  let DataSaveFun = async (e) => {
    e.preventDefault();
    if (
      Master_Product.PRODUCT_CODE &&
      Master_Product.PRODUCT_NAME
    ) {
      setIsSaving(true); // Set isSaving to true when starting save operation
      try {
        await axios.post("http://www.example.com/productData", {
          productData: Master_Product,
        });
        getData("product saved");
        setMaster_Product({});
        setIsRowClicked(false);
        setIsSaving(false); // Reset isSaving after save operation
      } catch (error) {
        toast.error("cannot add product", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsRowClicked(false);
        setIsSaving(false); // Reset isSaving after save operation
      }
    } else {
      toast.error("Both fields are required", {
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


  let deleteData = async (e) => {
    e.preventDefault();
    try {
      setisLoading(true);
      await axios.delete(
        `http://www.example.com/productData/${Master_Product.mainId}`,
        {
          data: Master_Product,
        }
      );
      getData("product deleted");
      setMaster_Product({});
      setisLoading(false);
    } catch (error) {
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
      setisLoading(false);
    }
  };

  let updateData = async (e) => {
    e.preventDefault();
    try {
      setisLoading(true);
      await axios.patch(
        `http://www.example.com/productData/${Master_Product.mainId}`,
        {
          productData: Master_Product,
        }
      );
      getData("product updated");
      setMaster_Product({});
      setisLoading(false);
    } catch (error) {
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
      setisLoading(false);
    }
  };



  const clearData = () => {
    setIsRowClicked(false); // Clear row selection
    setMaster_Product({}); // Clear Master_Product
  };
  //operation-end
  return (
    <div>
      <section className="form_container">
        <div className="container">
          <div className="row tiltle-row">
            <div className="col-md-12">
              <div className="heading-text">
                <h1>Product Master</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="search-table-filter-sec">
                {isLoading ? (
                  <div className="loading"></div>
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
                            {fetchedData
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
                        count={fetchedData.length}
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
                        className="form-control"
                        type="text"
                        id="Productcode"
                        name="PRODUCT_CODE"
                        required="required"
                        aria-required="true"
                        placeholder="Product Code"
                        value={
                          Master_Product.PRODUCT_CODE
                            ? Master_Product.PRODUCT_CODE
                            : ""
                        }
                        onChange={Master_ProductFun}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Product Name"
                        name="PRODUCT_NAME"
                        aria-required="true"
                        placeholder="Product Name"
                        required="required"
                        value={
                          Master_Product.PRODUCT_NAME
                            ? Master_Product.PRODUCT_NAME
                            : ""
                        }
                        onChange={Master_ProductFun}
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
                        disabled={isRowClicked || isSaving} // Disable if a row is clicked or save is in progress
                      >
                        Save
                      </button>
                      <button
                        className="modify-btn  clear-modify"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsRowClicked(false); // Reset isRowClicked state
                          Master_ProductFun({}, true);
                        }}
                      >
                        clear
                      </button>
                      <button
                        className="modify-btn update-modify"
                        onClick={updateData}
                        disabled={!isRowClicked} // Disable if a row is not clicked
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
  );
};

export default Product;
