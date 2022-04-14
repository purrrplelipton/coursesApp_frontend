import React from "react";

import Parts from "../Parts/Parts";
import Total from "../../Total/Total";

const Course = ( props ) => {
    return ( 
        <div>
            <h2>{props.name}</h2>
            <Parts parts={props.parts} />
            <Total parts={props.parts} />
        </div>
     );
}

export default Course;