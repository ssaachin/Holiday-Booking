import data from "./Data/FlightData.json";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImEarth } from 'react-icons/im';
import {MdOutlineMedicalServices} from 'react-icons/md';
import { TiWeatherCloudy } from 'react-icons/ti';
import ModalPersonal from "../ModalPersonal";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";




export default function Flights() {

    const [searchTerm, setSearchTerm] = useState('')

    return (

        <div className="Act" style={{display: "flex",
            justifyContent:"center",
            alignItems:"center", 
            flexDirection:"column",
            backgroundColor: "white",
            padding: "0.5rem"
          }}>


            <div style={{borderRadius:"100rem", borderColor:"black", width:"50%"}}>

            {/* Search Box */}


            {/* From Box */}
            <input style={{
                border: "none",
                textAlign: "center",
                color: "red",
                width:"20.5%",
                borderRadius:"2rem",
                padding:"1rem"}}
                type="text" placeholder="From"/>

            {/* To Box, searches for the what the user has put in the box going through the data*/}

            <input style={{ backgroundColor: "lightblue",
                border: "white",
                textAlign: "center",
                color: "black",
                borderRadius:"2rem",
                padding:"1rem",
                width:"20%",
                fontSize:"1.1rem"}}
                type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>

            {/* From Date Box */}

            <input style={{ backgroundColor: "transparent",
                border: "none",
                textAlign: "center",
                color: "black",
                width:"20.5%",
                borderRadius:"2rem",
                padding:"1rem"}}
                type="date" />

            {/* Till date Box */}

            <input style={{ backgroundColor: "lightblue",
                border: "none",
                textAlign: "center",
                color: "black",
                width:"25.5%",
                borderRadius:"2rem",
                padding:"1rem",}} 
                type="date" />
        
            </div>
            
            {/* If the input is empty a list of the data is displayed however if the user
            searches for something the page will display what the user is looking for */}

            {data.filter((val)=> {
                if (searchTerm === "") {
                    return val
                } else if (val.text.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key)=> {
                return(
                    <p style={{padding:"1.5rem", width:"55rem"}}> 
                    <Card>

                        {/* The header of the card  */}

                            <Card.Header>
                                <Card.Title style={{float:"right"}}>{val.cost}</Card.Title>
                                <Card.Title>{val.text}</Card.Title>
                            </Card.Header>

                        {/* Body of the card */}

                        <Card.Body>
                
                            {/* Leaflet Map */}

                            <div style={{margin:"1rem"}}>
                                <MapContainer center={val.marker} zoom={9} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    {/* The Marker and PopUp display */}

                                    <Marker position={val.marker}>
                                        <Popup>
                                            {val.airport}
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>

                            {/* Activity information Card & List */}

                            <Card.Text style={{display:"flex", width:"70rem"}}>
                                {val.description}
                                <ListGroup style={{paddingRight: "20rem", width: "45rem"}}>
                                    <ListGroup.Item><TiWeatherCloudy></TiWeatherCloudy>{val.weather}</ListGroup.Item>
                                    <ListGroup.Item><ImEarth></ImEarth>{val.country}</ListGroup.Item>
                                    <ListGroup.Item><MdOutlineMedicalServices></MdOutlineMedicalServices>{val.covid}</ListGroup.Item>      
                                </ListGroup>
                            </Card.Text>

                            {/* This function is shows the form for personal details and payment */}
                            
                            <ModalPersonal/>
                        </Card.Body>
                    </Card>
                    </p>
                );
            })}
        </div>
    );}