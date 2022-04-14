import React from "react";

import Course from "./Course/Course";

const Courses = ( props ) => props.courses.map( ( course ) => {
    return <Course 
        key={course.id}
        id={course.id}
        name={course.name} 
        parts={course.parts} />;
} );

export default Courses;