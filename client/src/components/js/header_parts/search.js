import React from "react";
import { Link } from "react-router-dom";
import "../../css/search.css";

export const Search = ({filter,changeFilterValue}) => {
  function show() {
    if (window.innerWidth >= 1000) {
      document
        .getElementById("search")
        .firstElementChild.getElementsByTagName("select")[0].style.display =
        "block";
      document
        .getElementById("search")
        .firstElementChild.getElementsByTagName("select")[1].style.display =
        "block";
      document
        .getElementById("search")
        .firstElementChild.getElementsByTagName("hr")[0].style.display =
        "block";
      document
        .getElementById("search")
        .firstElementChild.getElementsByTagName("hr")[1].style.display =
        "block";
      document
        .getElementById("search")
        .firstElementChild.getElementsByTagName("hr")[2].style.display =
        "block";
    }
  }




  return (
    <>
      {/* search bar box start hare */}
      <div
        id="search"
        onClick={() => {
          show();
        }}

        
      >
        <div className="search">
          <select name="property_for" className="property_for" value={filter.property_for} onChange={changeFilterValue}> 
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
          </select>
          <hr />
          <div className="search-input">
            <input
              value={filter.locality} onChange={changeFilterValue}
              name="locality"
              id="search-bar"
              className="search-bar"
              type="search"
              placeholder="Type to search locations.."
            />
            <div className="autocom-box">
              {/* here list are inserted from javascript  */}
            </div>
          </div>

          <hr />
          <select name="property_type" id="select" className="property_type" value={filter.property_type} onChange={changeFilterValue}>
            <option value="other">Other</option>
            <option value="Flat">Flat</option>
            <option value="Home">Home</option>
            <option value="Hostel_Pg">Hostel&P.G.</option>
            <option value="Land">Land</option>
            <option value="Office">Office</option>
            <option value="Room">Room</option>
            <option value="Shop">Shop</option>
            <option value="Showroom">Showroom</option>
            <option value="Warehouse">Warehouse</option>
          </select>
          <hr />
          <Link to={"/properties"}>
            {" "}
            <button className="search_button material-icons" type="search">
              search
            </button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
