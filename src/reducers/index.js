const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_APPOINTMENT_RESERVEE':
            return Object.assign({}, state, {
                appointments: state.appointments.map((appt, index) => {
                    if (index === state.selectedApptId) {
                        appt.reservee = action.reservee;
                        appt.reserved = true;
                    }
                    return appt;
                })
            })
        case 'UPDATE_SELECTED_APPOINTMENT':
            return Object.assign({}, state, {
                selectedApptId: action.id,
                showModal: action.id === null ? false : true
            })
        default:
            return state
    }
}

export default reducer