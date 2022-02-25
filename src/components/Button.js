import React from 'react';

const style = {

}

const Button = ({ className, btnText }) => {
    return (
        <div>
            <button className={className}>{btnText}</button>
        </div>
    )
}
export default Button;