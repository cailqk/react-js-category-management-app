import "./Pagination.css";

const Pagination = (props) => {
  return (
    <nav className="pagination-outter">
      <ul className="pagination">
        <li className="page-item" onClick={() => props.action(props.info.prev)} disabled={props.info.prev == undefined}>
          <a className="page-link" tabIndex="-1">
            {'<'}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link">
            {props.current}
          </a>
        </li>
        <li className="page-item" onClick={() => props.action(props.info.next)}>
          <a className="page-link" >
          {'>'}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
