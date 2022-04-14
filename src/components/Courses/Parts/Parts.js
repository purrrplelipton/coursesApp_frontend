import React from "react";

import Part from "./Part/Part";

const Parts = ( props ) => props.parts.map( ( part ) => {
    return <Part 
        key={part.id}
        name={part.name} 
        exercises={part.exercises} />;
} );

export default Parts;