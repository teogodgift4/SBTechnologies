import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import doctors from '../assets/doctors.json';
import findage from '../helpers/findage';


function Map() {
    console.log(findage("1955-23-3"));
    return (
        <MapContainer center={[doctors.results[0].latitude, doctors.results[0].longitude]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
{doctors.results.map((item, index) => 
    <Marker  key={index} position={[item.latitude, item.longitude]} title={`${item.id}`}>
        <Popup>
            <div className="popupwrapper">
                <div className="stylewrapper">
                <div className="firstLetters">{`${item.first_name[0]}${item.last_name[0]}`}</div>
                <div className="wrapper">
      <div className="names"><h2>{`${item.first_name} ${item.last_name}`}</h2></div>
      <div className="address">{`${item.street_address}, ${item.city}, ${item.country}, ${item.zip_code}`}</div>
      </div>
      </div>
      <div className="info"><span className="personal_data">{findage(`${item.date_of_birth}`)} ετών</span><span className="personal_data">{findage(`${item.practice_start_date}`)} χρόνια εμπειρίας</span><span className="personal_data">{`${item.languages}`}</span></div>
            </div>
    </Popup>
    </Marker>
)}
</MapContainer>
    )
}


export default Map
