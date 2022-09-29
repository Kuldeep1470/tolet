import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import "../../css/add_property_from/post_property_form_page_for_mobile.css";
import "../../css/add_property_from/post_property_form_page.css";

const AddProperty = () => {
  var today = () => {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    return year + "-" + month + "-" + day;
  };

  const [form, setForm] = useState({
    availableFor: "Rent",
    floor: "nobuilding",
    ownership_type: "Owner",
    property_type: "Other",
    ageOfProperty: "less then one year",
    property_area: "",
    area_unit: "",
    furnished: "Un Furnished",
    city: "jaipur",
    landmark: "",
    locality: "",
    address: "",
    expected_rent: "",
    monthly_maintenance: "",
    rent_negotiable: "Yes",
    deposit: "",
    lease_duration: "1",
    lockin_period: "1",
    security: "Not Available",
    washroom: "No Washroom",
    parking: "none",
    discription: "",
    date: today(),
    // photo: "",
  });

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  var [photos, setPhotos] = useState("");

  const uploadeImage = (e) => {
    setPhotos(e.target.files);

    var preview = document.querySelector("#preview");
    preview.innerHTML = "";
    // var reader = new FileReader();

    [].forEach.call(e.target.files, readAndPreview);

    function readAndPreview(file) {
      // Make sure `file.name` matches our extensions criteria
      if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
        return alert(file.name + " is not an image");
      } // else...

      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 200;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild(image);
      });

      reader.readAsDataURL(file);
    }
  };

  // This function will handle the submission.4
  const Submit = (e) => {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.

    const newform = new FormData();

    newform.append("availableFor", form.availableFor);
    newform.append("floor", form.floor);
    newform.append("ownership_type", form.ownership_type);
    newform.append("property_type", form.property_type);
    newform.append("ageOfProperty", form.ageOfProperty);
    newform.append("property_area", form.property_area);
    newform.append("furnished", form.furnished);
    newform.append("city", form.city);
    newform.append("landmark", form.landmark);
    newform.append("locality", form.locality);
    newform.append("area_unit", form.area_unit);
    newform.append("address", form.address);
    newform.append("expected_rent", form.expected_rent);
    newform.append("monthly_maintenance", form.monthly_maintenance);
    newform.append("rent_negotiable", form.rent_negotiable);
    newform.append("deposit", form.deposit);
    newform.append("lease_duration", form.lease_duration);
    newform.append("lockin_period", form.lockin_period);
    newform.append("security", form.security);
    newform.append("washroom", form.washroom);
    newform.append("parking", form.parking);
    newform.append("discription", form.discription);
    newform.append("date", form.date);

    for (let i = 0; i < photos.length; i++) {
      newform.append("photos", photos[i]);
    }

    // console.log(newform);
    let protocol = window.location.protocol;
    let domain = window.location.hostname;
    let port = window.location.port;

    axios
      .post(`${protocol}//${domain}:${port}/property/add`, newform)
      .then((res) => {
        console.log("form submitted sucssefully");
      })
      .catch((error) => {
        console.log(error);
      });

    // When a post request is sent to the create url, we'll add a new record to the database.

    setForm({
      availableFor: "Rent",
      floor: "nobuilding",
      ownership_type: "Owner",
      property_type: "Other",
      ageOfProperty: "less then one year",
      property_area: "",
      furnished: "Un Furnished",
      city: "jaipur",
      landmark: "",
      locality: "",
      address: "",
      expected_rent: "",
      monthly_maintenance: "",
      rent_negotiable: "Yes",
      deposit: "",
      lease_duration: "1",
      lockin_period: "1",
      security: "Not Available",
      washroom: "No Washroom",
      parking: "none",
      discription: "",
      date: today(),
    });

    photos = "";

    navigate("/");
  };

  return (
    <div>
      {/* <div className="property_info">
      <span className="step"> Property Detiles</span>
      <span className="step"> Location Details</span>
      <span className="step"> Rental Details</span>
      <span className="step"> Amenities</span>
      <span className="step"> Gallery</span>
      <span className="step"> Additional Information</span>
    </div> */}
      <form
        onSubmit={Submit}
        // action="postProperty"
        className="formbox"
        // id="formbox"
        // method="post"
        encType="multipart/form-data"
      >
        <div className="tab">
          <div className=" property_deatiles">
            <div className="available_for">
              <label htmlFor="available_for">Available for*</label>
              <select
                name="availableFor"
                value={form.availableFor}
                onChange={(e) => updateForm({ availableFor: e.target.value })}
                id="available_for"
                autoFocus
              >
                <option value="Rent">Rent</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            <div className="ownership_type">
              <label htmlFor="ownership_type">Ownership type*</label>
              <select
                name="ownership_type"
                id="ownership_type"
                value={form.ownership_type}
                onChange={(e) => updateForm({ ownership_type: e.target.value })}
              >
                <option name="owner" value="Owner">
                  Owner
                </option>
                <option name="Broker" value="Broker">
                  Broker
                </option>
              </select>
            </div>

            <div className="type">
              <label htmlFor="property_type">Property type*</label>
              <select
                name="property_type"
                id="property_type"
                value={form.property_type}
                onChange={(e) => updateForm({ property_type: e.target.value })}
              >
                <option value="other">Other</option>
                <option value="Flat">Flat</option>
                <option value="Home">Home</option>
                <option value="Hostel_P.G.">Hostel& P.G.</option>
                <option value="Land">Land</option>
                <option value="Office">Office</option>
                <option value="Room">Room</option>
                <option value="Shop">Shop</option>
                <option value="Showroom">Showroom</option>
                <option value="Warehouse">Warehouse</option>
              </select>
            </div>

            <div className="property_age">
              <label htmlFor="property_age">Property age*</label>
              <select
                name="ageOfProperty"
                id="ageofproperty"
                value={form.ageOfProperty}
                onChange={(e) => updateForm({ ageOfProperty: e.target.value })}
              >
                <option value="Less then one year">Less then one Year</option>
                <option value="1 Year to 5 year">1 Year to 5 year</option>
                <option value="5 Year to 10 year">5 Year to 10 year</option>
                <option value="More then 10 year">"More then 10 year"</option>
              </select>
            </div>

            <div className="floor">
              <label htmlFor="floor">Floor*</label>
              <select
                name="floor"
                id="floor"
                value={form.floor}
                onChange={(e) => updateForm({ floor: e.target.value })}
              >
                <option value="Nobuilding">No building</option>
                <option value="groundfloor">Ground floor</option>
                <option value="groundfloor">1</option>
                <option value="groundfloor">2</option>
                <option value="groundfloor">3</option>
                <option value="groundfloor">4</option>
                <option value="groundfloor">5</option>
                <option value="groundfloor">6</option>
              </select>
            </div>

            <div className="property_area">
              <label htmlFor="property_area">Property area*</label> <br />
              <div className="area_unit">
                <input
                  id="property_area"
                  type="number"
                  placeholder="area"
                  name="property_area"
                  value={form.property_area}
                  onChange={(e) =>
                    updateForm({ property_area: e.target.value })
                  }
                />
                <select
                  name="area_unit"
                  id="area_unit"
                  value={form.area_unit}
                  onChange={(e) => updateForm({ area_unit: e.target.value })}
                >
                  <option value="Sq.mtr">Sq.Mtr</option>
                  <option value="Sq.ft">Sq.Ft</option>
                  <option value="Sq.yard">Sq.Yard</option>
                  <option value="hector">Hector</option>
                </select>
              </div>
            </div>

            <div className="furnished">
              <label htmlFor="furnished">Furnished*</label>
              <select
                name="furnished"
                id="furnished"
                value={form.furnished}
                onChange={(e) => updateForm({ furnished: e.target.value })}
              >
                <option value="Un-Furnished">Un-Furnished</option>
                <option value="Semi-Furnished">Semi-Furnished</option>
                <option value="Furnished">Furnished</option>
              </select>
            </div>
          </div>
        </div>

        {/* location deatiles  */}
        <div className="tab">
          <div className="location_deatiles ">
            <div className="city">
              <label style={{ margin: "0%" }}>City*</label>
              <select
                name="city"
                id="city"
                value={form.city}
                onChange={(e) => updateForm({ city: e.target.value })}
              >
                <option value="jaipur">Jaipur</option>
              </select>
            </div>

            <div className="locality">
              <label>Locality*</label>
              <input
                id="locality"
                type="text"
                required
                name="locality"
                value={form.locality}
                onChange={(e) => updateForm({ locality: e.target.value })}
              />
            </div>

            <div className="landmark">
              <label>Landmark*</label>
              <input
                id="landmark"
                type="text"
                required
                name="landmark"
                value={form.landmark}
                onChange={(e) => updateForm({ landmark: e.target.value })}
              />
            </div>

            <div className="address">
              <label>Address*</label>
              <input
                id="address"
                type="text"
                required
                name="address"
                value={form.address}
                onChange={(e) => updateForm({ address: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="tab">
          <div className="Rentail_deatiles">
            <span className="expected_rent">
              <label htmlFor="">Expected Rent</label>
              <input
                id="expected_rent"
                type="number"
                required
                name="expected_rent"
                value={form.expected_rent}
                onChange={(e) => updateForm({ expected_rent: e.target.value })}
              />
            </span>

            <span className="monthaly_maintenance">
              <label htmlFor="">Monthly Maintenance </label>
              <input
                id="monthly_maintenance"
                type="number"
                required
                name="monthly_maintenance"
                value={form.monthly_maintenance}
                onChange={(e) =>
                  updateForm({ monthly_maintenance: e.target.value })
                }
              />
            </span>

            <span className="rent_negotiable">
              <label>Rent Negotiable</label>
              <select
                name="rent_negotiable"
                id="rent_negotiable"
                value={form.rent_negotiable}
                onChange={(e) =>
                  updateForm({ rent_negotiable: e.target.value })
                }
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </span>

            <span className="deposit">
              <label htmlFor="deposit">Deposit </label>
              <input
                id="deposit"
                type="number"
                required
                name="deposit"
                value={form.deposit}
                onChange={(e) => updateForm({ deposit: e.target.value })}
              />
            </span>

            <span className="lease_duration">
              <label htmlFor="">Lease Duration</label>
              <select
                name="lease_duration"
                id="lease_duration"
                value={form.lease_duration}
                onChange={(e) => updateForm({ lease_duration: e.target.value })}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </span>

            <span className="lockin_period">
              <label htmlFor="">Lockin period</label>
              <select
                name="lockin_period"
                id="lockin_period"
                value={form.lockin_period}
                onChange={(e) => updateForm({ lockin_period: e.target.value })}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </span>

            <span className="availabel_from">
              <label htmlFor="">Avaliable From</label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={(e) => updateForm({ date: e.target.value })}
              />
            </span>
          </div>
        </div>

        {/* facilities available on location  */}
        <div className="tab">
          <div className=" facilities">
            <span className="parking">
              <label htmlFor="parking">Parking</label>
              <select
                name="parking"
                id="parking"
                value={form.parking}
                onChange={(e) => updateForm({ parking: e.target.value })}
              >
                <option value="none">None</option>
                <option value="Public">Public</option>
                <option value="Reserved_&_Public">Reserved & Public</option>
                <option value="Reserved">Reserved</option>
              </select>
            </span>

            <span className="washroom">
              <label htmlFor="washroom">Washroom</label>
              <select
                name="washroom"
                id="washroom"
                value={form.washroom}
                onChange={(e) => updateForm({ washroom: e.target.value })}
              >
                <option value="No_Washroom">No_Washroom</option>
                <option value="Shared">Shared</option>
                <option value="Private">private</option>
              </select>
            </span>

            <span className="security">
              <label className="security" htmlFor="security">
                Security
              </label>
              <select
                name="security"
                id="security"
                value={form.security}
                onChange={(e) => updateForm({ security: e.target.value })}
              >
                <option value="Not_Available">No Available</option>
                <option value="Available">Available</option>
              </select>
            </span>
          </div>
        </div>

        {/* photo gallery   */}
        <div className="tab">
          <div className="gallery">
            <label htmlFor="">Photos</label>
            <input
              type="file"
              id="photo"
              name="photo"
              required
              multiple
              onChange={uploadeImage}
            />
            <div id="preview"></div>
          </div>
        </div>

        {/* additional information for property   */}
        <div className="tab">
          <div className=" additional_information ">
            <label htmlFor="discription" className="discriptob">
              description
            </label>
            <textarea
              name="discription"
              id="discription"
              cols="30"
              rows="10"
              required
              minLength="30"
              value={form.discription}
              onChange={(e) => updateForm({ discription: e.target.value })}
            ></textarea>
          </div>
        </div>

        {/* <div style={{ overflow: "auto" }}>
        <button
          type="button"
          id="prevBtn"
           onClick={() => {
             nextPrev(-1);
           }}
        >
          Previous
        </button>
        <button
          type="button"
          id="nextBtn"
           onClick={() => {
             nextPrev(-1);
           }}
        >
          Next
        </button>
      </div>  */}

        {/* sumit button for form */}
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
