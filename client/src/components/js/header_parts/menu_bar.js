import React from "react";
import { Link } from "react-router-dom";

export const MenuBar = () => {
  // for close the submenu list
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  function menu() {
    document.getElementById("menulist").classList.toggle("show");
    document.getElementById('foot').style.display = 'none';
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(" .account_icon-mobile, .account_icon-laptop")) {
      var dropdowns = document.getElementsByClassName("menulist0");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };


  return (
    <>
      {/* menu bar start hare */}

      <div
        className="account_icon-laptop"
        onClick={() => {
          menu();
        }}
        id="usericon"
        style={{ margin: "1px 60px 8px", float: "right", cursor: "pointer" }}
      >
        <div
          className="account_icon-laptop"
          style={{
            padding: "12px 12px",
            backgroundColor: "#bbbbbb",
            borderRadius: "100px",
          }}
        >
          <div
            className="account_icon-laptop"
            style={{
              display: "table",
              padding: "5px",
              background: "white",
              margin: "auto auto",
              borderRadius: "100px",
            }}
          ></div>
          <div
            className="account_icon-laptop"
            style={{
              display: "table",
              width: " 20px",
              height: "9px",
              background: "white",
              margin: "10%auto auto",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          ></div>

        </div>
      </div>
          <div id="menulist" className="menulist0">
            <div className="menulist">
              {/* <div
            id="submenulist0"
            className=" material-icons "
            style="font-size: 20vw; padding-bottom: 0vw; color: #ececec;"
          >
            {" "}
            account_circle{" "}
          </div> */}
              <div className="userinfo">
                <Link to={"/deshboard/profile"}>
                <div id="username">UserName</div>
                  <div className="editprofile">
                    {" "}
                    <b> Edit profile </b>
                  </div>
                </Link>
              </div>
              <hr />
              

              <div id="submenulist0"> Account </div>
              <Link to={"/deshboard/profile"}>
                <div className="submenulist"> Personal info </div>
              </Link>

              <Link to={"/deshboard/property_enquiries"}>
              <div
                className="submenulist"
              >Massages
              </div>
              </Link>

              <Link to={"/deshboard/connects"}>
              <div className="submenulist"> Whislist </div>
              </Link>
              <hr />

              <div id="submenulist0"> Property </div>
              <Link to={"/post_your_property"}>
                <div className="submenulist"> Post prperty hare </div>
              </Link>

              <Link to={"/deshboard/your_properties"}>
                <div className="submenulist"> Manage your property</div>
                </Link>
              <hr />

              <div id="submenulist0"> Privacy Policy </div>
              {/* <div
                className="submenulist"
              >
                {" "}
                Help
              </div> */}
              <div
                className="submenulist"
              >
                {" "}
                Logout
              </div>
            </div>
          </div>

      {/* menu bar end hare */}
    </>
  );
};
