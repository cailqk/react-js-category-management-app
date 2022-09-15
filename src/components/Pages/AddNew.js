import * as api from "../../Requests/API";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddNew = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [order, setOrder] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === "" || type === "" || order === "") {
      window.alert("Please fill all the fields!");
    } else {
      api
        .post("categories", {
          name,
          type,
          order: Number(order),
        })
        .then((res) => {
          history.push("details/" + res.id);
        });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>For Name</label>
        <input
          className="form-control"
          type="text"
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>For Type</label>
        <input
          className="form-control"
          type="text"
          id="type-input"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>For Order</label>
        <input
          className="form-control"
          type="number"
          id="order-input"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddNew;
