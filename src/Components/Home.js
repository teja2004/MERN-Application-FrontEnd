import React , {useContext , useState} from 'react'
import Notes from './Notes';
import noteContext from '../Context/Notes/NoteContext';

export default function Home(props) {
    const context = useContext(noteContext);
    const {addNotes} = context; // Destructing the context.
    const [note, setNote] = useState({
        title : "",
        description : "",
        tag : ""
    })

    // Add a Notes handle
    const addANotes = () => {
        addNotes(note.title, note.description, note.tag);
    }

    // Changing the Note Content
    const onChange = (e) => {
        setNote({
            ...note,[e.target.name] : e.target.value
        })
    }
  return (
    <> 
    <div className="container my-3">
    <h2>Add Notes</h2>
    <form className="my-3">
        <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">Title</label>
            <input type="text" className={`form-control bg-${props.toggleType === "dark" ? "light" : "dark"} text-${props.toggleType === "dark" ? "dark" : "light"}`} id="exampleInputTitle" placeholder='Title' name='title' onChange={onChange}/>
        <div id="Title" className="form-text">Give a Title to Your Notes</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className={`form-control bg-${props.toggleType === "dark" ? "light" : "dark"} text-${props.toggleType === "dark" ? "dark" : "light"}`} id="exampleFormControlTextarea1" rows="5" placeholder='Give a Detailed Description' name='description' value={note.description} onChange={onChange}>Description</textarea>
        </div>
        <div className="mb-3">
            <div className="d-flex align-items-center">
            <i class="fa-solid fa-tag mx-2"></i>   
             <label htmlFor="exampleInputTag" className="form-label">Tag</label>
            </div>
            
            <input type="text" className={`form-control bg-${props.toggleType === "dark" ? "light" : "dark"} text-${props.toggleType === "dark" ? "dark" : "light"}`} id="exampleInputTag" placeholder='Tag Name' name='tag' onChange={onChange}/>
            <div id="Tag" className="form-text">Give a Tag to Your Notes</div>
        </div>
        <button type="submit" className={`btn btn-${props.toggleType === "dark" ? "success" : "danger"}`}><i class="fa-solid fa-plus" onClick={addANotes}></i></button>
    </form>
    </div>
    <hr/>
    <Notes styleType={props.toggleMode} toggleType={props.toggleType}/>
    </>
  )
}
