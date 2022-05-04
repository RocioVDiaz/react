import React from "react";
import { Button, Form } from "react-bootstrap";

function Forms({formData, setFormData}) {
    const handleChange=(event)=>{
        event.preventDefault()
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        console.log(formData)
    }
  return (
    <Form
    onSubmit={handleSubmit}>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingrese su nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" name='name' onChange={handleChange}  value={formData.name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese su Email</Form.Label>
        <Form.Control type="email" placeholder="Email"  name='email' onChange={handleChange} value={formData.email}/>     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingrese su número de teléfono</Form.Label>
        <Form.Control type="text" placeholder="Teléfono"  name='phone' onChange={handleChange} value={formData.phone}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
       Enviar
      </Button>
    </Form>
  );
}

export default Forms;
