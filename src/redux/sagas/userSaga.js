import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../../api';
import history from '../../App/history';

function* loginUser(action) {
    const { payload } = action;    
    const {response, error} = yield call(API.authUser, payload);    
    if (response) {
        if(response.data.access) {
            const token = yield call(decodeAndStoreToken, response.data.access)
            yield put({type:"AUTH_SUCCESS", token});
            yield call(getUser, {token});
        } else if (response.data.id) {
            yield put({type: 'NEW_SIGN_UP_AUTO_LOGIN'});
            payload.requestType = 'loginForm';
            const {response, error} = yield call(API.authUser, payload);
            if (response) {
                const token = yield call(decodeAndStoreToken, response.data.access)
                yield put({type:"AUTH_SUCCESS", token});
                yield call(getUser, {token});
            } else if (error) {
                yield put({type:"AUTH_FAILED", error})
                return;
            }
        }        
        yield call(history.push, '/home');
    } else if (error) {       
        yield put({type:"AUTH_FAILED", error})
    }
}

function* getUser(action) {
    const {token} = action;
    const { response, error} = yield call(API.getUser, token);
    if (response) {
        yield put({type: 'GET_USER_SUCCESS', user: response.data })
    } else
    if (error) {
        yield put({type: 'GET_USER_ERROR', error})
    }

}

function* logoutUser() {
    localStorage.removeItem("token");
    yield put({type: 'LOGOUT_USER'})
}

function decodeAndStoreToken(token) {
    localStorage.setItem("token", token);
    return token;
}


export function* watchAuthUser() {
    yield takeEvery('AUTH_REQUEST', loginUser)
}

export function* watchGetUser() {
    yield takeEvery('GET_USER_REQUEST', getUser)
}

export function* watchLogutUser() {
    yield takeEvery('LOGOUT_USER_REQUEST', logoutUser)
}