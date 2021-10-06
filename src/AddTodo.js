import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { addTodoSuccess, postTodo } from "./redux/ducks/todoReducer";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => {
    return {
        fields: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
        },
        button: {
            float: 'right'
        },
        title: {
            textAlign: 'center',
            textColor: purple,
            fontWeight: 'bold',
            marginBottom: theme.spacing(4),
            marginTop: theme.spacing(4)
        }
    }
})


const AddTodo = ({ postTodo }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const addSuccess = useSelector((state) => state.todoReducer.todoAddSuccess);
    // const addErr = useSelector((state) => state.todoReducer.todoAddErr);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const [titleErr, setTitleErr] = useState(false);
    const [descErr, setDescErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title){
            setTitleErr(true)
        } else {
            setTitleErr(false)
        }

        if (!desc){
            setDescErr(true)
        } else {
            setDescErr(false)
        }

        if (title && desc) {
            dispatch(postTodo(title, desc));
        }

    }

    useEffect(() => {
        if (addSuccess) {
            dispatch(addTodoSuccess(false))
            history.push("/")
        }
    }, [addSuccess, dispatch, history])


    return (
        <div className="add-todo-container">
            <Container >
                <Typography
                    variant="h4"
                    className={classes.title}
                >Add Todo</Typography>
                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <TextField 
                        variant="outlined"
                        label="Title"
                        className={classes.fields}
                        fullWidth
                        required
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                        error={titleErr}
                    />

                    <TextField 
                        variant="outlined"
                        label="Description"
                        name="details"
                        className={classes.fields}
                        fullWidth
                        required
                        value={desc}
                        onChange={(e) => {setDesc(e.target.value)}}
                        error={descErr}
                        multiline
                        rows={10}
                    />
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>Add todo</Button>
                </form>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispath) => {
    return {
        postTodo: postTodo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);