import { FETCH_SIGHTINGS } from "../actions/types";
import initialStateSightings from "../actions/initialStateSightings";

export default (state = initialStateSightings(), action) => {
    switch (action.type) {
        case FETCH_SIGHTINGS:
            return { ...state, sightings_list: action.payload };
        default:
            return state;
    }
}