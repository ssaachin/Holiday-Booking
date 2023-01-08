import data from "./Data/Data.json";
import { useState } from "react";
import { Carousel, ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImEarth } from 'react-icons/im';
import {MdOutlineMedicalServices} from 'react-icons/md';
import { TiWeatherCloudy } from 'react-icons/ti';
import ModalPersonal from "../ModalPersonal";





export default function Stays() {

    const [searchTerm, setSearchTerm] = useState('')
    
    return (

        <div className="Act" style={{display: "flex",
            justifyContent:"center",
            alignItems:"center", 
            flexDirection:"column",
            backgroundColor: "white",
            padding: "0.5rem"
        }}>

            <div style={{borderRadius:"100rem", backgroundColor:"teal", width:"50%"}}>
            
            {/* Search Box */}

            {/* Searches for the stays text in the data file */}

            <input style={{ backgroundColor: "lightblue",
                border: "white",
                textAlign: "center",
                color: "black",
                borderRadius:"2rem",
                padding:"1rem",
                width:"33%",
                fontSize:"1.1rem"}}
                type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>

            {/* From date Box */}

            <input style={{ backgroundColor: "transparent",
                border: "none",
                textAlign: "center",
                color: "black",
                width:"33.5%",
                borderRadius:"2rem",
                padding:"1rem"}}
                type="date" />

            {/* Till date Box */}

            <input style={{ backgroundColor: "lightblue",
                border: "none",
                textAlign: "center",
                color: "black",
                width:"33.5%",
                borderRadius:"2rem",
                padding:"1rem"}}
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

                    <Card.Header >
                        <Card.Title style={{float:"right"}}>{val.cost}</Card.Title>
                        <Card.Title>{val.text}</Card.Title>
                    </Card.Header>

                    {/* Body of the card */}

                    <Card.Body>

                    {/* Carousel for Activity Pictures */}
                    
                        <Carousel style={{paddingBottom:"2rem"}}fade>
                            
                            {/* First Image */}

                            <Carousel.Item>
                                <img style={{width:"100%"}} src={val.image} alt=""
                                />
                                <Carousel.Caption>
                                    <h3>First</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    
                            {/* Second Image */}
                    
                            <Carousel.Item>
                                <img style={{width:"100%"}} src={val.images} alt="" 
                                />
                                <Carousel.Caption>
                                    <h3>Second</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    
                            {/* Third Image */}
                    
                            <Carousel.Item>
                                <img style={{width:"100%"}} src={val.img} alt=""
                                />
                                <Carousel.Caption>
                                    <h3>Third</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    {/* Stays information Card & List */}

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



