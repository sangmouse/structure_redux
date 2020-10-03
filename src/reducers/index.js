
import food from './food'
import users from './users'
import activeFood from './active_food'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    food, 
    users,
    activeFood
})
export default allReducers