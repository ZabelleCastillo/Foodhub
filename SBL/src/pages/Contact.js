import React from "react";
import FoodPackage from "../assets/package2.jpg";
import "../styles/Contact.css";
import emailjs from "emailjs-com";


export default function Contact() {
function SendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_hh96d38', 'template_k2gxrnk', e.target, '9sj2OynFeIvZrlyKI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${FoodPackage})` }}
      ></div>
      <div className="rightSide" >
        <h1> Contact Us</h1>

        <form onSubmit={SendEmail} >
          <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" required />
          <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" required />
          <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
          <button type="submit"> Send Message</button>


        </form>
      </div>
    </div>
  ); 
  }
// export default Contact;




