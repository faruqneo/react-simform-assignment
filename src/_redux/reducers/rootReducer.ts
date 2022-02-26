import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import AnswerReducer from "./answerReducer/answerReducer";
import FromReducer from "./fromReducer/fromReducer";

const rootReducer = (history: any) => combineReducers({
  forms: FromReducer,
  answers: AnswerReducer,
  router: connectRouter(history),
});

// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
