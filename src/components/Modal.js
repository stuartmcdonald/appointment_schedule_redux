import React from 'react'
import { Modal, InputGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

const ReservationModal = React.createClass({
  
    render () {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Schedule Your Appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl id="name-input" type="text" defaultValue={this.props.reservee ? this.props.reservee.name : null} />
                        </InputGroup>
                        <InputGroup>
                            <ControlLabel>Phone</ControlLabel>
                            <FormControl id="phone-input" type="text" defaultValue={this.props.reservee ? this.props.reservee.phone : null} />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.handleScheduleApt}>Schedule Appointment</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    },

	// Inform the store that the reservee information for the currently selected appointment
	// needs to be updated with the values that are now in the name/phone textboxes.
	handleScheduleApt () {
		if (this.bothFieldsFilled()) {
			this.props.updateAppointmentReservee({
                name: document.getElementById("name-input").value,
                phone: document.getElementById("phone-input").value
            });
            this.handleClose();
		}
	},

	// Inform the store that no appointment is currently selected when the modal is closed.
	// Also, reset the state of the modal so the textboxes are empty
	handleClose () {
		this.props.updateSelectedAppointment(null);
	},

	// Returns true if both the name and phone textboxes have been filled in.
	bothFieldsFilled () {
        return document.getElementById("name-input") && 
            document.getElementById("phone-input") && 
		    document.getElementById("name-input").value.length &&
            document.getElementById("phone-input").value.length;
	}
})

export default ReservationModal