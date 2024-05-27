import { Hud } from "./components/layout/Hud";
import { MapView } from "./components/map/MapView";
import { Welcome } from "./components/map/welcome/Welcome";

function App() {
  return (
    <div>
      <MapView />
      <Hud />
      <Welcome />
    </div>
  );
}

export default App;
