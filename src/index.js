import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './css/main.css';

import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reportWebVitals from './reportWebVitals';
import GitProjectAllFile from "./components/GitProjectAllFile";
import HomePage from "./components/HomePage";
import {rootReducer} from "./redux/reducers/rootReducer";

const store = createStore(rootReducer);
ReactDOM.render(
//
    <Provider store={store}>

{/*<CounterRedux/>*/}
<App/>
    </Provider>,


//   <React.StrictMode>
//
//     <App />
// {/*<GitProjectAllFile/>*/}
//   </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
