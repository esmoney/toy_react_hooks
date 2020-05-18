import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// redux
import { configureStore } from "./core/redux/ReduxConfig";
import rootReducer from './core/redux/RootReducer';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";



// const store = createStore(rootReducer);

const { store, persistor } = configureStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
