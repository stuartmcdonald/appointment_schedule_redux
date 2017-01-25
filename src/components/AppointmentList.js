import React from 'react'
import AppointmentSlot from './AppointmentSlot'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const AppointmentList = ({ appts, onAppointmentClick }) => {
    return (
    <ListGroup>
        {
            appts.map((appt, i) => 
                <ListGroupItem bsStyle={appt.reserved ? "danger" : null} key={i}>
                    <AppointmentSlot appointment={appt} onAppointmentClick={() => onAppointmentClick(appt.id)} />
                </ListGroupItem>
            )
        }
    </ListGroup>
)}

export default AppointmentList