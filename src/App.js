import {Route,Routes} from "react-router-dom";
import './App.css';
import PokemonsPage from "./pages/PokemonsPage/PokemonsPage";
import Main from "./pages/Main/Main"
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import PokemonForms from "./components/PokemonForms/PokemonForms";
import SearchPage from "./pages/SearchPage/SearchPage";
import AbilityPokemonsPage from "./pages/AbilityPokemonsPage/AbilityPokemonsPage";
import TypePokemonsPage from "./pages/TypePokemonsPage/TypePokemonsPage";


function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Main/>}>
              <Route path={'search'} element = {<SearchPage/>}/>
              <Route path={'search/:name'} element = {<AbilityPokemonsPage/>}/>
              <Route path={'search/type/:name'} element = {<TypePokemonsPage/>}/>
              <Route path={'pokemons'} element = {<PokemonsPage/>}/>
              <Route path={'pokemons/:name'} element = {<PokemonInfo/>}/>
              <Route path={'forms/:name'} element = {<PokemonForms/>}/>
          </Route>

      </Routes>
  );
}

export default App;
