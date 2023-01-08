import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

export default function Login() {
    const [validated, setValidated] = useState(false);
  
    // Validation for Login

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (

      // Login form

      // For email
      <Form style={{padding:"0.8rem", width:"100%"}} noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group style={{width:"100%"}} as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Email"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* For password */}

          <Form.Group style={{width:"100%"}} as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter password"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* checkbox */}

          <Form.Group style={{marginTop:"2rem"}} className="mb-3">
            <Form.Check
              label="Remember me"/>
          </Form.Group>

        {/* Login button */}

        <Button 
          style={{marginTop:"1rem",
                   backgroundColor:"teal",  
                    color:"white",  
                      width:"100%"}} 
          type="submit">Login</Button>
      </Form>
    );
  }
