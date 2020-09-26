const initialState = {

}

export default function (state = initialState, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS': {
            const {data} = action.payload;
            return {...state, userData}
        }
        default: 
            return state;
    }
}