import { all } from 'redux-saga/effects';
import { watchLoginUser } from './userSaga';

function* helloSaga() {
    console.log("HELLO SAGAS")
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
       watchLoginUser()
    ])
}