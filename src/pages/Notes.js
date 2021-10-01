import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import NoteCard from './Card'

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const url = "http://127.0.0.1:8000/notes"
        axios.get(url).then(
            response => {setNotes(response.data)}
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
                    <Grid container spacing={3}>
                        {notes.map(note => (
                            <Grid item key={note.id} sm={12} md={6} lg={4}>
                                <NoteCard note={note} handleDelete={handleDelete}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            }
        </div>
     );
}
 
export default Notes;