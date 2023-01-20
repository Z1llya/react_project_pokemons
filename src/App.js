import {Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import PokemonsPage from "./pages/PokemonsPage";
import Main from "./pages/Main"
import PokemonInfo from "./components/Pokemon/PokemonInfo";
import PokemonForms from "./components/PokemonForms";
import SearchPage from "./pages/SearchPage";


function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Main/>}>
              <Route path={'search'} element = {<SearchPage/>}/>
              <Route path={'pokemons'} element = {<PokemonsPage/>}/>
              <Route path={'pokemons/:name'} element = {<PokemonInfo/>}/>
              <Route path={'forms/:name'} element = {<PokemonForms/>}/>
          </Route>

      </Routes>
  );
}

export default App;
