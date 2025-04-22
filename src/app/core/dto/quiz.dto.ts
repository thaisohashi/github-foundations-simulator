export interface AlternativeDTO {
  id: number;
  alternative_translated: {
    pt_br: string;
    en: string;
  };
  is_correct: boolean;
}

export interface QuestionDTO {
  id: number;
  question_translated: {
    pt_br: string;
    en: string;
  };
  alternatives: AlternativeDTO[];
  domain: string;
  topic: string;
  answer_explanation: {
    pt_br: string;
    en: string;
  };
  reference_link: string;
}

export interface QuizDTO {
  questions: QuestionDTO[];
}
