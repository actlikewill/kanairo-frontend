import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../../api';
import history from '../../App/history';



function* loginUser(action) {
    const { payload } = action;    
    const {response, error} = yield call(API.authUser, payload);    
    if (response) {
        yield put({type:"AUTH_SUCCESS", response});
        yield call(history.push, '/home');
    } else if (error) {       
        yield put({type:"AUTH_FAILED", error})
    }
}


export function* watchLoginUser() {
    yield takeEvery('AUTH_REQUEST', loginUser)
}