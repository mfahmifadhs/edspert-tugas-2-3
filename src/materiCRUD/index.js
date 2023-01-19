import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModal from "./components/courseCreateModal";
import courseService from "./utils/service";

const CrudPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [courses, setCourses] = useState([]);
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
                      <td>Aksi</td>
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
    </>
  );
};

export default CrudPage;
