import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function Forms({formData, setFormData, generateOrder, removeCart}) {
    const handleChange=(event)=>{
        event.preventDefault()
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit=(e)=>{        
        e.preventDefault()
        generateOrder(e,formData)
        console.log(formData)
        removeCart()
    }
  return (
    <Form
    onSubmit={handleSubmit} className= "p-4">
       
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label className="text-white" column sm={2}>
    Ingrese su nombre
    </Form.Label>
    <Col sm={10}>
    <Form.Control type="text" placeholder="Nombre" name='name' onChange={handleChange}  value={formData.name} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label className="text-white" column sm={2}>
    Ingrese su Email
    </Form.Label>
    <Col sm={10}>
    <Form.Control type="email" placeholder="Email"  name='email' onChange={handleChange} value={formData.email}/>   
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label className="text-white" column sm={2}>
    Ingrese su teléfono
    </Form.Label>
    <Col sm={10}>
    <Form.Control type="text" placeholder="Teléfono"  name='phone' onChange={handleChange} value={formData.phone}/>
    </Col>
  </Form.Group>
      
      <Button variant="danger" type="submit">
       Enviar
      </Button>
    </Form>
  );
}

export default Forms;
