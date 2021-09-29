import axios from "axios";

const initialState = {
    todos: [],
    err: false,
    todoAddSuccess: false,
    todoAddErr: "",
    todoDelSuccess: false,
    todoDelErr: "",
}

// action types
const GET_TODO_SUCCESS = 'getTodoSuccess';
const GET_TODO_FAILED = 'getTodoFailed';

const ADD_TODO_SUCCESS = 'addTodoSuccess';
const ADD_TODO_FAILED = 'addTodoFailed';

const DEL_TODO_SUCCESS = 'delTodoSuccess';
const DEL_TODO_FAILED = 'delTodoFailed'; 


// redux actions
export const getTodoSuccess = (data) => ({
    type: GET_TODO_SUCCESS,
    payload: data
})

export const getTodoFailed = (err) => ({
    type: GET_TODO_FAILED,
    payload: err
})

export const addTodoSuccess = (cond) => ({
    type: ADD_TODO_SUCCESS,
    payload: cond
})

export const addTodoFailed = (err) => ({
    type: ADD_TODO_FAILED,
    payload: err
})

export const delTodoSuccess = (cond) => ({
    type: DEL_TODO_SUCCESS,
    payload: cond
})

export const delTodoFailed = (err) => ({
    type: DEL_TODO_FAILED,
    payload: err
})

// redux reducer
export default (state=initialState, action) => {
    switch(action.type) {
        case GET_TODO_SUCCESS:
            return { ...state, todos: action.payload }
        case ADD_TODO_SUCCESS:
            return { ...state, todoAddSuccess: action.payload }
        case ADD_TODO_FAILED:
            return { ...state, todoAddErr: action.payload }
        case DEL_TODO_SUCCESS:
            return { ...state, todoDelSuccess: action.payload }
        case DEL_TODO_FAILED:
            return { ...state, todoDelErr: action.payload }
        default:
            return state
    }
}

///////////////////
// thunk methods //
///////////////////

// get todos
export const fetchTodos = () => {
    return (dispatch) => {
        const url = "http://127.0.0.1:8000/todos"

        axios.get(url).then(
            response => {dispatch(getTodoSuccess(response.data))}
        ).catch(
            err => {console.log(err)}
        )

        // fetch(url, {
        //     method: 'GET'
        // }).then (
        //     response => response.json()
        // ).then(
        //     data => {
        //         dispatch(getTodoSuccess(data));
        //     }
        // ).catch(
        //     err => {console.log(err)}
        // )
    }
}

// add todo
export const postTodo = (title, description) => {

    return (dispatch) => {
        const url = "http://127.0.0.1:8000/todos"

        axios.post(url, 
            {title, description}
        ).then(
        response => {
            dispatch(addTodoFailed(""))
            dispatch(addTodoSuccess(true));
        }).catch(err => {
            console.log(err);
            dispatch(addTodoFailed(err));
        })

        // fetch(url, {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify({title, description})
        // }).then (
        //     response => response.json()
        // ).then(
        //     data => {
        //         dispatch(addTodoFailed(""))
        //         dispatch(addTodoSuccess(true));
        //     }
        // ).catch(
        //     err => {
        //         console.log(err);
        //         dispatch(addTodoFailed(err));
        //     }
        // )
    }
}

// delete todo
export const delTodo = (id) => {

    return (dispatch) => {
        const url = "http://127.0.0.1:8000/todos/" + id

        axios.delete(url).then(
            response => {
                dispatch(delTodoFailed(""))
                dispatch(delTodoSuccess(true));
            }
        ).catch(
            err => {
                console.log(err);
                dispatch(delTodoFailed(err));
            }
        )

        // fetch(url, {
        //     method: 'DELETE',
        // }).then (
        //     response => response.json()
        // ).then(
        //     data => {
        //         dispatch(delTodoFailed(""))
        //         dispatch(delTodoSuccess(true));
        //     }
        // ).catch(
        //     err => {
        //         console.log(err);
        //         dispatch(delTodoFailed(err));
        //     }
        // )
    }
}