import { NEW_PROJECT,GET_PROJECTS,ADD_PROJECT,VALIDATE_FORM,CURRENT_PROJECT,DELETE_PROJECT } from '../../types'

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
        case ADD_PROJECT:
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.payload,
                ],
                newProject: false,
                errorform: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                errorform: true
            }
        case CURRENT_PROJECT:
            return {
                ...state,
                project: state.projects.filter(p => p.id === action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(p => p.id !== action.payload),
                project: null
            }
        default:
                return state
    }
}