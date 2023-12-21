import { WIN_GAME } from "./Constant";
import { LOSE_GAME } from "./Constant";

const initialValue = {
    score : 10
}

const winningReducer = (state = initialValue, action) => {
    switch(action.type) {
        case WIN_GAME : 
            return {
                ...state,
                score: state.score + 1
            }
        case LOSE_GAME: 
            return {
                ...state,
                score: state.score - 1
            }
        case 'RESET_SCORE': 
            return {
                ...state,
                score: state.score = 0
            }
        case WIN_GAME: 
    
        default: return state
    }
}

export default winningReducer