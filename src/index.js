import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './components/App'


const initialState = {
    appointments: [
			{timeslot: "9am to 10am",  id: 0, reservee: {name: "", phone: ""}, reserved: false},
			{timeslot: "10am to 11am", id: 1, reservee: {name: "", phone: ""}, reserved: false},
			{timeslot: "11am to 12pm", id: 2, reservee: {name: "", phone: ""}, reserved: false},
			{timeslot: "12pm to 1pm",  id: 3, reservee: {name: "", phone: ""}, reserved: false},
			{timeslot: "1pm to 2pm",   id: 4, reservee: {name: "", phone: ""}, reserved: false},
			{timeslot: "2pm to 3pm",   id: 5, reservee: {name: "", phone: ""}, reserved: false},
			{timeslot: "3pm to 4pm",   id: 6, reservee: {name: "", phone: ""}, reserved: false},
			{timeslot: "4pm to 5pm",   id: 7, reservee: {name: "", phone: ""}, reserved: false}
		],
    selectedApptId: null,
	showModal: false
}


//const store = createStore(reducer, initialState)
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app_root')
)