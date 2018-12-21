import {GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS} from '../actions/randomDogActions'

const initalState = {
    image:[],
    error:false,
    
}

export function randomDogReducer(state = initalState, action){
    switch (action.type){
        case GET_PHOTO_REQUEST:
        return {... state, image:action.payload, error:false}
        default:
        return state
    }
    
}