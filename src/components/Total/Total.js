import React from "react";

const Total = ( props ) => {
    const total = props.parts.map(
        part => part.exercises
    ).reduce( (a, b) => a + b );

    return <b>total of {total} exercises</b>;
}

export default Total;