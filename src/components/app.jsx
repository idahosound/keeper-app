import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";
import { isNotEmittedStatement } from "typescript";

function App() {
    return (
        <div>
            <Header />
            {notes.map(thisNote => (
                <Note
                    key={thisNote.key}
                    title={thisNote.title}
                    content={thisNote.content}
                />
            ))}
            <Footer />
        </div>
    );
};

export default App;
