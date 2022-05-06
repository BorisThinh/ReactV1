import userReducer from "./UserReducer";
import {combineReducers} from 'redux'

const mainReducer = combineReducers({
    'user': userReducer
})

export default mainReducer