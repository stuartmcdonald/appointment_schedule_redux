import React from 'react'
import './AppointmentSlot.css'

const AppointmentSlot = ({ appointment, onAppointmentClick }) => {
    return (
        <span
            className="hoverable appt-slot"
            onClick={onAppointmentClick}
        >
            {appointment.timeslot + (appointment.reserved ? " with " + appointment.reservee.name + " at " + appointment.reservee.phone : "")}
        </span>
)}

export default AppointmentSlot