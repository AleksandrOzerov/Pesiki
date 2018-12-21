import {combineReducers} from 'redux'
import {dogListReducer} from './dogList'
import {randomDogReducer} from './randomDog'


export const rootReducer = combineReducers({
  randomDog: randomDogReducer,
  dogList: dogListReducer
})
