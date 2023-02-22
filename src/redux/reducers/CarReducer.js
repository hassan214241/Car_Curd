


import {
    ADD_CAR
    , UPDATE_CAR
    , DELETE_CAR
} from "../types/Types";

import { Database } from "../../constant/CustomData/CustomData";

let initialState = {
    error: '',
    cars: Database
}


function CardReducer(state = initialState, action) {

    switch (action.type) {

        case ADD_CAR:
            return {
                ...state,
                cars: [action.payload, ...state.cars],
            }
        case UPDATE_CAR:
            return {
                ...state,
                cars: state.cars.map((car) =>
                    car.id === action.payload.id ? { ...action.payload } : car
                ),
                loadingComments: false,
            }
        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter((car) => car.id !== action.payload),
            }



        default:
            return state;
    }
}

export default CardReducer;