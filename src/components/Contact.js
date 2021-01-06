import React from 'react';
import '../css/Contact.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Contact() {
    return (
        <div className="contactPage">
            <div className="contact__header">
                <Navbar />
                <h1>Contact Us</h1>
            </div>

            <div className="rowContact">
                <div className="col-2">
                    <h2 className="subtitle">The Fitness Factory</h2><br/>
                    <p className="paragraphs">512 Warren Ave</p>
                    <p className="paragraphs">Portland, ME 04103</p>
                    <br/>
                    <p className="paragraphs">Email: info@fitnessfactorymaine.com</p>
                    <p className="paragraphs">Phone: 207-797-5700</p>
                    <br/><br/>
                    <h2 className="subtitle">Staffed Gym Hours</h2>
                    <br/>
                    <p className="paragraphs">Monday-Thursday: 6:00am-8:00pm</p>
                    <p className="paragraphs">Friday: 6:00am-6:00pm</p>
                    <p className="paragraphs">Saturday: 6:00am-2:00pm</p>
                    <p className="paragraphs">Sunday: 6:00am-2:00pm</p>
                </div>
                <div className="col-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.224049167725!2d-80.79523568479603!3d35.25068148029693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a074bfa0fdeb%3A0x2e0f09a3c787d5ae!2sThe%20Fitness%20Factory!5e0!3m2!1sen!2s!4v1609492245998!5m2!1sen!2s" width="500" height="350" frameborder="0" style={{border: "0"}}allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact
