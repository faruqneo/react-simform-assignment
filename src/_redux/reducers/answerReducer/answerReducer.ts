import { answertypes } from "../../Actiontypes/answerTypes";
import { AnswerState } from "../../types/types";

const initialState: AnswerState = {
    answer: []
};

const answerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case answertypes.FETCH_ANSWER_REQUEST:
        return {
          ...state,
        };
      case answertypes.ADD_ANSWER_REQUEST:
        const oldAnswer = JSON.parse(JSON.stringify(state.answer));
        oldAnswer.push(action.payload);
          return {
              ...state,
              answer: oldAnswer
          }
    
    default:
      return {
        ...state
      };
  }
};

export default answerReducer;
