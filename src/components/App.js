import React from 'react'
import AppointmentListContainer from '../containers/AppointmentListContainer'
import { Jumbotron } from 'react-bootstrap'
import ReservationModalContainer from '../containers/ReservationModalContainer'

const App = () => {

    return(
    <div className="container">
        <Jumbotron>
            <h1>All Appointments</h1>
            <p>Select a time slot to schedule an appointment!</p>
        </Jumbotron>
        <AppointmentListContainer />
        <ReservationModalContainer />
    </div>
)}

export default App