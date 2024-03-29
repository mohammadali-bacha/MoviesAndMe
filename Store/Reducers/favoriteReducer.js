// import { truncate } from "fs";

const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action){
    let nextState
    switch(action){
        case 'TOGGLE_FAVORITE' :
        const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id);
        if (favoriteFilmIndex !== -1) {
            //supression
            nextState = {
                ...state,
                favoritesFilm : state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
            } 
        } 
        else {
            // ajouter
            nextState = {
                ...state,
                favoritesFilm: [ ...state.favoritesFilm, action.value]
            }
        }
        return nextState || state
        default: 
        return state
    }
}

export default toggleFavorite