export type Questions = {
  id: string
  icon: string
  question: string
  type: string
  files: File[]
  answers: Answers[],
  points: string,
  duration: string
}


export type Answers = {
    id: string,
    answer:string,
    optional_answer?:string
}


export type Option = {
    key:string,
    value: string
}


export type ValidationResult = {
  isValid: boolean;
  message: string;
};