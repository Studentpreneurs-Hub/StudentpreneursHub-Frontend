import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const CustomModal = ({ error, showErrorModal, handleCloseModal }) => {
  return (
    <Modal show={showErrorModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{error}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
