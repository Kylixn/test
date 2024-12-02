import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("/api/sendWebhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Votre message a été envoyé avec succès !");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const error = await response.json();
        console.error("Erreur API :", error);
        alert(`Erreur lors de l'envoi : ${error.error}`);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      alert("Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <section>
      <Container fluid className="contact-section" style={{ minHeight: "100vh", paddingTop: "100px" }}>
        <Container>
          <Row>
            <Col md={6} className="mx-auto">
              <h2 className="text-center" style={{ color: "#fff" }}>
                Contactez-moi
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label style={{ color: "#fff" }}>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Votre nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label style={{ color: "#fff" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Votre email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label style={{ color: "#fff" }}>Téléphone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Votre téléphone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label style={{ color: "#fff" }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Votre message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ resize: "none" }}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Particle />
    </section>
  );
}

export default Contact;
