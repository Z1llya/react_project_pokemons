import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../../services/pokemon.service";




const initialState = {
    pokemons:[],
    poke:[],
    searchPokemons:[],
    ability: [],
    abilityFilters:[],
    typeFilters:[],
    type:[],
    forms:[],
};


const getAll = createAsyncThunk(
    'pokeSlice/getAll',
    async ({offset,limit})=> {
        const {data} = await pokemonService.getAll(offset,limit);
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

const getSearchPokemons = createAsyncThunk(
    'pokeSlice/getSearchPoke',
    async ({offset,limit})=> {
        const {data} = await pokemonService.getAll(offset,limit);
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

const getAbility = createAsyncThunk(
    'pokeSlice/getAbility',
    async ({name})=> {
        const {data} = await pokemonService.getAbility(name);
        return data
    }
);

const getAllAbility = createAsyncThunk(
    'pokeSlice/getAllAbility',
    async ({offset,limit})=> {
        const {data} = await pokemonService.getAllAbility(offset,limit);
        return data
    }
);
const getAllType = createAsyncThunk(
    'pokeSlice/getAllType',
    async ({offset,limit})=> {
        const {data} = await pokemonService.getAllType(offset,limit);
        return data
    }
);

const getType = createAsyncThunk(
    'pokeSlice/getType',
    async ({name})=> {
        const {data} = await pokemonService.getType(name);
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
                state.poke = action.payload;
            })
            .addCase(getForms.fulfilled,(state, action) => {
                state.forms = action.payload;
            })
            .addCase(getAllAbility.fulfilled,(state, action) => {
                state.ability = action.payload;
            })
            .addCase(getSearchPokemons.fulfilled,(state, action) => {
                state.searchPokemons = action.payload;
            })
            .addCase(getAllType.fulfilled,(state, action) => {
                state.type = action.payload;
            })
            .addCase(getAbility.fulfilled,(state, action) => {
                state.abilityFilters = action.payload;
            })
            .addCase(getType.fulfilled,(state, action) => {
                state.typeFilters = action.payload;
            })


});

const {reducer:pokeReducer} = pokeSlice;

const pokeAction = {
    getAll,
    getPokemon,
    getForms,
    getAllAbility,
    getSearchPokemons,
    getAllType,
    getAbility,
    getType,
};

export {
    pokeReducer,
    pokeAction
}