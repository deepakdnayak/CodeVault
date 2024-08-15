import React, { useEffect, useState } from 'react'
import CourseItem from './CourseItem'

const Course = (props) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
      fetchCourse();
      // eslint-disable-next-line
    }, [])
    
    
    const fetchCourse = async () =>{
        let data = await fetch(`https://raw.githubusercontent.com/starprojectsrepos/codevault-files/main/sem${props.semester}.json`);
        let parsedData = await data.json();
        setCourses(parsedData.Courses);
    }

    return (
        <>
            <div className="row m-3">
            {courses.map((element)=> {
                return (
                    <div className="col-md-4" key={element.courseCode}>
                        <CourseItem courseName={element.courseName} courseCode={element.courseCode} credit={element.credit} lab={element.lab} />
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Course