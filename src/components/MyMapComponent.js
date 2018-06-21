import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDrEW2DrI424aSFLsW-QXQAHs_YCeNhYGQ",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 49.283, lng: -123.120 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 49.283, lng: -123.120 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)
// test


export default MyMapComponent;