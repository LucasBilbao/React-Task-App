import { combineReducers } from "redux";
import taskReducer from "./taskSlice/taskSlice";
import formReducer from "./formSlice/formSlice";


const rootReducers = combineReducers({ task: taskReducer, form: formReducer });

export default rootReducers;