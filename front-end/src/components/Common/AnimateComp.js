import React, {Fragment} from 'react';
import {Spring} from 'react-spring/renderprops';

const AnimateComp = ({children}) => {
    return (
        <Spring from={{opacity: 0}} to={{opacity: 1}}>
            {
                (props) => (
                    <div style={props}>
                        {children}
                    </div>
                )
            }
        </Spring>
    )

}

export default AnimateComp;