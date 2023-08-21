import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PartyOpening() {
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
  //   Ledger_Ac: "",
  //   Vch_No: "", 
  //   Vch_Date: "",
  //   Bill_No: "",
  //   Days: "",
  //   It_Name: "",
  //   Net_Wt: "",
  //   Touch: "",
  //   West_percetage: "",
  //   Gold_Fine: "",
  //   Silver_Fine: "",
  //   Amount: "",
  //   Cr_Dr: "",
  //   Opening_Amount: "",
  //   Opening_Gold_Fine: "",
  //   Opening_Silver_Fine: "",
  // });
  // console.log(id);

  //setting id and index
  const handleId = (ind, id) => {
    setindex(ind);
    // console.log(data[0].partyOpening);
    setid(id);
    setEditingData(data[ind]?.partyOpening || {});
    setInputs(data[ind]?.partyOpening || {});
  };

  //after filling every fields
  const handleSave = async (e) => {
    console.log("handle save");
    e.preventDefault();
    try {
      const res = await axios.post("http://www.example.com:3000/partyopening", {
        partyOpening: inputs,
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
      console.log("hi " + res.data.Data);

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
        const res = await axios.get("http://www.example.com:3000/partyopening");
        setdata(res.data.Data);
        console.log(res.data.Data[0]._id);
      } catch (error) {
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
    console.log("handle save");
    e.preventDefault();
    try {
      await axios.delete(`http://www.example.com:3000/partyopening/${id}`);

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
      const res = await axios.put(
        `http://www.example.com:3000/partyopening/${id}`,
        {
          partyOpening: inputs,
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
    // console.log("handle change");
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
    return (
      <tbody key={item._id} onClick={() => handleId(i, item?._id)}>
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{item?.partyOpening?.Bill_No}</td>
          <td>{item?.partyOpening?.It_Name}</td>
          <td>{item?.partyOpening?.Cr_Dr}</td>
          <td>{item?.partyOpening?.Cr_Dr}</td>
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
      <ToastContainer />
      <section className="form_container">
        <div className="container">
          <div className="row tiltle-row">
            <div className="col-md-12">
              <div className="heading-text">
                <h1>Party Opening</h1>
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
                          <th scope="col">AcGroup</th>
                          <th scope="col">Account Name</th>
                          <th scope="col">Dr(Udhar)Bal</th>
                          <th scope="col">Cr(Jama)Bal</th>
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
                        id="Ledger_Ac"
                        name="Ledger_Ac"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="Ledger Ac"
                        value={inputs?.Ledger_Ac || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Vch_No"
                        name="Vch_No"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="Vch No"
                        defaultValue={inputs?.Vch_No || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Bill_No"
                        name="Bill_No"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="Bill No"
                        defaultValue={inputs?.Bill_No || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Days"
                        name="Days"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="Days"
                        defaultValue={inputs?.Days || ""}
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
                        id="It_Name"
                        name="It_Name"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="It Name"
                        defaultValue={inputs?.It_Name || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Net_Wt"
                        name="Net_Wt"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="Net Wt"
                        defaultValue={inputs?.Net_Wt || ""}
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
                        onChange={handleChange}
                        placeholder="Touch"
                        defaultValue={inputs?.Touch || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="West_Percentage"
                        name="West_percentage"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="West%"
                        defaultValue={inputs?.West_percentage || ""}
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
                        id="Gold_Fine"
                        name="Gold_Fine"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="Gold Fine"
                        defaultValue={inputs?.Gold_Fine || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="Slver_Fine"
                        id="Slver_Fine"
                        name="Silver_Fine"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="Silver Fine"
                        defaultValue={inputs?.Silver_Fine || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Amount"
                        name="Amount"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="Amount"
                        defaultValue={inputs?.Amount || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Cr_Dr"
                        name="Cr_Dr"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="Cr Dr"
                        defaultValue={inputs?.Cr_Dr || ""}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <select className="custom-select" id="inputGroupSelect02" name="">
                        <option selected>BALANCE TYPE</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Opening_Amount"
                        name="Opening_Amount"
                        aria-required="true"
                        onChange={handleChange}
                        placeholder="Opening Amount"
                        defaultValue={inputs?.Opening_Amount || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Opening_Gold_Fine"
                        name="Opening_Gold_Fine"
                        aria-required="true"
                        placeholder="Opening Gold Fine"
                        onChange={handleChange}
                        defaultValue={inputs?.Opening_Gold_Fine || ""}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Opening_Silver_Fine"
                        name="Opening_Silver_Fine"
                        aria-required="true"
                        placeholder="Opening Silver Fine"
                        onChange={handleChange}
                        defaultValue={updates?.Opening_Silver_Fine || ""}
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
      {/* <section className="newtable-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table-box">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Sr.</th>
                      <th scope="col">AcGroup</th>
                      <th scope="col">Account Name</th>
                      <th scope="col">Dr(Udhar)Bal</th>
                      <th scope="col">Cr(Jama)Bal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>04</td>
                      <td>ORDER ADVANCE</td>
                      <td></td>
                      <td>10000.00</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>12</td>
                      <td>GST TAX</td>
                      <td></td>
                      <td>527852.22</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>20</td>
                      <td>PRITI DAS</td>
                      <td>500000</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
