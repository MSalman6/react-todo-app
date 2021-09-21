// initial state
const initialState = {
    value: 0
}

// define types
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// define actions
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

// define which reducer to call depending on action type
export default (state=initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: state.value +=1 }
        case DECREMENT:
            return { ...state, value: state.value -=1 }
        default:
            return state
    }
}