import React from 'react'

const Notes = () => {
  return (
    <>
        <div className="container">
            <div className="list-group mt-5">
                <a href="/" className="list-group-item list-group-item-action active" aria-current="true">
                    Notes as per Model
                </a>
                <a href="/display" className="list-group-item list-group-item-action">Module 1 - </a>
                <a href="/" className="list-group-item list-group-item-action">Module 2 - </a>
                <a href="/" className="list-group-item list-group-item-action">Module 3 - </a>
                <a href="/" className="list-group-item list-group-item-action">Module 4 - </a>
                <a href="/" className="list-group-item list-group-item-action">Module 5 - </a>
            </div>
        </div>
    </>
  )
}

export default Notes