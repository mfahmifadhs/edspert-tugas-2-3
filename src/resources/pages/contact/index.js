import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseConfirmDeleteModal from "../../components/courseConfirmDeleteModal";
import CourseCreateModal from "../../components/courseCreateModal";
import CourseEditModal from "../../components/courseEditModal";
import courseService from "../../utils/serviceContact";

const ContactPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(false);

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const handleAddCourse = (payload) => {
    courseService.addCourse(payload);
    setShowCreateModal(false);
    fetchCourses();
  };

  const fetchCourses = () => {
    const result = courseService.getAllCourse();
    setCourses(result.data);
    console.log("res", courses);
  };

  const onOpenEdit = (course) => {
    setSelectedCourse(course);
    setShowEditModal(true);
  }

  const closeEditModal = () => {
    setSelectedCourse({});
    setShowEditModal(false);
  }

  const handleEditCourse = (payload) => {
    const {id, ...otherData} = payload; // Membuat variable id dan other
    courseService.updateCourse(id, otherData);

    closeEditModal();
    fetchCourses();
  }

  const openDeleteModal = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  }

  const closeDeleteModal = () => {
    setSelectedCourse({});
    setShowDeleteModal(false);
  }

  const handleDeleteCourse = (payload) => {
    const {id} = selectedCourse;
    courseService.deleteCourse(id);
    fetchCourses()
    closeDeleteModal()
  }

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <>
      <Container style={{ paddingTop: "50px" }}>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h3>Course List</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginBottom: "20px",
              }}
            >
              <Button
                variant={"success"}
                onClick={() => setShowCreateModal(true)}
              >
                Add Course
              </Button>
            </div>
            <Table striped bordered hover>
              <thead>
                <td>No</td>
                <td>Name</td>
                <td>Description</td>
                <td>Action</td>
              </thead>
              <tbody>
                {courses.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>
                        <Button
                          onClick={() => onOpenEdit(item)}
                          variant={"warning"}
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          onClick={() => openDeleteModal(item)}
                          variant={"danger"}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <CourseCreateModal
        show={showCreateModal}
        handleSubmit={handleAddCourse}
        handleClose={toggleCreateModal}
      />
      <CourseEditModal 
        show={showEditModal}
        handleClose={closeEditModal}
        handleSubmit={handleEditCourse}
        data={selectedCourse}
      />
      <CourseConfirmDeleteModal 
        show={showDeleteModal}
        handleClose={closeDeleteModal}
        onAgree={handleDeleteCourse}
      />
    </>
  );
};

export default ContactPage;
