import React from 'react';

// export class Button extends React.Component {
//     render () {
//         return <button onClick={this.props.onClick}> {this.props.buttonText}</button>
//     }
// }



function Button (props) {
    function handleModifiers () {
        if(props.modifier) {
            let modifiers = props.modifier.split(","); //["left", "inverse"] ["arrow--left", "arrow--inverse"]
            modifiers.forEach((modifier, index) => {
                modifiers[index] = `arrow--${modifier}`;
            });
            let modifierOutput = modifiers.join(" ");
            return modifierOutput;
        }
    }
    return <button className={`arrow ${ handleModifiers() }`} onClick={props.onClick}> {props.buttonText}</button>
}

export default Button;