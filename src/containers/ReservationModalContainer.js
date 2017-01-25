import { connect } from 'react-redux'
import ReservationModal from '../components/Modal'
import { updateSelectedAppointment, updateAppointmentReservee } from '../actions'

const mapStateToProps = (state) => {
    return {
        showModal: state.showModal,
        reservee: state.selectedApptId !== null && 
            state.appointments[state.selectedApptId].reserved ?
            state.appointments[state.selectedApptId].reservee : null
    };
}

const mapDispatchToProps = ({
    updateSelectedAppointment,
    updateAppointmentReservee
})

const ReservationModalContainer = connect(mapStateToProps, mapDispatchToProps)(ReservationModal)

export default ReservationModalContainer