import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../../services/pokemon.service";




const initialState = {
    pokemons:[],
    pokemon:[],
    error :null,
    pokemonUrl:null,
    forms:[]
};


const getAll = createAsyncThunk(
    'pokeSlice/getAll',
    async ({offset})=> {
        const {data} = await pokemonService.getAll(offset);
        return data
    }
);

const getPokemon = createAsyncThunk(
    'pokeSlice/getPokemon',
    async ({name})=> {
        const {data} = await pokemonService.getPoke(name);
        return data
    }
);

const getForms = createAsyncThunk(
    'pokeSlice/getForms',
    async ({name})=> {
        const {data} = await pokemonService.getForms(name);
        return data
    }
);

const pokeSlice = createSlice({
    name:'pokeSlice',
    initialState,
    reducers:{},

    extraReducers:(builder )=>
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.pokemons = action.payload;
            })
            .addCase(getPokemon.fulfilled,(state, action) => {
                state.pokemon = action.payload;
            })
            .addCase(getForms.fulfilled,(state, action) => {
                state.forms = action.payload;
            })


});

const {reducer:pokeReducer} = pokeSlice;

const pokeAction = {
        getAll,
    getPokemon,
    getForms
};

export {
    pokeReducer,
    pokeAction
}