import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      {" "}
      {/* signup&login button  */}
      <div id="signupbox" className="signupbox">
        <form action="signup" className="signupboxanimate" method="post">
          <Link to={"/"}>
          <span
            className="close"
            >
            &times;
          </span>
            </Link>

          <div className="userdata" style={{background:"white"}}>
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              maxLength="30"
              minLength="4"
              id="Uname"
            />

            <label htmlFor="passward">
              <b>Passward</b>
            </label>
            <input
              type="password"
              placeholder="Enter Passward"
              name="password"
              required
              minLength="8"
              maxLength="16"
            />

            <label htmlFor="re-enterpassward">
              <b>Re-enterPassward</b>
            </label>
            <input
              type="password"
              placeholder="Re-Enter passward"
              name="re_password"
            />

            <label htmlFor="email">
              <b>E-mail</b>
            </label>
            <input
              type="email"
              placeholder="Enter E-mail "
              maxLength="30"
              inputMode="email"
              name="email"
            />

            <label htmlFor="tel">
              <b>Mobile no.</b>
            </label>
            <input
              type="tel"
              placeholder="Enter mobile no."
              required
              maxLength="10"
              name="phone"
            />

            <button type="submit" className="signup2">
              signup
            </button>
            {/* <!-- </div> -->
        <!-- <div className="userdata" style="background-color: white;"> -->
            <!-- <button type="button" onClick="document.getElementById('signupbox').style.display='none'"
                className="cancelbtn">Cancel</button>
            <span className="or">or</span> <br> --> */}
            <Link to={"/login"} style={{textDecoration:"none" , color:"black"}}>
            <div
              type="button"
              className="login3"
              >
              Create your account <span style={{color: "dodgerblue"}}>login</span>
            </div>
              </Link>
          </div>
        </form>
      </div>
    </>
  );
};
