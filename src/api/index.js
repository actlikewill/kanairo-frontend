import axios from 'axios';


const BACKEND_URL = process.env.REACT_APP_KANAIRO_BACKEND_API;

function requestLoginUser(payload) {   
    const { url, data } = payload;
    console.log(`${BACKEND_URL}${url}`);
    return axios
        .post(`${BACKEND_URL}${url}`, data)
        .then(response => ({response}))
        .catch(e => {
            if (e.response) {
                return { error: e.response.data}
            } else {
                return { error: e.message}
            }        
        })    
}

export {
    requestLoginUser,
}