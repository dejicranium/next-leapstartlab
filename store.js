import {configureStore} from "@redux/toolkit"

const initialState = {value: 0}

function counterReducer(state = initialState, action) {
    if(action.type === 'couunter/increment') {
        return {
            ...state,
            value: state.value + 1
        }
    }

    return state
    
}

const store = configureStore({reducer: counterReducer})

const increment = () ={
    return {
        type: 'counter/increement'
    }
}