import {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import PersonalForm from "./ModalForms/PersonalForm";
import { ImCross } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import PaymentForm from "./ModalForms/PaymentForm";
import Confirmed from "./ModalForms/Confirmed";
import Random from "./ModalForms/RandomNum";


export default function ModalPersonal() {

    const [modalState, setModalState] = useState("modal-one" | "modal-two" | "modal-three" | "close")

    // modal for booking

    const handleShowModalOne = () => {
             setModalState("modal-one")
            }
            
            const handleShowModalTwo = () => {
             setModalState("modal-two")
            }

            const handleShowModalThree = () => {
              setModalState("modal-three")
            }

            const handleClose = () => {
             setModalState("close")
            }

    return (
      
      <div style={{borderRadius:"10rem"}}>

        {/* Main booking button */}

        <Button style={{background:"teal",
                display:"flex",
                paddingRight:"44.4rem",
                alignContent:"center"}}
          onClick={handleShowModalOne}>Book Now</Button>
          
        {/* The first form */}

        <Modal style={{borderRadius:"300rem"}} 
          show={modalState === "modal-one"}>
              
          {/* Header of the model */}

          <Modal.Body style={{background:"teal",
            color:"white",
            fontWeight:"bold",
            paddingTop:"1rem",
            borderRadius:"0.5rem",
            margin:"0.2rem"}}>
              Personal Information 

                {/* Close Button */}
                
                <Button style={{background:"teal",
                  color:"white",
                  border:"none",
                  float:"right",
                  paddingBottom:"0rem",
                  paddingTop:"0rem"}} 
                  onClick={handleClose}>
                    <ImCross></ImCross>
                </Button>

                  {/* Input box on how many people */}

                  <div>
                    <input style={{width:"10%", borderRadius:"2rem", textAlign:"center", float:"right"}} type="number" ></input>   
                    <label style={{float:"right", gap:"1rem"}}><BsPeopleFill /></label>
                  </div>
          </Modal.Body>

            {/* Personal information form (Modal) */}

            <PersonalForm /> 

            {/* Button to continue to the next modal  */}

            <Modal.Footer>
              <Button style={{background:"teal", width:"100%" }} type="submit" onClick={handleShowModalTwo}><PaymentForm /></Button>
            </Modal.Footer>
        </Modal>

        {/* Second Modal */}

        <Modal show={modalState === "modal-two"}>
          <Modal.Body style={{background:"teal",
            color:"white",
            fontWeight:"bold",
            paddingTop:"1rem",
            borderRadius:"0.5rem",
            margin:"0.2rem"}}>
              Payment Information
                  
                {/* Close Button */}

                <Button style={{background:"teal",
                  color:"white",
                  border:"none",
                  float:"right",
                  paddingBottom:"0rem",
                  paddingTop:"0rem"}} 
                    onClick={handleClose}>
                      <ImCross></ImCross>
                </Button>
          </Modal.Body>

            {/* stripe payment */}

            <PaymentForm />

              {/* Button to continue to the next modal  */}

              <Modal.Footer>
                <Button style={{width:"100%", background:"teal"}} onClick={handleShowModalThree}>Confirm</Button>
              </Modal.Footer>
        </Modal>
        
        {/* Third Modal */}

        <Modal show={modalState === "modal-three"}>
          <Modal.Body style={{background:"teal",
            color:"white",
            fontWeight:"bold",
            paddingTop:"1rem",
            borderRadius:"0.5rem",
            margin:"0.2rem"}}>

            {/* Random number is generated with this function on confirmation */}

            <Random /> 
          </Modal.Body>

            {/* Confirm */}

            <Confirmed />

              {/* Closes the modal */}

              <Modal.Footer>
                <Button style={{width:"100%", background:"teal"}} onClick={handleClose}>Done</Button>
              </Modal.Footer>
        </Modal>
      </div>
     
    );
}

   