import { Button, Modal } from "react-bootstrap"

const CourseConfirmDeleteModal = ({show, handleClose, onAgree}) => {
   return (
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={onAgree}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
   )
}

export default CourseConfirmDeleteModal;