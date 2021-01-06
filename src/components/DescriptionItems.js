import React from 'react';
import '../css/DescriptionItems.css';

function DescriptionItems({image, title, paragraph}) {
    return (
        <div className="descriptionItems">
            <div className="title">
                <img src={image} alt=""/>
                <h3>{title}</h3>
            </div>
            <div className="paragraph">
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

export default DescriptionItems
