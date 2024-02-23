import tutorielReducer from "./tutoriel";
import tutorielCreateReducer from "./tutorielCreate";
import userReducer from "./user";
import contactReducer from "./contact";

const reducer={
    tutoriel:tutorielReducer,
    tutorielCreate:tutorielCreateReducer,
    user:userReducer,
    contact:contactReducer,
}
export default reducer;