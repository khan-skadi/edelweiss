import React from "react";
import useStyles from "./MobileMap.styles";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { ObjectLiteral } from "../../utils/interface/interface";

const MobileMap = (props: ObjectLiteral) => {
  const { mobileMap } = useStyles();

  return (
    <div className={mobileMap}>
      <Map
        google={props.google}
        style={mapStyle}
        initialCenter={{ lat: -33.858258, lng: 150.959442 }}
        zoom={18}
      >
        <Marker
          position={{ lat: -33.858258, lng: 150.959442 }}
          mapCenter={{ lat: -33.858258, lng: 150.959442 }}
          title={"Edelweiss Stone"}
        />
      </Map>
    </div>
  );
};

const mapStyle = {
  width: "100%",
  height: "450px",
  margin: 0,
  padding: 0,
  verticalAlign: "baseline",
  boxSizing: "border-box",
  borderBottom: "10px solid #158d43",
  position: "relative"
};
// apiKey: `${process.env.REACT_APP_GOOGLE_MAP_API}`
export default GoogleApiWrapper({
  apiKey: "AIzaSyC1WHIhrCxXc_L5hi6XlqKchZ05Ac7ISH0"
})(MobileMap);
