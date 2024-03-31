import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Questions } from '../utils/types'
import { v4 as uuidv4 } from 'uuid'

export const useBuilderStore = defineStore('builder', () => {
  const questions = ref<Questions[]>([
    {
      id: uuidv4(),
      icon: 'material-symbols-light:check-box-outline',
      question: 'Which of the following are examples of an enterprise grade UI?',
      type: 'Choice',
      files: [],
      answers: [
        {
          id: uuidv4(),
          answer: 'This is an applicable answer',
          optional_answer: ''
        }
      ],
      points: '',
      duration: ''
    },
    {
      id: uuidv4(),
      icon: 'material-symbols-light:check-box-outline',
      question: 'What is a JavaScript Framework? give 3 examples of them',
      type: 'Open ended',
      files: [],
      answers: [
        {
          id: uuidv4(),
          answer: 'This is an applicable answer',
          optional_answer: ''
        }
      ],
      points: '',
      duration: ''
    },
    {
      id: uuidv4(),
      icon: 'gravity-ui:text',
      question: 'Queen guitarist Brian May is an expert in what scientific field?',
      type: 'Open ended',
      files: [],
      answers: [
        {
          id: uuidv4(),
          answer: 'Astrophysics',
          optional_answer: ''
        }
      ],
      points: '',
      duration: ''
    },
    {
      id: uuidv4(),
      icon: 'mynaui:upload',
      question: 'What artist has the most streams on Spotify in the world? ',
      type: 'Open ended',
      files: [],
      answers: [
        {
          id: uuidv4(),
          answer: 'Drake',
          optional_answer: ''
        }
      ],
      points: '',
      duration: ''
    }
  ])
  const openBuilder = ref(false)
  const selectedQuestion = ref<Questions>({
    id: uuidv4(),
    icon: '',
    question: '',
    type: '',
    files: [],
    answers: [
      {
        id: uuidv4(),
        answer: '',
        optional_answer: ''
      }
    ],
    points: '',
    duration: ''
  })

  const deleteQuestion = (id: string) => {}

  return {
    questions,
    deleteQuestion,
    selectedQuestion,
    openBuilder
  }
})
