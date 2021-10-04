import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import NoteCard from './Card'
import Masonry from "react-masonry-css";

const breakPoints = {
    default: 3,
    1100: 2,
    700: 1
}

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const url = "http://127.0.0.1:8000/notes"
        axios.get(url).then(
            response => {setNotes(response.data)
            console.log(response)}
        )
    }, [])

    const handleDelete = (id) => {
        axios.delete("http://127.0.0.1:8000/notes/" + id).then(
            response => {
                console.log(response)
            
                const newNotes = notes.filter(note => note.id !== id)
                setNotes(newNotes)
            }
        )
    }

    return ( 
        <div className="notes-container">
            { 
                <Container className="note-container">
                    <Masonry
                    breakpointCols={breakPoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                        {notes.map(note => (
                            <div item key={note.id}>
                                <NoteCard note={note} handleDelete={handleDelete}/>
                            </div>
                        ))}
                    </Masonry>
                </Container>
            }
        </div>
     );
}
 
export default Notes;