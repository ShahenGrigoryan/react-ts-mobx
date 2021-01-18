import React from "react";
import {Scrollbars} from "react-custom-scrollbars";



const ScrollWrapper:React.FC = ({children}) => {
    return(
        <Scrollbars className="scroll_wrapper" renderTrackVertical={({ style, ...props }) =>
            <div {...props} style={{ ...style}} className={'scroll_truck'}/>
        }
                    renderThumbVertical={({ style, ...props }) =>
                        <div {...props} style={{ ...style}} className={'scroll_thumb'}/>
                    }
        >
            {children}
        </Scrollbars>
    )
}

export default ScrollWrapper