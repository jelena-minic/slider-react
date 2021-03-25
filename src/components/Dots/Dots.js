import React from 'react';

function Dots (props) {
    // ovde ubaciti funkciju za handleClick i proslediti state koji setuje active_slide
    // prebaciti inline style u external style
    // refactor code
    return <div className="dots">
        {props.slides.map((slide, index) => (
            <span key={index} active={index} style={{backgroundColor: props.active_slide===index ? "grey" : "snow"}} className="dots__dot" onClick={props.onClick} ></span>
        ))}
    </div>
}

export default Dots;