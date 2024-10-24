import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  // State to handle result message
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Append the access key to the form data
    formData.append("access_key", "7de73b30-3964-497d-8de0-99c01366f9f2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // Show success message and reset form
        setResult("Email sent successfully!");
        event.target.reset();
      } else {
        // Show error message
        console.log("Error", data);
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      // Handle any network or fetch errors
      console.error('Form submission error:', error);
      setResult('Error submitting form. Please try again.');
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>lelcaren11@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>+254745401076</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required/>
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required/>
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>

      {/* Display result message */}
      <div className="result-message">
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default Contact;

