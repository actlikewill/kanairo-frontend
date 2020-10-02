const initialState = {
    loginError: "",
    loginSuccess: false,
    isAuthenticated: false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case 'AUTH_SUCCESS': {
            const { token } = action;
            return {...state, token}
        }
        case 'AUTH_FAILED': {
            const { error } = action;
            return {...state, error}
        }
        case 'GET_USER_SUCCESS': {
            const { user } = action;
            return {...state, user, isAuthenticated: true}
        }
        case 'GET_USER_FAILED': {
            const { error } = action;
            return {...state, error}
        }
        case 'LOGOUT_USER': {
            return {...state, user:null, isAuthenticated: false}
        }
        default: 
            return state;
    }
}