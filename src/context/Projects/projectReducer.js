import { NEW_PROJECT,GET_PROJECTS } from '../../types'

export default (state, action) => {
    switch(action.type){
        case NEW_PROJECT:
            return {
                ...state,
                newProject: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        default:
                return state
    }
}