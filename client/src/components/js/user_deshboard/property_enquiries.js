import React from "react";
import { Link } from "react-router-dom";
import "../../css/user_deshboard_Css/deshboard.css";
import "../../css/user_deshboard_Css/property_enqueries.css"

export const Property_enquiries = () => {
  return (
    <div className="deshboard">
      {/* these are link for user to show diffrent slides   */}

      <div className="deshboard_nevigations">
        <div className="heading">Manage your Account</div>
        <hr />
        <Link to={"/deshboard/profile"}>
          <div className="card">Profile</div>
        </Link>
        <Link to={"/deshboard/connects"}>
          <div className="card">Owners you Connected</div>
        </Link>
        <Link to={"/deshboard/your_properties"}>
          <div className="card " id="your_properties">
            Your Property
          </div>
        </Link>
        <Link to={"/deshboard/property_enquiries"}>
          <div className="card card_active">Interested in your Properties </div>
        </Link>
      </div>

      {/* navigation slides for user deshboard  */}

      <div className="deshboard_navigation_slides">
        {/* this is for show user the are intrested in owners property   */}

        <div className="Interested_in_your_properties">
          {/* this is the heading part for slides  */}
          <div className="heading">Interested in your Properties</div>
          <hr />

          <div className="enquiries_box">
            <div className="info_box">
              <span className="material-icons account_icon">
                account_circle
              </span>
              <div className="Name">Name</div>
              <div className="Individual">Individual | 1 days ago</div>
              <div className="mobile_box">
                <span className="material-icons mobile">phone_iphone</span>
                <div className="mobile"> 91-7062520225 </div> <br />
              </div>
              <div className="email_box">
                <span className="material-icons email">email</span>
                <div className="email ">kuldeepsaini470@gmail.com</div>
              </div>
            </div>

            <div className="info_box">
              <span className="material-icons account_icon">
                account_circle
              </span>
              <div className="Name">Name</div>
              <div className="Individual">Individual | 1 days ago</div>
              <div className="mobile_box">
                <span className="material-icons mobile">phone_iphone</span>
                <div className="mobile"> 91-7062520225 </div> <br />
              </div>
              <div className="email_box">
                <span className="material-icons email">email</span>
                <div className="email ">kuldeepsaini470@gmail.com</div>
              </div>
            </div>

            <div className="info_box">
              <span className="material-icons account_icon">
                account_circle
              </span>
              <div className="Name">Name</div>
              <div className="Individual">Individual | 1 days ago</div>
              <div className="mobile_box">
                <span className="material-icons mobile">phone_iphone</span>
                <div className="mobile"> 91-7062520225 </div> <br />
              </div>
              <div className="email_box">
                <span className="material-icons email">email</span>
                <div className="email ">kuldeepsaini470@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
