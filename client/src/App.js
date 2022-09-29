// import logo from "./logo.svg";
import "./components/css/app.css";

import { Header } from "./components/js/header";
import { Footer } from "./components/js/footer";
import { Home } from "./components/js/home";
import { About } from "./components/js/about";
import { LoginBox} from "./components/js/header_parts/login_box";


import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Feedback } from "./components/js/feedback";
import { Contact_us } from "./components/js/contact_us";
import { Faq } from "./components/js/faq";
import { Property_listings } from "./components/js/user_deshboard/property_listings";
import { Property_enquiries } from "./components/js/user_deshboard/property_enquiries";
import { User_connects } from "./components/js/user_deshboard/user_conections";
import { User_profile } from "./components/js/user_deshboard/user_profile";
import { Properties } from "./components/js/properties/properties";
import  AddProperty from "./components/js/add_property_form/add_property";
import { PropertyDeatiles } from "./components/js/property_deaitles/property_deatiles";
import { useState } from "react";
import { SignUp } from "./components/js/header_parts/sign_up";

function App() {

  const[filter , setfilter] = useState({
    property_for: "rent",
    property_type: "other"
  });

  const changeFilterValue =(e)=>{
      setfilter({...filter ,[e.target.name]: e.target.value})
  }


  return (
    <Router>


      <Header filter={filter} changeFilterValue={changeFilterValue} />

    <main>
      <Routes>
        <Route exact path ="*" element={<Home filter={filter} changeFilterValue={changeFilterValue}/>}></Route>
        <Route exact path ="/" element={<Home filter={filter} changeFilterValue={changeFilterValue}/>}></Route>

        <Route exact path="login" element={<LoginBox/>}></Route>
        <Route exact path="signup" element={<SignUp/>}></Route>


        <Route exact path ="/post_your_property" element={<AddProperty/>}></Route>


        <Route exact path ="/faq" element={<Faq/>}></Route>
        <Route exact path ="/feedback" element={<Feedback/>}></Route>
        <Route exact path ="/contact_us" element={<Contact_us/>}></Route>
        <Route exact path="/about" element={<About />}></Route>


        <Route exact path="/deshboard/profile" element={<User_profile/>}></Route>
        <Route exact path="/deshboard/your_properties" element={<Property_listings/>}></Route>
        <Route exact path="/deshboard/connects" element={<User_connects/>}></Route>
        <Route exact path="/deshboard/property_enquiries" element={<Property_enquiries/>}></Route>

        <Route exact path="/properties" element={<Properties filter={filter} changeFilterValue={changeFilterValue} />}  ></Route>
        <Route exact path="/property_detailes/:id" element={<PropertyDeatiles/>}></Route>

      </Routes>
    </main>

      <Footer />
    </Router>
  );
}

export default App;
