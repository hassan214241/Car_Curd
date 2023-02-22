


import {
    ADD_CAR
    , UPDATE_CAR
    , DELETE_CAR
} from "../type/type";

let initialState = {
    error: '',
    cars: []
}


function studentReducer(state = initialState, action) {

    switch (action.type) {

        case ADD_CAR:
            return {
                ...state,
                cars: [payload, ...state.cars],
            }
        case UPDATE_CAR:
            return {
                ...state,
                cars: state.cars.map((car) =>
                    car.id === payload.id ? { ...payload } : car
                ),
                loadingComments: false,
            }
        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter((car) => car.id !== payload),
            }



        default:
            return state;
    }
}

export default studentReducer;