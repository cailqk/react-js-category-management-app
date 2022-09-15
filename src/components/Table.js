import "./Table.css";
import { useHistory } from "react-router-dom";

const Table = (props) => {
  const history = useHistory();

  const clickHandler = (categoryId) => {
    history.push("/details/" + categoryId);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => props.sort("id")}>
              ID <i className="fas fa-arrows-alt-v"></i>
            </th>
            <th onClick={() => props.sort("name")}>
              Name <i className="fas fa-arrows-alt-v"></i>
            </th>
            <th>Type</th>
            <th onClick={() => props.sort("order")}>
              Order <i className="fas fa-arrows-alt-v"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.categories.length === 0 && (
            <tr>
              <td colSpan={4}>No Data</td>
            </tr>
          )}
          {props.categories.length > 0 &&
            props.categories.map((el) => {
              return (
                <tr
                  key={el.id}
                  onClick={() => {
                    clickHandler(el.id);
                  }}
                  className="tr"
                >
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.type}</td>
                  <td>{el.order}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
