import { all } from 'redux-saga/effects';
import { watchAuthUser, watchGetUser, watchLogutUser } from './userSaga';

export default function* rootSaga() {
    yield all([
       watchAuthUser(),
       watchGetUser(),
       watchLogutUser()
    ])
}