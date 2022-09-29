import React from "react";
import { Link } from "react-router-dom";
import "../../css/user_deshboard_Css/deshboard.css";

export const User_profile = () => {
  return (
    <>
      <div className="deshboard">
        {/* these are link for user to show diffrent slides   */}

        <div className="deshboard_nevigations">
          <div className="heading">Manage your Account</div>
          <hr />
          <Link to={"/deshboard/profile"}>
            <div className="card card_active">Profile</div>
          </Link>
          <Link to={"/deshboard/connects"}>
            <div className="card">Owners you Connected</div>
          </Link>
          <Link to={"/deshboard/your_properties"}>
            <div className="card" id="your_properties">
              Your Property
            </div>
          </Link>
          <Link to={"/deshboard/property_enquiries"}>
            <div className="card">Interested in your Properties </div>
          </Link>
        </div>

        {/* navigation slides for user deshboard  */}

        {/* this slide for user profile  */}

        <div className="deshboard_navigation_slides">
          <div className="profile">
            {/* this is the heading part for slides   */}
            <div className="heading">Update your profile</div>
            <hr />

            <div className="profile_lables">Name</div>
            <input
              id="nameText"
              className="form-name"
              type="text"
              placeholder="Your Name"
              autocomplete="off"
              value="kuldeep"
            />

            <div className="profile_lables">E-mail Address</div>

            <input
              id="emailText"
              type="text"
              placeholder="Your Your Email Address"
              className="form-email"
              autocomplete="off"
              value="kuldeep@gmail.com"
            />

            <div className="form-inline">
              <span title="E-mail verified" style={{ color: "#04AA6D" }}>
                &check;
              </span>
              <span
                title="E-mail not verified"
                style={{ color: "rgb(231, 93, 93)" }}
              >
                &#x26A0;
              </span>
            </div>

            <div className="mobile-box">
              <span className="profile_lables">Mobile Phone </span>
              {/* <span className="form-number">7062520225<span> */}

              <div className="form-inline">
                <span title="Phone no. varified" style={{ color: "#04AA6D" }}>
                  &check;
                </span>
                <span
                  title="Phone no. not varified"
                  style={{ color: "rgb(231, 93, 93)" }}
                >
                  &#x26A0;
                </span>
              </div>
            </div>

            {/* <div className="profile_lables">
                    <div className=""> Get Updates on WhatsApp</div>
                    <input className="" type="checkbox"/>
                </div>  */}

            {/* this button for update the user profile */}
            <button id="saveprofile" type="button">
              SaveProfile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
