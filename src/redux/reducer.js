import { ADD_FAV, FILTER, ORDER, REMOVE_FAV} from "./action-type";

const initialState = { // estado inicial,
    characters: [],
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        
        case ADD_FAV:
            return {
                ...state, //------------- spread operator;
                myFavorites: [...state.allCharacters, action.payload], // hace una copia para no perder lo que hay en la propiedad myFavorite; ASI se agregan personajes sin pisar los anteriores;
                allCharacters: [...state.allCharacters, action.payload],
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(characters => characters.id !== action.payload), // filtra a cada personaje y lo elimina de favoritos si su ID es distinto;
            }

        case FILTER:
            const allCharFiltered = state.allCharacters.filter(characters => characters.gender === action.payload);
            return {
                ...state,
                myFavorites: allCharFiltered,
            } 

        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                    action.payload === 'A'
                    ? allCharactersCopy.sort((a, b) => a.id - b.id)
                    : allCharactersCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;