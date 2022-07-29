import React from 'react';
import Notes from './Notes';


export default function Home(props) {
     
  return (
    <> 
    <div className="container my-3">
    <h2>Add Notes</h2>
    <form className="my-3">
        <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">Title </label>
            <input type="text" className={`form-control bg-${props.toggleType === "dark" ? "light" : "dark"} text-${props.toggleType === "dark" ? "dark" : "light"}`} id="exampleInputTitle" placeholder='Title'/>
        <div id="Title" className="form-text">Give a Title to Your Notes</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className={`form-control bg-${props.toggleType === "dark" ? "light" : "dark"} text-${props.toggleType === "dark" ? "dark" : "light"}`} id="exampleFormControlTextarea1" rows="5" placeholder='Give a Detailed Description'></textarea>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputTag" className="form-label">Tag</label>
            <input type="text" className={`form-control bg-${props.toggleType === "dark" ? "light" : "dark"} text-${props.toggleType === "dark" ? "dark" : "light"}`} id="exampleInputTag" placeholder='Tag Name'/>
            <div id="Tag" className="form-text">Give a Tag to Your Notes</div>
        </div>
        <button type="submit" className={`btn btn-${props.toggleType === "dark" ? "success" : "danger"}`}>Add Note</button>
    </form>
    </div>
    <hr/>
    <Notes styleType={props.toggleMode} toggleType={props.toggleType}/>
    </>
  )
}
