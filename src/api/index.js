import axios from 'axios';


const BACKEND_URL = process.env.REACT_APP_KANAIRO_BACKEND_API;

const urls = {
    loginForm: "/auth/jwt/create/",
    registerForm: "/auth/users/",
    getUser: "/auth/users/me/",
    socialAuth: "auth/oauth/login"

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

function getUser(token, tokenType='JWT') {
    console.log(`${tokenType} ${token}`);
    return axios
        .get(`${BACKEND_URL}${urls.getUser}`, {
            headers: {
                'Authorization': `${tokenType} ${token}`
            }
        })
        .then(response => ({response}))
        .catch(e => {
            if (e.response) {
                return { error: e.response.data}
            } else {
                return { error: {detail: e.message}}
            }        
        }) 
}       

function socialAuth(payload) {    
    const { token, tokenType} = payload
    return getUser(token, tokenType)
}
export {
    authUser,
    getUser,
    socialAuth
}