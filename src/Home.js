import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, delTodo, delTodoSuccess } from "./redux/ducks/todoReducer";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = ({getTodos, deleteTodo}) => {
    const todos = useSelector((state) => state.todoReducer.todos);
    const delTodoSuc = useSelector((state) => state.todoReducer.todoDelSuccess)
    const dispatch = useDispatch();
    const history = useHistory();

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
            <h1 className="page-heading">Todos List</h1>
            { todos && todos.map((todo) => (
                <div className="todo-container" key={todo.id}>
                    <div className="todo-title"><b>Title:</b>  {todo.title}</div>
                    <div><b>Description:</b> {todo.description}</div>
                    <div><button className="del-btn" onClick={() => handleDelete(todo)}>Remove!</button></div>
                </div>
            )) }
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