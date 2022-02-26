export enum AnswerTypes {
  Text = 1,
  Multichoice = 2,
  Singlechoice = 3,
}

export interface Question {
    id?: number;
    title: string;
    answerType: AnswerTypes;
    answerOptions?: any;
  }

export interface Form {
    id: string;
    name: string;
    createAt: number;
    questions: [Question]
  }

export interface relatedAnswer {
  title: string;
  answer: string | any;
}

  export interface Answer {
    form_id: string;
    answers: relatedAnswer
  }
  