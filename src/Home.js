import { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
// import { decrement, increment } from "./redux/slices/countSlice";
import { increment, decrement } from "./redux/ducks/countReducer";
import { fetchTodos } from "./redux/thunk/todos";

const Home = ({todos, getTodos}) => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const todos_array = todos.todos;
    const loading = todos.loading;
    const error = todos.err_msg

    useEffect(() => {
        dispatch(getTodos())
    }, []);

    return (
        <div className="home">
                {error && <div>{error}</div>}
                {loading && <div>Loading...</div>}
                <h2 className="title">Todos</h2>
                {todos_array && todos_array.map(
                    (todo) => 
                        <div className="todo-container" key={todo.id}>
                            <p>Title: {todo.title}</p>
                            <p>Description: {todo.description}</p>
                        </div>
                )}
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => fetchTodos()
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);