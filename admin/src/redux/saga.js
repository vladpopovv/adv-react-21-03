import { all } from 'redux-saga/effects'
import { saga as peopleSaga } from '../ducks/people'
import { saga as authSaga } from '../ducks/auth'
import { saga as eventsSaga } from '../ducks/events'

export default function* rootSaga() {
  yield all([peopleSaga(), authSaga(), eventsSaga()])
}
