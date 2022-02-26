import { Question, Form, Answer } from "../../models";



  export interface FetchQuestionsSuccessPayload {
    questions: Question[];
  }

  export interface QuestionsState {
    questions: Question[];
  }

  export interface FromState {
    form: Form[];
  }

  export interface AnswerState {
    answer: Answer[];
  }