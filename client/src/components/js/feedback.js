import React from 'react';
import { Link } from "react-router-dom";
import "../css/footer_link.css"
import "../css/feedback.css"

export const Feedback = () => {
  return (

    <>
    <div className="footer_box">

    <div className="footer_links">
        <ul>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact_us"}>Contact Us</Link></li>
            <li className="footer_links_active"><Link to={"/feedback"}>Feedback</Link></li>
            <li><Link to={"/faq"}>FAQ</Link></li>
        </ul>
    </div>

    <div className="feedback_form">

        <div  style={{textAlign: "center"}}>
            <div className="form-group"><input type="text" placeholder="Name"/>
                <div className="fielderr"/></div>
            </div>
            <div className="form-group"><input type="text" placeholder="Email Address"/>
                <div className="fielderr"/></div>
            
            <div className="form-group"><select name="feedbackType" id="feedbackType">
                <option >Select Feedback</option>
                <option value="I want to report a problem">I want to report a problem</option>
                <option value="I have a suggestion">I have a suggestion</option>
                <option value="I want to compliment Toletplus">I want to compliment Toletplus</option>
                <option value="Other">Other</option>
            </select></div>
            <div className="form-group"><textarea placeholder="Query"></textarea>
                <div className="fielderr"></div>
                <div>
                    <div className="Rate_toletplus">Rate Toletplus</div>
                    <div className="rating"><i className="star" data-rating="Poor" data-star="1"></i><i className="star"
                            data-rating="Average" data-star="2"></i><i className="star" data-rating="Good"
                            data-star="3"></i><i className="star" data-rating="Excellent" data-star="4"></i><i
                            className="star" data-rating="Awesome" data-star="5"></i>
                        <div className="status ratingErr"></div><input type="hidden" id="status-info" />
                    </div>
                </div>
            </div>
            <div style={{textAline: "center"}}>
                <button type="submit" className="send_feedback">Send Feedback</button>
            </div>
        </div>
        </div>

</>

  )
}
