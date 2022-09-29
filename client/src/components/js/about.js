import React from 'react'
import { Link } from "react-router-dom";
import "../css/footer_link.css"
import "../css/about.css"

export const About = () => {
  return (
    <>
    <div className="footer_box">

    <div className="footer_links">
        <ul>
            <li className="footer_links_active"><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact_us"}>Contact Us</Link></li>
            <li><Link to={"/feedback"}>Feedback</Link></li>
            <li><Link to={"/faq"}>FAQ</Link></li>
        </ul>
    </div>

    <div className="about">

        <div className="company_info">
            <label>
                <h1>About company</h1>
            </label>
            <br/>
            <p>
                <Link to={"/"}>Toletplus</Link> is an online website where buyers, sellers, and brokers/agents can quickly,
                effectively, and inexpensively exchange information about real estate properties. Whether you
                are looking for a rented property or planning to build your dream abode, you can find anything
                and everything in real estate at our portal.
            </p>
            <p>
                With the ever-evolving online search behaviour, <Link to={"/"}>Toletplus</Link>
                shares updated information
                pertinent to real estate activities, assisting prospective buyers to make an informed buying
                decision. We make online property search easier, quicker and smarter
            </p>
        </div>


        <div className="team">
            <label><h2>Meet Our Team</h2></label>
            <div className="team_box">
                <div className="team_member">
                    <br/>
                    <span className="name"><h3>Kamlesh choudhry</h3></span>
                    <span className="degree"></span>
                    <span className="member_info">quaick info</span>
                </div>
                <div className="team_member">
                    <br/>
                    <span className="name"><h3>Kuldeep saini</h3></span>
                    <span className="degree">Computer engineer</span>
                    <span className="member_info">Kuldeep, is our front-end web developer</span>
                </div>
                <div className="team_member">
                    <br/>
                    <span className="name"><h3>Rahul yadav</h3></span>
                    <span className="degree">Computer engineer</span>
                    <span className="member_info">Rahul, is our back-end web developer</span>

                </div>
            </div>
        </div>



    </div>
</div>

    </>
  )
}
