import React from 'react';
import '../css/Footer.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

function Footer() {
    return (
        <div className="footer">
            <div className="contact">
                <h3>Contact Us!</h3>
                <div className="street">
                    <TelegramIcon />
                    <p>512 Warren Ave Portland, Maine 04103</p>
                </div>
                <div className="phone">
                    <PhoneIcon />
                    <p>207-797-5700</p>
                </div>
                <div className="mail">
                    <MailIcon />
                    <p>info@fitnessfactorymaine.com</p>
                </div>    
            </div>
            <div className="copyright">
                <p>© Copyright Ilir Shala. All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
