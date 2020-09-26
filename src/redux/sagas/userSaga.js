import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../../api';


function* loginUser(action) {
    const { payload } = action;    
    const {response, error} = yield call(API.requestLoginUser, payload);    
    if (response) {
        yield put({type:"LOGIN_SUCCESS", response})
    } else if (error) {
        console.log(error)
        yield put({type:"LOGIN_FAILED", error})
    }
}


export function* watchLoginUser() {
    yield takeEvery('LOGIN_REQUEST', loginUser)
}