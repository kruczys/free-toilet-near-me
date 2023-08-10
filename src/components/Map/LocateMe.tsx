import { createControlComponent } from "@react-leaflet/core";
import { Control, ControlOptions } from "leaflet";
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.css";

interface Props extends ControlOptions {}

const LocateMe = (props: Props) => {
  const { Locate } = Control;
  const instance = new Locate(props);

  return instance;
};

export default createControlComponent(LocateMe);
