import { useRef, useState } from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Add = ({ addMovie }) => {
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = useState(false);

  let subtitle;
  let MovieNewRef = useRef();
  let descriptionRef = useRef();
  let posterURLRef = useRef();
  let ratingRef = useRef();

  const addNewMovie = () => {
    const NewMovie = {
      title: MovieNewRef.current.value,
      description: descriptionRef.current.value,
      posterURL: posterURLRef.current.value,
      rating: Number(ratingRef.current.value),
    };
    addMovie(NewMovie);
    closeModal();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "blue";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>add movie</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add new movie</h2>
        <button onClick={closeModal}>close</button>
        <Form>
          {/* <Form onSubmit={addNewMovie}> */}
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Movie title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="title"
              ref={MovieNewRef}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>description</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="description"
              ref={descriptionRef}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>posterURL</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Poster URL "
              ref={posterURLRef}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="rating"
              ref={ratingRef}
            />
          </Form.Group>
          {/* <Button type="submit" >Add</Button> */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              addNewMovie();
            }}
          >
            add
          </Button>
        </Form>
      </Modal>
    </>
  );
};
export default Add;
