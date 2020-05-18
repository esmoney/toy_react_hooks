import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // 모든 액션들을 불러와 컴바인 한다.
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;