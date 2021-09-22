const intialState = {
    todos: [],
    loading: false,
    errors: null
}

// types
const GET_TODO = 'GET_TODO';
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
const GET_TODO_FAILURE = 'GET_TODO_FAILURE';

// actions
export const getTodo = () => ({
    type: GET_TODO
})

export const getTodoSuccess = (todos) => ({
    type: GET_TODO_SUCCESS,
    payload: todos
})

export const getTodoFailure = (msg) => ({
    type: GET_TODO_FAILURE,
    payload: msg
})

const get_todos_url = "http://localhost:8000/todos";

// get thunk method
export const fetchTodos = () => {
    return (dispath) => {
        dispath(getTodo());
        fetch(get_todos_url, {
            method: 'GET'
        })
        .then(
            response => response.json()
        ).then(
            data => {
                const todos = data;
                dispath(getTodoSuccess(todos));
            }
        ).catch( err => {
                const err_msg  = err.message;
                dispath(getTodoFailure(err_msg));
            }
        )
    }
}

// post thunk method
export const createTodo = () => {
    return (dispath) => {
        fetch(get_todos_url, {
            method: 'POST',
            data: JSON.stringify({"title": "LOL123", "description": "LOL123"})
        })
        .then(
            response => response.json()
        ).then(
            data => {
                console.log(data);
                const todos = data;
            }
        ).catch( err => {
                console.log(err.message);
                const err_msg  = err.message;
            }
        )
    }
}

// reducer
export default (state=intialState, action) => {
    switch (action.type){
        case GET_TODO:
            return { ...state, loading: true}
        case GET_TODO_SUCCESS:
            return { ...state, loading: false, todos: action.payload}
        case GET_TODO_FAILURE:
            return { ...state, loading: false, msg: action.payload}
        default:
            return state
    }
}