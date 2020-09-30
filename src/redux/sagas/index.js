import { all } from 'redux-saga/effects';
import { watchLoginUser } from './userSaga';

export default function* rootSaga() {
    yield all([
       watchLoginUser()
    ])
}