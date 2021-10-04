import { Typography, Button, Container, makeStyles, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
        }
    });

const Create = () => {
    const history = useHistory();
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [details, setDetail] = useState('');
    const [category, setCategory] = useState('');

    const [titleError, setTitleError] = useState(false);
    const [detailError, setDetailError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title, details, category);

        if (!title) {
            setTitleError(true)
        } else {
            setTitleError(false)
        }

        if (!details) {
            setDetailError(true)
        } else {
            setDetailError(false)
        }
        

        if (title && details && category) {
            const url = 'http://127.0.0.1:8000/notes'

            axios.post(url, {
                title, details, category
            }).then(
                response => {
                    console.log(response);
                    history.push("/");
                }
            ).catch(
                err => {console.log("Something went wrong.")}
            )
        }
    }

    return ( 
        <Container className="create">

            <Typography color="textSecondary" variant="h6" component="h2" gutterBottom>
                Create a new Note.
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField value={title} onChange={(e) => setTitle(e.target.value)} className={ classes.field } variant="outlined" label="Note Title" color="secondary" fullWidth required error={titleError}/>
                <TextField value={details} onChange={(e) => setDetail(e.target.value)} className={ classes.field } variant="outlined" multiline rows={4} label="Details" color="secondary" fullWidth required error={detailError}/>
                <FormControl className={classes.field}>
                    <FormLabel>Choose a category:</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel control={<Radio />} value="mario" label="Mario"/>
                        <FormControlLabel control={<Radio />} value="yoshi" label="Yoshi"/>
                        <FormControlLabel control={<Radio />} value="peach" label="Peach"/>
                        <FormControlLabel control={<Radio />} value="bowser" label="Bowser"/>
                    </RadioGroup>
                </FormControl>
            
                <Button type="submit" color="secondary" variant="contained" endIcon={ <KeyboardArrowRightOutlinedIcon />}>Submit</Button>
            </form>

        </Container>
     );
}
 
export default Create;