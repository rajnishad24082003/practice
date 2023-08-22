import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemOpening() {
  // function for clearing fields
  const ref = React.useRef();

  function handleclear(ev) {
    ev.preventDefault();
    ref.current.reset();
    setInputs({});
  }
  //sates
  const [id, setid] = useState();
  const [index, setindex] = useState();
  const [data, setdata] = useState([]);
  const [flag, setflag] = useState(false);
  const [inputs, setInputs] = useState({});
  const [updates, setupdates] = useState({});

  // Separate state for editing
  const [editingData, setEditingData] = useState({});

  // Set up editingData with updates when the component mounts
  useEffect(() => {
    setEditingData(updates);
  }, [updates]);

  // const [opening, setopening] = useState({
  //   Group_Code: "",
  //   // Sr: "",
  //   Item_Code: "",
  //   Item_Name: "",
  //   Pcs: "",
  //   Gram_Weight: "",
  //   Net_Weight: "",
  //   Touch: "",
  //   Fine: "",
  //   Rate: "",
  //   Item_Amount: "",
  //   Labour_Rate: "",
  //   Other_Amount: "",
  //   Net_Amount: "",
  // });
  //   console.log(id);

  //setting id and index
  const handleId = async (ind, id) => {
    setindex(ind);
    // console.log(data[0].ItemOpening);
    setid(id);
    setEditingData(data[ind]?.itemOpening || {});
    setInputs(data[ind]?.itemOpening || {});
  };

  //after filling every fields
  const handleSave = async (e) => {
    console.log("handle save");
    e.preventDefault();
    try {
      // console.log(opening);
      const res = await axios.post("http://www.example.com:3000/itemopening", {
        itemOpening: inputs,
      });
      toast.success("Record inserted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setdata(res.data.Data);
      // console.log("hi " + res.data);
      setflag(!flag);
      setInputs({})
    } catch (error) {
      console.log(error);
    }
  };

  //fetching initial data or after delete or after update
  useEffect(() => {
    const Getdata = async () => {
      try {
        const res = await axios.get("http://www.example.com:3000/itemopening");
        setdata(res.data.Data);
        // console.log(res.data.Data[0]._id);
      } catch (error) {
        console.log(error);
        toast.error("Try again", {
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
    Getdata();
  }, [flag]);

  //delete function
  const handleDelete = async (e) => {
    console.log("hand;e save");
    e.preventDefault();
    try {
      await axios.delete(`http://www.example.com:3000/itemopening/${id}`);

      toast.success("record deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setflag(!flag);
      setInputs({})
    } catch (error) {
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
    }
  };

  //edit function
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://www.example.com:3000/itemopening/${id}`,
        {
          itemOpening: inputs,
        }
      );

      toast.success("record edited", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setflag(!flag);
      setInputs({})
    } catch (error) {
      toast.error(error, {
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

  //getting data during change
  const handleChange = (e) => {
    console.log("handle change");
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value.toUpperCase(),
    }));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  // Calculate the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const tableRows = currentItems?.map((item, i) => {
    // console.log(item.itemOpening);
    return (
      <tbody key={item._id} onClick={() => handleId(i, item?._id)}>
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{item?.itemOpening?.Group_Code}</td>
          {/* <td>{item?.itemOpening?.Sr}</td> */}
          <td>{item?.itemOpening?.Item_Code}</td>
          <td>{item?.itemOpening?.Item_Name}</td>
          <td>{item?.itemOpening?.Pcs}</td>
          <td>{item?.itemOpening?.Gram_Weight}</td>
          <td>{item?.itemOpening?.Net_Weight}</td>
          <td>{item?.itemOpening?.Touch}</td>
          <td>{item?.itemOpening?.Fine}</td>
          <td>{item?.itemOpening?.Rate}</td>
          <td>{item?.itemOpening?.Item_Amount}</td>
          <td>{item?.itemOpening?.Labour_Rate}</td>
          <td>{item?.itemOpening?.Other_Amount}</td>
          <td>{item?.itemOpening?.Net_Amount}</td>
        </tr>
      </tbody>
    );
  });

  // Pagination controls
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationLinks.push(
      <button
        key={i}
        className={currentPage === i ? "active" : ""}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      <section className="form_container">
        <ToastContainer/>
        <div className="container">
          <div className="row tiltle-row">
            <div className="col-md-12">
              <div className="heading-text">
                <h1>Item Wise Opening Stock</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4  table-left">
              <div className="left-box">
                <div className="table-row">
                  <div className="table-box">
                    <table className="table table-bordered">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col">Group Code.</th>
                          <th scope="col">ItCode</th>
                          <th scope="col">ItCode Name</th>
                          <th scope="col">pcs</th>
                          <th scope="col">Gram Weight</th>
                          <th scope="col">NetWt</th>
                          <th scope="col">Touch</th>
                          <th scope="col">Fine</th>
                          <th scope="col">Rate</th>
                          <th scope="col">ItemAmt</th>
                          <th scope="col">Labour_Rate</th>
                          <th scope="col">OthAmt</th>
                          <th scope="col">NetAmt</th>
                        </tr>
                      </thead>
                      {tableRows}
                    </table>
                  </div>
                </div>
                <div className="pagination">
                  <button onClick={handlePrevPage}>Previous</button>
                  {paginationLinks}
                  <button onClick={handleNextPage}>Next</button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <form className="selectformsec" ref={ref}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Group_Code"
                        name="Group_Code"
                        aria-required="true"
                        placeholder="Group Code"
                        onChange={handleChange}
                        value={inputs?.Group_Code || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Sr"
                        name="Sr"
                        aria-required="true"
                        placeholder="Sr."
                        onChange={handleChange}
                        value={inputs?.Sr || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Item_Code"
                        name="Item_Code"
                        aria-required="true"
                        placeholder="It Code"
                        onChange={handleChange}
                        value={inputs?.Item_Code || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Item_Name"
                        name="Item_Name"
                        aria-required="true"
                        placeholder="Item Name"
                        onChange={handleChange}
                        value={inputs?.Item_Name || ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Pcs"
                        name="Pcs"
                        aria-required="true"
                        placeholder="IPcs"
                        onChange={handleChange}
                        value={inputs?.Pcs || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Gr_Wt"
                        name="Gram_Weight"
                        aria-required="true"
                        placeholder="Gr Wt"
                        onChange={handleChange}
                        value={inputs?.Gram_Weight || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Net_Weight"
                        name="Net_Weight"
                        aria-required="true"
                        placeholder="Net Wt"
                        onChange={handleChange}
                        value={inputs?.Net_Weight || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Touch"
                        name="Touch"
                        aria-required="true"
                        placeholder="Touch"
                        onChange={handleChange}
                        value={inputs?.Touch || ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Fine"
                        name="Fine"
                        aria-required="true"
                        placeholder="Fine"
                        onChange={handleChange}
                        value={inputs?.Fine || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Rate"
                        name="Rate"
                        aria-required="true"
                        placeholder="Rate"
                        onChange={handleChange}
                        value={inputs?.Rate || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Item_Amount"
                        name="Item_Amount"
                        aria-required="true"
                        placeholder="Item Amount"
                        onChange={handleChange}
                        value={inputs?.Item_Amount || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Labour_Rate"
                        name="Labour_Rate"
                        aria-required="true"
                        placeholder="Lbr Amt"
                        onChange={handleChange}
                        value={inputs?.Labour_Rate || ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Other_Amount"
                        name="Other_Amount"
                        aria-required="true"
                        placeholder="Oth Amt"
                        onChange={handleChange}
                        value={inputs?.Other_Amount || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Net_Amount"
                        name="Net_Amount"
                        aria-required="true"
                        placeholder="Net Amt"
                        onChange={handleChange}
                        value={inputs?.Net_Amount || ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="btn-box">
                      <button
                        className="modify-btn save-modify"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                      <button
                        className="modify-btn  clear-modify"
                        onClick={handleclear}
                      >
                        clear
                      </button>
                      <button
                        className="modify-btn update-modify"
                        onClick={handleEdit}
                      >
                        update
                      </button>
                      <button
                        className="modify-btn delete-modify"
                        onClick={handleDelete}
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
