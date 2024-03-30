import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Questions } from '../utils/types'
import { v4 as uuidv4 } from 'uuid'

export const useBuilderStore = defineStore('builder', () => {
  const questions = ref<Questions[]>([])
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
    selectedQuestion
  }
})
