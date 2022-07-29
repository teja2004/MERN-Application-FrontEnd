import React from 'react'

export default function NoteItem(props) {
    const {note} = props;
  return (
    <>
    <div className="col-md-3 my-2">
    <div className={`card bg-${props.toggleType === "dark" ? "light" : "dark"} text-${props.toggleType === "dark" ? "dark" : "light"}`} style={props.styleType}>
        <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <h6 className="card-subtitle mb-2 active">{note.tag}</h6>
        <p className="card-text">{note.description}</p>
        <i class="fa-solid fa-trash text-danger mx-2"></i>
        <i class="fa-solid fa-file-pen mx-2 text-success"></i>
        </div>
    </div>
    </div>
    </>
  )
}
