import React from 'react';
import Button from '../Button/Button';
import Slide  from '../Slide/Slide';
import Dots from '../Dots/Dots';
import './Slider.scss';

export class Slider extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            active_slide: 0,
            translate: 0
        };
        
    }

    handlePrevious = () => {
        let fullWidth = this.props.slides.length * 300;
        let slideLength = fullWidth / this.props.slides.length;

        let newActiveSlide = this.state.active_slide === 0 ? this.props.slides.length - 1 : this.state.active_slide - 1;
        let moveLeft = slideLength * newActiveSlide;
        this.setState({
            active_slide: newActiveSlide,
            translate: moveLeft,
            
        });
    };

    handleNext = () => {
        let fullWidth = this.props.slides.length * 300;
        let slideLength = fullWidth / this.props.slides.length;

        let newActiveSlide = this.state.active_slide === this.props.slides.length - 1 ? 0 : this.state.active_slide + 1;
        let moveLeft = slideLength * newActiveSlide;
        this.setState({
            active_slide: newActiveSlide,
            translate: moveLeft
        });
    };

    handleDotClick = (newIndex) => {
       
    }

   
    render() {
        return (
            <div className="container">
                <div className="slider">
                    <Button onClick={this.handlePrevious} modifier="left" buttonText="<" /> 
                    <Button onClick={this.handleNext} modifier="right" buttonText=">" />
                    <div style={{transform: `translateX(-${this.state.translate}px)`}} className="slider__slides-container"> 
                       
                        {this.props.slides.map((slide, i) => (
                            <Slide key={i} imgSrc={slide} />
                        ))}

                    </div>
                    <Dots slides={this.props.slides} onClick={this.handleDotClick} active_slide={this.state.active_slide} />
                </div>
            </div>
        )
    }
}