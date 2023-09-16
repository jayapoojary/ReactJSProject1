import { WIN_GAME } from "./Constant";
import { LOSE_GAME } from "./Constant";
export const winGame = (data) => {
    return {
        type: WIN_GAME,
        payload: data
    }
}

export const loseGame = (data) => {
    return {
        type: LOSE_GAME,
        payload: data
    }
}

export const resetScore = (data) => {
    return {
        type: 'RESET_SCORE',
        payload: data
    }
}