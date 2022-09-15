import "./GetAll.css";
import * as api from "../../Requests/API";
import { useState, useEffect } from "react";
import Table from "../Table";
import Pagination from "./Pagination";
import { useHistory } from "react-router-dom";

const GetAll = () => {
  const [info, setInfo] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(null);
  const history = useHistory();
  const params = new URLSearchParams(window.location.search);

  const sortHandler = (column) => {
    if (params.get("_sort") === column) {
      let order = "";
      if (params.get("_order") === "asc") {
        order = "desc";
      } else {
        order = "asc";
      }

      params.set("_order", order);
    } else {
      params.set("_sort", column);
      params.set("_order", "asc");
    }
    history.push({ search: params.toString() });
    getCategories();
  };

  const getCategories = () => {
    let url = "categories";
    const searchParams = params.toString();

    if (searchParams !== "") {
      url += "?" + searchParams;
    }

    api.getAll(url).then((res) => {
      setLoader(false);
      setInfo(res.data);
      setPage(res.pagination)
    });
  };

  useEffect(() => {
    params.set('_limit', 5);
    params.set('_page', 1);
    history.push({ search: params.toString() });
    getCategories();
  }, []);

  const paginationHandler = (page) => {
    if(page === undefined || isNaN(page)) {
      params.set('_page', 1);
    }else {
      params.set('_page', page);
    }
    history.push({ search: params.toString() });
    getCategories()
  }

  return loader === true ? (
    <div className="loader"></div>
  ) : (
    <div>
      <h1>Categories List</h1>
      <Table categories={info} sort={sortHandler} />
      <Pagination info={page} action={paginationHandler} current={params.get('_page')}/>
    </div>
  );
};

export default GetAll;
