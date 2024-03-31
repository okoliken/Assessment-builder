import { z } from 'zod'
import { configure } from 'vee-validate'

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: true,
})

export const formSchema = z.object({
  question: z.string().min(1, 'Please enter the question').max(400, 'Word limit'),
  points: z.string().min(1, 'Please select points'),
  duration: z.string().min(1, 'Please select duration'),
  type: z.string().min(1, 'Please select a question type'),
  files: z
    .array(
        z.instanceof(File)
    )
    .min(1, 'Please upload at least one file').max(3, 'File limit exceeded'),
  answers: z
    .array(
      z.object({
        answer: z.string().min(1, 'Please enter an answer'),
        optional_answer: z.string().max(400).nullable()
      })
    )
    .min(1, 'Please add at least one answer')
})
