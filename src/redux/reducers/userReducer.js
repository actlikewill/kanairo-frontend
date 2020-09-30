const initialState = {
    loginError: "",
    loginSuccess: false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case 'AUTH_SUCCESS': {
            const {response: { data }} = action;
            return {...state, tokens: data, loginSuccess: true}
        }
        case 'AUTH_FAILED': {
            const { error } = action;
            return {...state, error}
        }
        default: 
            return state;
    }
}