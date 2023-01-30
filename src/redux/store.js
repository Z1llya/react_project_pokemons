import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {pokeReducer} from "./slices/poke.slice";

const rootReducer = combineReducers ({
    pokemons: pokeReducer,
    poke:pokeReducer,
    forms:pokeReducer,
    ability:pokeReducer,
    searchPokemons:pokeReducer,
    type:pokeReducer,
    abilityFilters:pokeReducer,
    typeFilters:pokeReducer
});

const setupStore =()=> configureStore({
    reducer:rootReducer
});

export {
    setupStore
}