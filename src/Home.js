import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, delTodo, delTodoSuccess } from "./redux/ducks/todoReducer";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import TodoCard from "./Card";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Masonry from "react-masonry-css";

const useStyles = makeStyles((theme) => {
    return {
        title: {
            textAlign: 'center',
            textColor: purple,
            fontWeight: 'bold',
            marginBottom: theme.spacing(4),
            marginTop: theme.spacing(4)
        }
    }
})


const Home = ({getTodos, deleteTodo}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const todos = useSelector((state) => state.todoReducer.todos);
    const delTodoSuc = useSelector((state) => state.todoReducer.todoDelSuccess)

    useEffect(() => {
        dispatch(getTodos());

        if (delTodoSuc) {
            dispatch(delTodoSuccess(false))
            history.push("/")
        }

    }, [dispatch, history, getTodos, delTodoSuc])

    const handleDelete = (todo) => {
        dispatch(deleteTodo(todo.id));
    }

    return ( 
        <div className="home">
            <Typography
                variant="h4"
                className={classes.title}
            >Todos</Typography>
            <Container>
                <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                        { todos && todos.map((todo) => (
                            <div key={todo.id}>
                                <TodoCard todo={todo} handleDelete={handleDelete}/>
                            </div>
                            // <div className="todo-container" key={todo.id}>
                            //     <div className="todo-title"><b>Title:</b>  {todo.title}</div>
                            //     <div><b>Description:</b> <p>{todo.description}</p></div>
                            //     <div><button className="del-btn" onClick={() => handleDelete(todo)}>Remove!</button></div>
                            // </div>
                        )) }
                </Masonry>
            </Container>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getTodos: fetchTodos,
        deleteTodo: delTodo
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Home);