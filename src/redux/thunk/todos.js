const intialState = {
    todos: [],
    loading: false,
    errors: null,
    title: "",
    description: ""
}

// types
const GET_TODO = 'GET_TODO';
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
const GET_TODO_FAILURE = 'GET_TODO_FAILURE';
const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';

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

export const updateTitle = (title) => ({
    type: UPDATE_TITLE,
    payload: title
})

export const updateDescription = (desc) => ({
    type: UPDATE_DESCRIPTION,
    payload: desc
})

// reducer
export default (state=intialState, action) => {
    switch (action.type){
        case GET_TODO:
            return { ...state, loading: true}
        case GET_TODO_SUCCESS:
            return { ...state, loading: false, todos: action.payload}
        case GET_TODO_FAILURE:
            return { ...state, loading: false, msg: action.payload}
        case UPDATE_TITLE:
            return { ...state, title: action.payload }
        case UPDATE_DESCRIPTION:
            return { ...state, description: action.payload }
        default:
            return state
    }
}

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
export const createTodo = (title, description) => {

    return (dispath, getState) => {

        fetch(get_todos_url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({title, description})
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