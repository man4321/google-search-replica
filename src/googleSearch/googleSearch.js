import React, { useState } from "react";
import { searchApi } from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./search.css";
const GoogleSearch = (props) => {
  const { searchApi, suggeation } = props;
  const [search, setSearch] = useState({ data: "" });
  const inputHandler = (event) => {
    const data = event.target.value;
    setSearch({ ...search, data: data });
    searchApi(search.data);
  };
  console.log(suggeation);
  return (
    <div className="main">
      <h3>Search autocomplete in React</h3>
      <input value={search.data} onChange={(event) => inputHandler(event)} placeholder="Search..." autoFocus/>
      {suggeation.map((data) => (
        <p className="sel">
          {data.split(" ").map((d) => {
            if (search.data.includes(d)) return <strong>{d+" "}</strong>;
            else return <span>{d+" "}</span>;
          })}
        </p>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    suggeation: state.suggeation,
  };
};
const mapActionToProps = (dispatch) => {
  return bindActionCreators(
    {
      searchApi,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(GoogleSearch);
