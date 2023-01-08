
import {Form, Col, Row} from "react-bootstrap";


export default function PersonalForm (){
  
    return (
      <Form 
        style={{width:"100%",
          paddingLeft:"2rem",
          padding:"1rem"}}>

        {/* First name Input */}

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

        {/* Last name Input */}

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
        </Row>

        {/* Email Input */}

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Enter Email" />
        </Form.Group>

        {/* Address Input */}

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address </Form.Label>
            <Form.Control placeholder="Enter Street Name" />
        </Form.Group>

        <Row className="mb-3">

        {/* City Input */}

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
              <Form.Control placeholder="Enter City" />
          </Form.Group>

        {/* Postcode Input */}

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Post Code</Form.Label>
              <Form.Control placeholder="Enter Postcode" />
          </Form.Group>
        </Row>

        {/* Checkbox */}

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Agree to terms and conditions" />
        </Form.Group>

      </Form>
    );
}
