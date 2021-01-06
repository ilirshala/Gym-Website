import React from 'react';
import '../css/Suplements.css';
import suplement from '../img/suplement.jpg';

function Suplements() {
    return (
        <div className="row1">
            <div className="col-2 colona1">
                <h1>THE <span className="colorTit">SUPPLEMENT FACTORY</span><br/> <span className="sizeTitle">AND SHAKE BAR</span></h1>
                <p>Located conveniently within the Fitness Factory, stop by our shake bar for pre and post workout necessities including protein shakes made to order, protein bars and other snacks, as well as a wide array of supplements, to take home.</p>
                <div className="lists">
                    <div className="listaPare">
                        <h4>The Shake Bar</h4>
                        <ul>
                            <li>Protein Shakes Made to Order</li>
                            <li>Pre Workout Drinks & Powder</li>
                            <li>BCAAs & EAAs</li>
                            <li>Protein Bars & Other Snacks</li>
                            <li>Bottled Water</li>
                            <li>Energy Drinks</li>
                            <li>Ready to Drink Protein</li>
                        </ul>
                    </div>
                    <div className="listaDyte">
                        <h4>Retail & Merchandise</h4>
                            <ul>
                                <li>Protein Tubs</li>
                                <li>Pre Workout</li>
                                <li>Intra Workout</li>
                                <li>Custom Apparel</li>
                                <li>Shaker Bottles</li>
                                <li>Combination Locks</li>
                                <li>Ear Buds</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="col-2 colona2">
                <img src={suplement} alt=""/>
            </div>
        </div>
    )
}

export default Suplements
