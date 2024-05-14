import { useEffect } from "react";
import { Hud } from "./components/layout/Hud";
import { MapView } from "./components/map/MapView";
import { useDisclosure } from "@nextui-org/react";
import { Welcome } from "./components/map/welcome/Welcome";

function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <div>
      <MapView />
      <Hud />
      <Welcome isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default App;
