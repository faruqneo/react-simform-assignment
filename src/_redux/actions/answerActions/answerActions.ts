import { Answer } from "../../../models";
import { answertypes } from "../../Actiontypes";

export const fetchAnswerRequest = (
  ): any => ({
    type: answertypes.FETCH_ANSWER_REQUEST  });  

  export const addAnswerRequest = (
    payload: Answer
  ): any => ({
    type: answertypes.ADD_ANSWER_REQUEST,
    payload
  });