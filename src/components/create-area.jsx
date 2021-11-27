import React, {useState} from "react";

function CreateArea() {

    const [noteTitle, setNoteTitle] = useState("");
    const [note, setNote] = useState("");

    function handleChange(event){
        if (event.target.name === "title") {
            setNoteTitle(event.target.value);
        } else if (event.target.name === "content") {
            setNote(event.target.value);
        }       
    }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={noteTitle}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;