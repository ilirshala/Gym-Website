import React from 'react'
import Navbar from './Navbar';
import '../css/Rates.css';

function Rates() {
    return (
        <div className="rates">
            <div className="rates__header">
             <Navbar/>
             <h1>Rates</h1>
           </div>

           <div className="withdrawRates">
               <h3 className='rateTitle'>AUTO WITHDRAWAL RATES</h3>
               <div className="rowRates">
               <div className="col-4" style={{maxWidth: '360px'}}>
                   <h1>Regular Auto</h1>
                   <h3><span>$35</span>/Auto Monthly</h3>
                   <p>$35 Initiation</p>
                   <button className="btn">Join Now</button>
               </div>
               <div className="col-4" style={{maxWidth: '360px'}}>
                   <h1>Senior Auto </h1>
                   <h3><span>$30</span>/Auto Monthly</h3>
                   <p>$30 Initiation</p>
                   <button className="btn">Visit location to Join</button>
               </div>
               <div className="col-4" style={{maxWidth: '360px'}}>
                   <h1>Under 23 Auto</h1>
                   <h3><span>$30</span>/Auto Monthly</h3>
                   <p>$30 Initiation</p>
                   <button className="btn">Visit location to Join</button>
               </div>
               <div className="col-4" style={{maxWidth: '360px'}}>
                   <h1>High School Auto</h1>
                   <h3><span>$23</span>/Auto Monthly</h3>
                   <p>$23 Initiation</p>
                   <button className="btn">Visit location to Join</button>
               </div>
           </div>
           </div>

            <div className="withdrawRates2">
                <h2>Day Passes</h2>
                <p>$15/Day</p>
            </div>

            <div className="withdrawRates3">
                <h2>Now you can save yourself a few steps by signing up for a membership online!</h2>
                <p>(Auto withdrawal memberships not available online.)</p>
                <h4>Join us now</h4>
            </div>

            <div className="withdrawRates4">
                <p>Corporate Memberships are available!</p>
                <br/>
                <br/>

                <p>For questions about memberships please contact us via email or phone</p>
                <br/> 
                <p>Email: info@fitnessfactorymaine.com</p>
                <p>Phone: 207-797-5700</p>

            </div>
        </div>
    )
}

export default Rates;;
