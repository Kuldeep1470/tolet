import React from "react";
import { Link } from "react-router-dom";
import "../../css/user_deshboard_Css/deshboard.css";


export const User_connects = () => {
  return (
    <>
      <div className="deshboard">
        {/* these are link for user to show diffrent slides   */}

        <div className="deshboard_nevigations">
          <div className="heading">Manage your Account</div>
          <hr />
          <Link to={"/deshboard/profile"}>
            <div className="card">Profile</div>
          </Link>
          <Link to={"/deshboard/connects"}>
            <div className="card card_active">Owners you Connected</div>
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

        <div className="deshboard_navigation_slides">
          {/* this slide for user uploded Properties */}

          <div className="your_properties">
            {/* this is the heading part for slides   */}
            <div className="heading">Manage your Properties</div>
            <hr/>
            <p className="null">You are not connected to any owner</p>
          </div>
        </div>
      </div>
    </>
  );
};
