import * as React from "react";


const Event = (props) => {
    return (
        <td className={'Event '}>
            <img width="80%" height="120px"src={props.pic} />
            <h3>{props.company}</h3>
            <h5>{props.role}</h5>
            <h6>{props.location}</h6>
            {/* <Button
                href="#">
                Link Button
            </Button> */}
        </td>
    )
}
export default Event;