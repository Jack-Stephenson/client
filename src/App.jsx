import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/views/Home';
import Equipment from './components/views/Equipment-Select';
import WeaponView from './components/views/Weapons';
import ArmorView from './components/views/Armor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/equip_select'}>
            <Equipment />
          </Route>
          <Route exact path={'/weapon/:weapon_type'}>
            <WeaponView />
          </Route>
          <Route exact path={'/armor/:armor_type'}>
            <ArmorView />
          </Route>
          <Route exact path={'/:equipment'}>

          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
