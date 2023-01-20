import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {pokeReducer} from "./slices/poke.slice";

const rootReducer = combineReducers ({
   pokemons: pokeReducer,
    pokemon:pokeReducer,
    forms:pokeReducer
});

const setupStore =()=> configureStore({
    reducer:rootReducer
});

export {
    setupStore
}