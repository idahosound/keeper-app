import React, { useState } from "react";
import Header from "./header";
import CreateArea from "./create-area";
import Footer from "./footer";
import Note from "./note";

import { isNotEmittedStatement } from "typescript";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((item) => {
                return <Note
                    title={item.title}
                    content={item.content}
                />
            })}
            <Footer />
        </div>
    );
};

export default App;
