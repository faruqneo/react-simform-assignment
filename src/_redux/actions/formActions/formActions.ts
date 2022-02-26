import { Form } from "../../../models";
import { FormTypes } from "../../Actiontypes";

  export const fetchQuestionRequest = (): any => ({
    type: FormTypes.FETCH_FORM_REQUEST
  });
  
  export const addQuestionRequest = (
    payload: Form
  ): any => ({
    type: FormTypes.ADD_FORM_REQUEST,
    payload
  });