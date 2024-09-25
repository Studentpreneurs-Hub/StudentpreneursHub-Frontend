import React from "react";
import { Accordion } from "react-bootstrap";

function AccordionCompo() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Studentpreneur?</Accordion.Header>
          <Accordion.Body>
            Studentpreneur is a web-based platform designed to support student
            entrepreneurs at the University of Ghana. It provides a centralized
            space where student-run businesses can showcase their products and
            services, connect with potential customers, and collaborate with
            other student entrepreneurs, fostering a vibrant entrepreneurial
            culture within the university community.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Who can use the Studentpreneur platform?
          </Accordion.Header>
          <Accordion.Body>
            The platform is open to all student entrepreneurs at the University
            of Ghana. Whether you run a small business, offer services, or are
            looking to launch a new venture, Studentpreneur is designed to help
            you gain visibility, grow your network, and access resources to
            support your entrepreneurial journey.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How is Studentpreneur different from using social media to promote
            my business?
          </Accordion.Header>
          <Accordion.Body>
            While social media is useful for general promotion, Studentpreneur
            is specifically tailored for student entrepreneurs at the University
            of Ghana. The platform allows you to target your audience within the
            university, ensuring that your products or services reach other
            students, staff, and even university events. Additionally,
            Studentpreneur offers features like networking with other student
            entrepreneurs and access to resources designed to support your
            business growth.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionCompo;
