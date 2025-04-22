export interface AlternativeDTO {
  id: number;
  alternative_translated: {
    [key: string]: string;
  };
  is_correct: boolean;
}

export interface QuestionDTO {
  id: number;
  question_translated: {
    [key: string]: string;
  };
  alternatives: AlternativeDTO[];
  domain: string;
  topic: string;
  answer_explanation: {
    [key: string]: string;
  };
  reference_link: string;
}

export interface QuizDTO {
  questions: QuestionDTO[];
}
