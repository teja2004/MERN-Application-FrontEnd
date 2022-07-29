import React , {useContext , useState} from 'react'

import noteContext from '../Context/Notes/NoteContext';

export default function AddNote(props) {
    const context = useContext(noteContext);
    const {addNotes} = context; // Destructing the context.

    const [note,setNote] = useState({
        title : "",
        description : "",
        tag : ""
    })
    const addNote = (e) => {
        e.preventDefault();
         addNotes(note.title, note.description,note.tag)
    }
    const onChange = (e) => {
        setNote({...note,[e.target.name] : e.target.value});
    }
  return (
    <div className="container" style={{marginTop : "80px"}}>
    <h2>Add Notes</h2>
    <form className="my-3">
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className={`form-control bg-${props.toggleType === "dark" ? "light" : "dark"} text-${props.toggleType === "dark" ? "dark" : "light"}`} id="title" placeholder='Title' name='title' onChange={onChange}/>
        <div id="Title" className="form-text">Give a Title to Your Notes</div>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className={`form-control bg-${props.toggleType === "dark" ? "light" : "dark"} text-${props.toggleType === "dark" ? "dark" : "light"}`} id="description" placeholder='Description' name='description' onChange={onChange}/>
        </div>
        <div className="mb-3">
            <div className="d-flex align-items-center">
            <i className="fa-solid fa-tag mx-2"></i>   
             <label htmlFor="tag" className="form-label">Tag</label>
            </div>
            
            <input type="text" className={`form-control bg-${props.toggleType === "dark" ? "light" : "dark"} text-${props.toggleType === "dark" ? "dark" : "light"}`} id="tag" placeholder='Tag Name' name='tag' onChange={onChange}/>
            <div id="Tag" className="form-text">Give a Tag to Your Notes</div>
        </div>
        <button type="submit" className={`btn btn-${props.toggleType === "dark" ? "success" : "danger"}`} onClick={addNote}><i class="fa-solid fa-file-circle-plus"></i></button>
    </form>
    </div>
  )
}
