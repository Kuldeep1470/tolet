import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/properties/propertylist.css";
import "../../css/properties/propertylistpageformobile.css";

;

const images = (photos) => {

let protocol = window.location.protocol;
let domain = window.location.hostname;
let port  = window.location.port

  return photos.map((photos, index) => {
    return (

      <div className="image-box" key={index}>
        <img
          src={`${protocol}//${domain}:${port}/uploade/${photos.fileName}`}
          alt={`${photos.fileName}`}
        />
      </div>
    );
  });
};

const scrollEle = (e)=>{

  var winScroll = e.currentTarget.scrollLeft ;
  var width = e.currentTarget.scrollWidth - e.currentTarget.clientWidth;
  var scrolled = (winScroll / width) * 100;

  
  if (scrolled < 2) { 
    e.currentTarget.parentElement.parentElement.getElementsByClassName("prev-btn")[0].style.display = "none"
  }
  else{
    e.currentTarget.parentElement.parentElement.getElementsByClassName("prev-btn")[0].style.display = "block"
  }
  if (scrolled > 90) { 
    e.currentTarget.parentElement.parentElement.getElementsByClassName("next-btn")[0].style.display = "none"
  }
  else{
    e.currentTarget.parentElement.parentElement.getElementsByClassName("next-btn")[0].style.display = "block"
  }
  if (width === 0) {
    e.currentTarget.parentElement.parentElement.getElementsByClassName("prev-btn")[0].style.display = "none"
    e.currentTarget.parentElement.parentElement.getElementsByClassName("next-btn")[0].style.display = "none"
  }
}

const hide = (e)=>{
  e.currentTarget.getElementsByClassName("prev-btn")[0].style.display = "none"
  e.currentTarget.getElementsByClassName("next-btn")[0].style.display = "none"
  
}


const scrollLeft =(e)=>{e.currentTarget.parentNode.getElementsByClassName("slideshow-container")[0].scrollBy({top: 0, left: -250, behavior: 'smooth'})}
const scrollRight=(e)=>{e.currentTarget.parentNode.getElementsByClassName("slideshow-container")[0].scrollBy({top: 0, left: 250, behavior: 'smooth'})}


const Record = (props) => (
  <div className="property-images" onMouseLeave={hide}>
    {/* this div is define for show previous image */}
     <div className="next-btn" onClick={scrollRight} >&#10095;</div>
    <Link to={`/property_detailes/${props.record._id}`}>
      {/* Slideshow container */}
      <div className="slideshow-container" onMouseOver={scrollEle}  onScroll={scrollEle} >{images(props.record.photos)}</div>
      {/* this div is define for next previous image */}
    </Link>
    <div className="prev-btn show" onClick={scrollLeft}>&#10096;</div>

    <Link
      to={`/property_detailes/${props.record._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      {/* property inforamation part start hare */}
      <div className="propertydetail">
        <div className="property_location" id="property_location">
          {props.record.property_type} available in {props.record.locality}
        </div>
        <address className="location" id="address">
          {props.record.address} | near {props.record.landmark}
        </address>
        {/* <div className="deatiles" id="deatiles"> fully furnised | yes </div> */}
        <div className="available_from" id="available_from">
          Available from : {props.record.date}
        </div>
        <div className="price" id="price">
          <b>{props.record.expected_rent}</b> ₹ par month
        </div>
      </div>
    </Link>
  </div>
);

export function Properties({ filter, changeFilterValue }) {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      let protocol = window.location.protocol;
let domain = window.location.hostname;
let port  = window.location.port
      const response = await fetch(`${protocol}//${domain}:${port}/property/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  const filterProperty = (property) => {
    if( document.getElementById("property_type").value.toLowerCase() === "all"){
      return true;
    }
    else{

      return (
        property.availableFor.toLowerCase() ===
        document.getElementById("property_for").value.toLowerCase() &&
        property.property_type.toLowerCase() ===
        document.getElementById("property_type").value.toLowerCase()
        );
      };
    }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      if (filterProperty(record)) {
        return <Record record={record} key={record._id} />;
      }
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <>
      {/* <button className="backbtn" type="button" value="go back !">&#10094;</button> */}

      {/* for filter buttons */}

      <div className="inline" style={{ transition: "0.3s ease-out" }}>
        {/* filter accordin to loacation */}
        <button className="filter">nearby</button>

        {/* this select button for select property for rent or buy */}
        <select
          name="property_for"
          id="property_for"
          value={filter.property_for}
          onChange={changeFilterValue}
        >
          <option value="rent">Rent</option>
          <option value="buy">Buy</option>
        </select>

        {/* fillter button for according price */}
        {/* <button
          className="filter"
          onClick={() => {
            document.getElementsByClassName("slider_box")[0].style.display="block";
          }}
        >
          Price{" "}
        </button> */}

        {/* filter for select type of property */}
        <div>
          <select
            name="property_type"
            id="property_type"
            value={filter.property_type}
            onChange={changeFilterValue}
          >
            <option value="all">All</option>
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
        </div>
      </div>

      {/* property images container start hare */}
      <div className="property_list_container">{recordList()}</div>
    </>
  );
}
