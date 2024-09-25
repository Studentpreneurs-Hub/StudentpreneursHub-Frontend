import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";

const FAQ = () => {
  return (
    <>
      <Header />
      <Container>
        <h1 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h1>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Studentpreneur?</Accordion.Header>
            <Accordion.Body>
              Studentpreneur is a web-based platform designed to support student
              entrepreneurs at the University of Ghana. It provides a
              centralized space where student-run businesses can showcase their
              products and services, connect with potential customers, and
              collaborate with other student entrepreneurs, fostering a vibrant
              entrepreneurial culture within the university community.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Who can use the Studentpreneur platform?
            </Accordion.Header>
            <Accordion.Body>
              The platform is open to all student entrepreneurs at the
              University of Ghana. Whether you run a small business, offer
              services, or are looking to launch a new venture, Studentpreneur
              is designed to help you gain visibility, grow your network, and
              access resources to support your entrepreneurial journey.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How is Studentpreneur different from using social media to promote
              my business?
            </Accordion.Header>
            <Accordion.Body>
              While social media is useful for general promotion, Studentpreneur
              is specifically tailored for student entrepreneurs at the
              University of Ghana. The platform allows you to target your
              audience within the university, ensuring that your products or
              services reach other students, staff, and even university events.
              Additionally, Studentpreneur offers features like networking with
              other student entrepreneurs and access to resources designed to
              support your business growth.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Are there any costs involved in using the platform?
            </Accordion.Header>
            <Accordion.Body>
              Currently, Studentpreneur is free for all student entrepreneurs at
              the University of Ghana. In the future, premium features or
              services may be introduced, but the core platform is designed to
              be accessible to every student entrepreneur.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              How can I provide feedback or suggest improvements for the
              platform?
            </Accordion.Header>
            <Accordion.Body>
              We value your feedback! You can provide feedback directly through
              the platform by emailing us at studenpreneur21@gmail.com. Your
              insights help us improve the platform and better serve student
              entrepreneurs.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Footer />
    </>
  );
};

export default FAQ;
