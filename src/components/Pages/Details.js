import "./Details.css";
import * as api from "../../Requests/API";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const [category, setCategory] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [order, setOrder] = useState("");

  const backToAll = () => {
    history.push("/categories");
  };

  useEffect(() => {
    api.get("categories/" + id).then((res) => {
      setName(res.name);
      setType(res.type);
      setOrder(res.order);
      setCategory(res);
    });
  }, []);

  const deleteHandler = () => {
    if (
      window.confirm("Would you really like to delete this information ?") ===
      true
    ) {
      api.del("categories/" + category.id).then((res) => {
        history.push("/categories");
      });
    } else {
      console.log("not ok");
    }
  };

  const saveHandler = () => {
    console.log(name);

    api
      .patch("categories/" + category.id, {
        name,
        type,
        order,
      })
      .then((res) => {
        console.log(res);
        history.push("/categories");
      });
  };

  return (
    <div className="content">
      <h1>Details for {category.name}</h1>
      <form className="detail-form">
        <div>
          <label>Name</label>
          <input
            defaultValue={category.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Type</label>
          <input
            defaultValue={category.type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <label>Order</label>
        <input
          defaultValue={category.order}
          onChange={(e) => setOrder(e.target.value)}
        />
      </form>
      <div className="buttons">
        <button className="save-btn" onClick={saveHandler}>
          Save
        </button>
        <button className="delete-btn" onClick={deleteHandler}>
          Delete
        </button>
        <button className="back-btn" onClick={backToAll}>
          Back to All
        </button>
      </div>
    </div>
  );
};

export default Details;
