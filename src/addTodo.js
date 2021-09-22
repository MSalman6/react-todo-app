import { useState } from "react";
import { createTodo } from "./redux/thunk/todos";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const AddTodo = ({todos, createTodos}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const dispath = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting")
        createTodos()
    }

    return ( 
        <div className="addtodo-container">
            <h2 className="title">Add Todo</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: </label><br></br>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/><br></br>
                <label>Description: </label><br></br>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}/><br></br>
                <button>Add todo</button>
            </form>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        createTodos: dispath(createTodo)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);