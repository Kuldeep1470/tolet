import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import "../css/responsive-footer.css";

export const Footer = () => {
  // document.getElementById('foot').onload =()=>{
  //     document.getElementById('foot').innerHTML = document.getElementById('footer').innerHTML;
  // }

  function menu() {
    document.getElementById("menulist").classList.toggle("show");
    document.getElementById("foot").style.display = "none";
  }

  return (
    <div>
      <footer>
        <div id="footer">
          <ul>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/contact_us"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/feedback"}>Feedback</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
            <hr />
          </ul>
          <div className="sub-footer">
            {/* <a>&copy All rights reserved </a> */}
            <Link to={"/"}>Privacy Policy </Link>
            <Link to={"/"}>Terms & Conditions</Link>
          </div>
        </div>
      </footer>
      {/* footer part end hare  */}

      <div
        id="foot"
        onClick={() => {
          document.getElementById("foot").style.display = "none";
        }}
      ></div>

      <div id="navbar">
        <button
          className="material-icons"
          style={{ fontSize: "13vw" }}
          onClick={() => {
            document.getElementById("foot").style.display = "block";
            document.getElementById("foot").innerHTML =
              document.getElementById("footer").innerHTML;
          }}
        >
          menu
        </button>
        <button
          className="material-icons"
          style={{ fontSize: "13vw" }}
          onClick={() => {
            document.getElementById("foot").style.display = "none";
          }}
        >
          <Link to={"/"}>home</Link>
        </button>
        <button
          className="material-icons  account_icon-mobile"
          style={{ fontSize: "13vw" }}
          onClick={() => menu()}
        >
          account_circle
        </button>
      </div>
    </div>
  );
};
