import { createControlComponent } from "@react-leaflet/core";
import { Control, ControlOptions } from "leaflet";
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.css";

const LocateMe = (props: ControlOptions) => {
  const { Locate } = Control;
  const instance = new Locate(props);

  return instance;
};

export default createControlComponent(LocateMe);
