export const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST'
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS'

export function getPhoto(image){
    return dispatch => {
        dispatch({
            type: GET_PHOTO_REQUEST,
            payload: image
        })
        dispatch({
            type: GET_PHOTO_SUCCESS,
            payload:[1]
        })
    }
     
}