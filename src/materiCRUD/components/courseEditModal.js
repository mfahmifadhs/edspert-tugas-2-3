import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CourseEditModal = ({ show, handleClose, handleSubmit, data }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitData = () => {
    // const timestamp = Math.floor(Date.now() / 1000);
    const submitPayload = {
      id: data.id,
      title,
      description,
    };
    handleSubmit(submitPayload);
  };
  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);
  }, [data]);
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className={"mb-3"}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Course Title"
              defaultValue={title}
            />
          </Form.Group>
          <Form.Group className={"mb-3"}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
              placeholder="Course Description"
              defaultValue={description}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitData}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseEditModal;
