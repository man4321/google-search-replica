import React, { useState } from "react";
import { searchApi } from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./search.css";
const GoogleSearch = (props) => {
  const { searchApi, suggestion } = props;
  const [search, setSearch] = useState({ data: "" });
  const inputHandler = (event) => {
    const data = event.target.value;
    setSearch({ ...search, data: data });
    searchApi(search.data);
  };
  const handleClick = (index) => {
    const data = suggestion[index];
    setSearch({ ...search, data: data });
  };

  return (
    <div className="main">
      <h3>Search auto-suggestion in React</h3>
      <input
        type="text"
        value={search.data}
        onChange={(event) => inputHandler(event)}
        placeholder="Search..."
        autoFocus
      />
      {search.data.length !== 0 && (
        <li className="sel" style={{ backgroundColor: "rgb(233, 227, 229)" }}>
          <strong>{search.data}</strong>
        </li>
      )}
      {search.data.length !== 0 &&
        suggestion.map((data, index) => (
          <li 
            key={index}
            className="sel"
            onClick={() => {
              handleClick(index);
            }}
          >
            {data.split(" ").map((d,i) => {
              if (search.data.includes(d)) return <strong key={i}>{d + " "}</strong>;
              else return <span key={i}>{d + " "}</span>;
            })}
          </li>
        ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    suggestion: state.suggestion,
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
