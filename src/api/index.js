import axios from 'axios';


const BACKEND_URL = process.env.REACT_APP_KANAIRO_BACKEND_API;

const urls = {
    loginForm: "/auth/jwt/create/",
    registerForm: "/auth/users/"

}

function authUser(payload) {   
    const { requestType, data } = payload;
    return axios
        .post(`${BACKEND_URL}${urls[requestType]}`, data)
        .then(response => ({response}))
        .catch(e => {
            if (e.response) {
                return { error: e.response.data}
            } else {
                return { error: {detail: e.message}}
            }        
        })    
}

export {
    authUser,
}