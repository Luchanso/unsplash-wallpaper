import { handleActions } from "redux-actions";
import { add, dec } from "../actions/counter";

const initial = 0;

export default handleActions(
    {
        [add]: (state, action) => state + 1,
        [dec]: (state, action) => state - 1
    },
    initial
);
