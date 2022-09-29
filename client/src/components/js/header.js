import React from "react";
import { Link } from "react-router-dom";
import { MenuBar } from "./header_parts/menu_bar";
import { Search } from "./header_parts/search";
import "../css/header.css";
import "../css/mobile-header.css";
import "../css/login_signup_box.css";

export const Header = ({filter,changeFilterValue}) => {
  window.onscroll = function () {
    b();
  };

  function b() {
    if (window.innerWidth >= 1000) {
      if (window.pageYOffset) {
        document
          .getElementById("search")
          .firstElementChild.getElementsByTagName("select")[0].style.display =
          "none";
        document
          .getElementById("search")
          .firstElementChild.getElementsByTagName("select")[1].style.display =
          "none";
        document
          .getElementById("search")
          .firstElementChild.getElementsByTagName("hr")[0].style.display =
          "none";
        document
          .getElementById("search")
          .firstElementChild.getElementsByTagName("hr")[1].style.display =
          "none";
        document
          .getElementById("search")
          .firstElementChild.getElementsByTagName("hr")[2].style.display =
          "none";
      } else {
        document
          .getElementById("search")
          .firstElementChild.getElementsByTagName("select")[0].style.display =
          "none";
        document
          .getElementById("search")
          .firstElementChild.getElementsByTagName("select")[1].style.display =
          "none";
        document
          .getElementById("search")
          .firstElementChild.getElementsByTagName("hr")[0].style.display =
          "none";
        document
          .getElementById("search")
          .firstElementChild.getElementsByTagName("hr")[1].style.display =
          "none";
        document
          .getElementById("search")
          .firstElementChild.getElementsByTagName("hr")[2].style.display =
          "none";
      }
    }
  }



  return (
    <header>
      <div className="nav">
        <div className="nav_element_01">
          <div>
            <Link to={"/"} id="logo">
              <h1>ToLetPlus</h1>
            </Link>
          </div>
          <div>
            <Search filter={filter} changeFilterValue={changeFilterValue} />
          </div>
          <MenuBar />

        </div>
      </div>

    </header>
  );
};
