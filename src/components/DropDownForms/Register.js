import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

export default function Register() {
    const [validated, setValidated] = useState(false);
  
  // Validattion for register

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form style={{padding:"0.2rem", width:"100%"}} noValidate validated={validated} onSubmit={handleSubmit}>

        {/* For Email */}

        <Form.Group style={{width:"100%"}} as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Email"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* For Name */}

        <Form.Group style={{width:"100%"}} as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Name"
            />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* For Password */}

        <Form.Group style={{width:"100%"}} as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter password"/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* For Checkbox */}

        <Form.Group style={{marginTop:"2rem"}} className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"/>
        </Form.Group>

        {/* Register button */}

        <Button style={{marginTop:"1rem", backgroundColor:"teal", color:"white", width:"100%"}} type="submit">Register</Button>
      </Form>
    );
  }
