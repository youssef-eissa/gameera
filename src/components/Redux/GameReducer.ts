import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        game: 0 as number
    },
    reducers: {
        setGame: (state, action) => {
            state.game = action.payload
        }
    }
})

export const { setGame } = gameSlice.actions
export const gameReducer= gameSlice.reducer