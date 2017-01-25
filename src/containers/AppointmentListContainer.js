import { connect } from 'react-redux'
import AppointmentList from '../components/AppointmentList'
import { updateSelectedAppointment } from '../actions'

const mapStateToProps = (state) => {
    return {
        appts: state.appointments
    };
}

const mapDispatchToProps = ({
    onAppointmentClick: updateSelectedAppointment
})

const AppointmentListContainer = connect(mapStateToProps, mapDispatchToProps)(AppointmentList)

export default AppointmentListContainer