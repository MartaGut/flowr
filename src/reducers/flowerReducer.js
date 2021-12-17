import { FETCH_FLOWERS } from "../actions/types";
import initialStateFlowers from "../actions/initialStateFlowers";

export default (state = initialStateFlowers(), action) => {
    switch (action.type) {
        case FETCH_FLOWERS:
            return { ...state, flowers_list: action.payload };
        default:
            return state;
    };
};
