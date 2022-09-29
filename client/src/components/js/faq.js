import React from 'react'
import {Link} from "react-router-dom"
import "../css/faq.css"

export const Faq = () => {
  return (
           
    <div className="footer_box">

    <div className="footer_links">
    <ul>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact_us"}>Contact Us</Link></li>
            <li><Link to={"/feedback"}>Feedback</Link></li>
            <li className="footer_links_active"><Link to={"/faq"}>FAQ</Link></li>
        </ul>
    </div>

    
    
    <div className="FAQ_box">
            <h2>Frequently Asked Questions (FAQ)</h2>

            <div className="accordion_box">
                <button className="accordion" >Section 1</button>
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            
            <div className="accordion_box">
                <button className="accordion">Section 2</button>
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className="accordion_box">
                <button className="accordion" >Section 3</button>
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            
            
        </div>
    </div>
    
    


  )
}
