import { FormTypes } from "../../Actiontypes";
import { FromState } from "../../types/types";

const initialState: FromState = {
  form: []
};

const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FormTypes.FETCH_FORM_REQUEST:
      return {
        ...state,
      };
      case FormTypes.ADD_FORM_REQUEST:
      const oldQuestions = JSON.parse(JSON.stringify(state.form));
      oldQuestions.push(action.payload);
      return {
        ...state,
        form: oldQuestions
      };
    default:
      return {
        ...state
      };
  }
};

export default formReducer;
