import React from 'react'
import './Contact.css'
import theme from '../assests/theme_pattern.svg'
import mail from '../assests/mail_icon.svg'
import call from '../assests/call_icon.svg'
import location from '../assests/location_icon.svg'
export default function () {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9dd9b8e7-7991-4ecc-ba72-01306ba91d6a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
     alert(data.message);
      // event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
    <div className='contact ' id='contact'>
<div className="contact-title">
    <h1>
        Get In Touch
    </h1>
    <img src={theme} alt="" />
</div>
<div className="contact-section">
    <div className="contact-left">
        <h1>Lets Connect</h1>
        <p>I am currently Open To work,So feel free to Contact</p>
        
        <div className="contact-section">

        <div className="contact-detail">
        <img src={mail} alt="" /><p>anubhavt537@gmail.com</p>
        </div>

        <div className="contact-detail">
        <img src={call} alt="" /><p>+91-9990014119</p>
        </div>

        <div className="contact-detail">
           <img src={location} alt="" />Delhi
        </div>
        </div>
        </div>
        <form action="" onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text"  placeholder='enter your name...' name='name'/>
            <label htmlFor="">your Email</label>
            <input type="text" placeholder='Enter your email...' name='email' />
            <label htmlFor="">your message</label>
          <textarea name="message" id=""  rows="8"> enter your messages</textarea>
          <button  type='submit' className='contact-submit'>Submit now</button>

        </form>
        <span>{result}</span>
</div>
    </div>
  )
}
