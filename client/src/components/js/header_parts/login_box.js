import React from "react";
import { Link } from "react-router-dom";

export const LoginBox = () => {
  return (
    <>
      {/* Login Page Started */}

      <div id="loginbox" className="loginbox">
        <form action="login" className="loginboxanimate" method="post">
          <Link to={"/"}>
          <span
            className="close" >
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
              id="UserName"
              required
              maxLength="30"
              minLength="4"
            />

            <label htmlFor="passward">
              <b>Passward</b>
            </label>
            <input
              type="password"
              placeholder="Enter Passward"
              name="password"
              id="Password"
              required
              minLength="8"
              maxLength="16"
            />
            <p id="demo"></p>
            <button type="submit" className="login2" id="Submit" >
              Login
            </button>
            {/* <!-- </div>/ -->
        <!-- <div className="userdata" style="background-color: white;"> -->
            <!-- <button type="button" onClick="document.getElementById('loginbox').style.display='none'"
                className="cancelbtn">Cancel</button>
            <span className="fpsw">Forgot passward</span><br>
            <span className="or">or</span> <br> --> */}


<Link to={"/signup"} style={{textDecoration:"none" , color:"black"}}>
            <div >
              Create your account{" "}
              <span style={{color:"dodgerblue"}}>Sign-up</span>
            </div>
</Link>
          </div>
        </form>
      </div>

      {/* Login page end here*/}
    </>
  );
};
