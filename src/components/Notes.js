import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Notes = () => {

  const location = useLocation();
  const { semester, type, courseCode } = location.state || {};

  return (
    <>
        <div className="container">
            <div className="list-group mt-5">
                <p className="list-group-item list-group-item-action active" aria-current="true">Notes as per Model </p>
                <Link to="/view" state={{ semester: semester, type: type, courseCode: courseCode, module: "m1" }} className="list-group-item list-group-item-action">Module 1 - </Link>
                <Link to="/view" state={{ semester: semester, type: type, courseCode: courseCode, module: "m2" }} className="list-group-item list-group-item-action">Module 2 - </Link>
                <Link to="/view" state={{ semester: semester, type: type, courseCode: courseCode, module: "m3" }} className="list-group-item list-group-item-action">Module 3 - </Link>
                <Link to="/view" state={{ semester: semester, type: type, courseCode: courseCode, module: "m4" }} className="list-group-item list-group-item-action">Module 4 - </Link>
                <Link to="/view" state={{ semester: semester, type: type, courseCode: courseCode, module: "m5" }} className="list-group-item list-group-item-action">Module 5 - </Link>
            </div>
        </div>
    </>
  )
}

export default Notes