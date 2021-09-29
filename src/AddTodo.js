import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { addTodoSuccess, postTodo } from "./redux/ducks/todoReducer";


const AddTodo = ({ postTodo }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const addSuccess = useSelector((state) => state.todoReducer.todoAddSuccess);
    // const addErr = useSelector((state) => state.todoReducer.todoAddErr);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postTodo(title, desc));
    }

    useEffect(() => {
        if (addSuccess) {
            dispatch(addTodoSuccess(false))
            history.push("/")
        }
    }, [addSuccess, dispatch, history])


    return (
        <div className="add-todo-container">
            <h1 className="page-heading">Add Todo</h1>
            <form className="create" onSubmit={handleSubmit}>
                <label>Todo title:</label>
                <input type="text" value={title} required onChange={(e) => { setTitle(e.target.value) }} />

                <label>Todo body:</label>
                <textarea type="text" value={desc} required onChange={(e) => { setDesc(e.target.value) }}></textarea>
                <button>Add todo</button>
            </form>
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