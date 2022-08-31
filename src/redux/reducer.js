
const initialState = {
    count: 3,
    value: 0
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'INC': 
            return {
                ...state,
                count: state.count + 1
            }
        case 'DEC': 
            return {
                ...state,
                count: state.count - 1
            }
        case 'ENT': 
            return {
                ...state,
                count: state.value 
            }
        case 'VAL': 
            return {
                ...state,
                value: +action.payload
            }
        default:
            return state;
    }
}

export default reducer;