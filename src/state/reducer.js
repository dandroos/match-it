import { combineReducers } from "redux";
import dialogs from "./dialogs/reducer";
import collections from "./collections/reducer";

export default combineReducers({ dialogs, collections });
