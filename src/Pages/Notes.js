import React, {useState} from "react";
import FieldMessage from "./FieldMessage";
import notes from './Messages'

const Notes = () => {

    const sortedNotes = notes.sort((a, b) => b.times - a.times)

    return (
        <div>
            <ul className='list-group'>
                <li className='list-group-item'>
                {sortedNotes.map(note => <FieldMessage note={note}/> )}
                </li>
            </ul>
        </div>
    )
}

export default Notes