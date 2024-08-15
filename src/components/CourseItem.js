import React from 'react'
import { Link } from 'react-router-dom'

const CourseItem = (props) => {
    return (
        <>
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className="card-title">{props.courseName}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary mt-3 mb-3">Code: {props.courseCode}&nbsp;&nbsp;&nbsp;&nbsp;Credits: <span className="card-text">{props.credit}</span></h6>
                    <Link to="/" className="card-link"><button type="button" className="btn btn-secondary">Check Lab</button></Link>
                    <Link to="/" className="card-link"><button type="button" className="btn btn-secondary">Check Course</button></Link>
                </div>
            </div>
        </>
    )
}

export default CourseItem