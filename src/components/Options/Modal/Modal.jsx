import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ConfirmationModal(props) {
    function postData(e){
        e.preventDefault();
        const newGuest = {
          username: 'Test',
          time: new Date ().getTime()
        }
        axios.post('http://localhost:5005/create', newGuest).then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Awesome!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please enter your <span>Zoom-name</span> so I can let you in:</h4>
            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="name"
                    placeholder="Your Zoom-name"
                />
                <label htmlFor="floatingInputCustom">Your Zoom-name</label>
            </Form.Floating>
            <Button type="submit" onClick={e => postData(e)}>Submit</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default ConfirmationModal