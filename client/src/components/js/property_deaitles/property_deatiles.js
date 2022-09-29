import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import "../../css/property_detailes/property_detailes.css";
import "../../css/property_detailes/property_detailes_for_small_devices.css";

const img = (photos) => {
  if (photos) {
    let protocol = window.location.protocol;
    let domain = window.location.hostname;
    let port = window.location.port;
    return photos.map((photo, index) => {
      return (
        <div className="image_slide_box" key={index}>
          <img
            src={`${protocol}//${domain}:${port}/uploade/${photo.fileName}`}
            alt={`${photo.fileName}`}
            className="slideshow_container"
          />
        </div>
      );
    });
  }
};

const PropertyInfo = (props) => {
  return (
    <div>
      {/* this contener is for property address that show on the top of page  */}
      <div className="propertyaddress">
        <div id="for" className="for">
          available For <br /> {props.property.availableFor}
        </div>
        <div id="popertydeatiles" className="propertydeatiles">
          Shop in {props.property.locality}
        </div>
        <address
          id="address"
          className="address"
          style={{ marginTop: "-.4vw" }}
        >
          {props.property.address}, near {props.property.landmark}
        </address>
      </div>
      <div className="property_detaile_container">
        <div className="propertcontainer">
          {/* property images container start hare */}

          <div className="property_images">
            {/* Slideshow container */}
            <div>
              <div
                className="slideshow_container"
                // className="propertcontainer"
                id="property_list"
              >
                {img(props.property.photos)}
              </div>

              {/* Next and previous buttons */}
              <button
                className="next"
                onClick={() => {
                  document
                    .getElementsByClassName("slideshow_container")[0]
                    .scrollBy({ top: 0, left: 500, behavior: "smooth" });
                }}
              >
                &#10095;
              </button>
              <button
                className="prev"
                onClick={() => {
                  document
                    .getElementsByClassName("slideshow_container")[0]
                    .scrollBy({ top: 0, left: -250, behavior: "smooth" });
                }}
              >
                &#10094;
              </button>
            </div>
          </div>

          <br />

          {/* css for property info */}

          <div className="flex_item">
            <div className="propertyinfo2">
              <div className="fecilities">
                <div className="agebuild0">age of buliding</div>
                <div id="age_of_building" className="agebuild">
                  {props.property.lease_duration} years
                </div>

                <div className="parking0 ">parking</div>
                <div id="parking" className="parking">
                  {props.property.parking}
                </div>

                <div className="owner0">ownership-type</div>
                <div id="owner_type" className="owner">
                  {props.property.ownership_type}
                </div>

                <div className="floor0">floor</div>
                <div id="floor" className="floor">
                  {props.property.floor} floor
                </div>

                <div className="security0">security</div>
                <div id="security" className="security">
                  {props.property.security}
                </div>
              </div>

              <div>
                <div className="discription">
                  <p>discription</p>
                  <span id="discription" className="article">
                    {props.property.discription}
                  </span>
                </div>
              </div>
            </div>

            <div className="propertyinfo1">
              <div className="info">
                <div className="price0">price</div>
                <div id="price" className="price1">
                  ₹ {props.property.expected_rent} /month
                </div>

                <div className="area0">area</div>
                <div id="area" className="area1">
                  {props.property.property_area} {props.property.area_unit}
                </div>

                <button className="owener">contect owner</button>
              </div>

              <span className="wrong">
                <p className="pwrong">
                  Report what was worng in this information ?
                </p>
                <br />
                <button className="button1 "> Listed by Broker</button>
                <button className="button2 "> Not Available</button>
                <button className="button3 "> Wrong Inforamation</button>
              </span>
            </div>
          </div>
        </div>

        <hr
          style={{
            border: "none",
            height: "1px",
            backgroundColor: "rgb(230, 230, 230)",
            margin: "2vw 1%",
          }}
        />
        {/* this is for map api */}
        <div
          id="property_deatiles1"
          className="propertydeatiles"
          style={{ marginBottom: ".5vh" }}
        ></div>
        <div
          id="address1"
          className="address"
          style={{ marginTop: "-.4vw" }}
        ></div>

        <iframe
          title="address"
          height="500vh"
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4029.318153515002!2d75.72961283168733!3d26.79804093850352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dcb5d8a4bb963%3A0xa2802a5d067c84bb!2sToLetPlus!5e0!3m2!1sen!2sin!4v1651398090152!5m2!1sen!2sin"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <hr
          style={{
            border: "none",
            height: "1px",
            backgroundColor: "rgb(230, 230, 230)",
            margin: "3vw 1%",
          }}
        />
        <br />
      </div>
    </div>
  );
};

export const PropertyDeatiles = () => {
  const [propertyData, setData] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let protocol = window.location.protocol;
      let domain = window.location.hostname;
      let port = window.location.port;

      const id = params.id.toString();
      const response = await fetch(
        `${protocol}//${domain}:${port}/property/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setData(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // This method will map out the records on the table
  function property() {
    return <PropertyInfo property={propertyData} />;
  }

  return <>{property()}</>;
};
