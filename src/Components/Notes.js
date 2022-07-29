import React , {useContext} from 'react'
import noteContext from '../Context/Notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';


export default function Notes(props) {
    const context = useContext(noteContext);
    const {notes} = context; // Destructing the context.
  return (
    <>
    <AddNote toggleType={props.toggleType}/>
    <hr/>
        <div className="row my-2">
            <h2 className="text-start">Notes</h2>
            {notes.map((note)=>{
                return <NoteItem toggleType={props.toggleType} styleType={props.styleType} key={note._id} note={note}/>
            })}
        </div>
    </>
  )
}
