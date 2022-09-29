import React from "react";
import { Link } from "react-router-dom";
import { Front } from "./header_parts/front";
import "../css/home.css";

export const Home = ({filter , changeFilterValue}) => {
  const click=(e)=>{
    e.currentTarget.parentElement.lastChild.click();
  }

  return (
    <>
      <Front />

      <div className="home_elements">
        {/* property-categaries start hare */}
        <div id="property" className="property-categaries">
          <p className="large-font">Click what you want</p>

          {/* categaries list on home page  */}

          {/* homes */}
          <Link to={"/properties"}>
            <button
            onClick={click}
              className="home"
            >
              <h1>Homes</h1>
            </button>
            <input style={{display:"none"}} type="button" name="property_type"  onClick={changeFilterValue}  value={"Home"}/>

          </Link>

          {/* shops */}
          <Link to={"/properties"}>
            <button
            onClick={click}
            className="categary-box shops"
            >
              <h1>Shops</h1>
            </button>
            <input style={{display:"none"}} type="button" name="property_type"  onClick={changeFilterValue} value={"Shop"}/>
          </Link>

          {/* showrooms */}
          <Link to={"/properties"}>
            <button
              onClick={click}
              className="categary-box showrooms"
              >
              <h1>Showrooms</h1>
            </button>
            <input style={{display:"none"}} type="button" name="property_type"  onClick={changeFilterValue} value={"Showroom"}/>
          </Link>

          {/* rooms */}
          <Link to={"/properties"}>
            <button
              onClick={click}
              className="categary-box room"
              >
              <h1>Want a room</h1>
            </button>
            <input style={{display:"none"}} type="button" name="property_type"  onClick={changeFilterValue} defaultValue={"Room"}/>
          </Link>

          {/* land */}
          <Link to={"/properties"}>
            <button
              onClick={click}
              className="categary-box land"
              >
              <h1>Find land area</h1>
            </button>
            <input style={{display:"none"}} type="button" name="property_type"  onClick={changeFilterValue} defaultValue={"Land"}/>
          </Link>

          {/* offices */}
          <Link to={"/properties"}>
            <button
              onClick={click}
              className="categary-box office"
              >
              <h1>Office</h1>
            </button>
            <input style={{display:"none"}} type="button" name="property_type"  onClick={changeFilterValue} defaultValue={"Office"}/>
          </Link>

          {/* hostelandpg */}
          <Link to={"/properties"}>
            <button
              onClick={click}
              className="categary-box hostel-pg"
              >
              <h1>Hostel/P.G.</h1>
            </button>
            <input style={{display:"none"}} type="button" name="property_type"  onClick={changeFilterValue} defaultValue={"Hostel_Pg"}/>
          </Link>

          {/* flats */}
          <Link to={"/properties"}>
            <button
              onClick={click}
              className="categary-box flat"
              >
              <h1>Flats</h1>
            </button>
            <input style={{display:"none"}} type="button" name="property_type"  onClick={changeFilterValue} defaultValue={"Flat"}/>
          </Link>

          {/* warehouses */}
          <Link to={"/properties"}>
            <button
              onClick={click}
              id="warehouses"
              className="categary-box warehouse"
            >
              <h1>Warehouses</h1>
            </button>
            <input style={{display:"none"}} type="button" name="property_type"  onClick={changeFilterValue} defaultValue={"Warehouse"}/>
          </Link>
        </div>
      </div>
    </>
  );
};
