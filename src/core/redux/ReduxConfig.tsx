import { connect } from "react-redux";
import { applyMiddleware, bindActionCreators, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import * as action from "./RootAction";
import reducers from "./RootReducer";

// 스토어를 생성한다.
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

// state, action 값을 props로 변환한다.
const mapStateToProps = (state: any) => state;
const mapDispatchToProps = (dispatch: any) => bindActionCreators(action, dispatch);

/**
 * 리덕스에 컴포넌트를 연결한다.
 * @param {React.component} component 컴포넌트
 */
export const connectWrapper = (component: any) =>
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(component);

/**
 * 리덕스를 초기화한다.
 * @param {object} initialState 리덕트 초기값
 */
export const configureStore = (initialState = {}) => {
    const persistConfig = { key: "root", storage };
    const reduxStore = persistReducer(persistConfig, reducers);
    const store = createStoreWithMiddleware(
        combineReducers({ reduxStore }),
        initialState
    );
    const persistor = persistStore(store);

    return { store, persistor };
};
