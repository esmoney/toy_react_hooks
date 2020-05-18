import { combineReducers } from 'redux';

// TODO: 모든 폴더에 존재하는 액션을 불러온다.
const rootReducer = combineReducers({
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;