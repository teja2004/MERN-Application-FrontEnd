import  NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => 
{
    const notesInitial = [
        {
          "_id": "62e2c6668fd2251223fa5e6a",
          "user": "62e15f1603de8267b722e96c",
          "title": "Homework",
          "description": "Need to do a Maths Homework",
          "tag": "Personal",
          "date": "2022-07-28T17:24:54.462Z",
          "__v": 0
        }
      ]

      

    const [notes, setNotes] = useState(notesInitial);

    //   Add a Note  to the list of notes.

    const  addNotes = (title,description,tag) => {
        console.log("Adding")
        const newNotes = {
            "_id": "62e2c6668fd2251223fa5e6a",
            "user": "62e15f1603de8267b722e96c",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-07-28T17:24:54.462Z",
            "__v": 0
        };
        setNotes(notes.concat(newNotes));
    }
    
    return (
        <NoteContext.Provider value={{notes, addNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;