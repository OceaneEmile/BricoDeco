import tutorielReducer from "./tutoriel";
import tutorielCreateReducer from "./tutorielCreate";
import userReducer from "./user";
import contactReducer from "./contact";
import tutorielUpdateReducer from "./tutorielUpdate";

const reducer={
    tutoriel:tutorielReducer,
    tutorielCreate:tutorielCreateReducer,
    tutorielUpdate:tutorielUpdateReducer,
    user:userReducer,
    contact:contactReducer,
}
export default reducer;