import { TASKS_PROJECT,ADD_TASK,VALIDATE_TASK,DELETE_TASK,STATUS_TASK,CURRENT_TASK,EDIT_TASK,CLEAN_TASK } from '../../types'

export default (state, action) => {
    switch(action.type){
        case TASKS_PROJECT:
            return{
                ...state,
                tasksproject: state.tasks.filter(t => t.projectId === action.payload)
            }
        case ADD_TASK:
            return{
                ...state,
                tasks: [ action.payload, ...state.tasks ],
                errortask: false
            }
        case VALIDATE_TASK:
            return{
                ...state,
                errortask: true
            }
        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.payload)
            }
        case EDIT_TASK:
        case STATUS_TASK:
            return{
                ...state,
                tasks: state.tasksproject.map(t => t.id === action.payload.id ? action.payload : t)
            }
        case CURRENT_TASK:
            return{
                ...state,
                currenttask: action.payload
            }
        case CLEAN_TASK:
            return{
                ...state,
                currenttask: null
            }
        default:
                return state
    }
}