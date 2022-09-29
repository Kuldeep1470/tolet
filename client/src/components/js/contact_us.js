import React from 'react'
import { Link } from "react-router-dom";
import "../css/footer_link.css"
import "../css/contact_us.css"

export const Contact_us = () => {
  return (
       
    <div class="footer_box">

    <div class="footer_links">
    <ul>
            <li><Link to={"/about"}>About Us</Link></li>
            <li className="footer_links_active"><Link to={"/contact_us"}>Contact Us</Link></li>
            <li><Link to={"/feedback"}>Feedback</Link></li>
            <li><Link to={"/faq"}>FAQ</Link></li>
        </ul>
    </div>

    <div class="contact_us_box" >

        <h2>Contact us</h2>

        <div>
            <span>address :- </span>
            <a href="http://www.googlemaps.com">muhana sanganer jaipur</a>
        </div>

        <div>
            <span>phone :-</span>
            <a href="tel:+910005555555">+91 000 555-5555</a>
        </div>

        <div>
            <span>email :-</span>
            <a href="mailto:toletplus@gamil.com">toletplus@gamil.com</a>
        </div>

        <div>
            <span>website :-</span>
            <a href="http://www.toletplus.com">www.toletplus.com</a>
        </div>
        
        <hr/>


        
        
        
        <div class="social_media_links" style={{textAlign: "flex" }}>
            <div class="social_links">Our social links :-</div>
            <a style={{color: "white"}} href="https://www.linkedin.com/company/toletplus" class="fa fa-linkedin">{""}</a>
            <a style={{color: "white"}} href="https://twitter.com/ToLetPlus" class="fa fa-twitter">{""}</a>
            <a style={{color: "white"}} href="https://www.facebook.com/toletplus/?ref=pages_you_manage " class="fa fa-facebook">{""}</a>
            <a style={{color: "white"}} href="https://www.instagram.com/toletplus/" class="fa fa-instagram">{""}</a>
            <a style={{color: "white"}} href="https://in.pinterest.com/toletplus/_created/" class="fa fa-pinterest">{""}</a>
        </div>
        
        
    </div>  


</div>
  )
}
