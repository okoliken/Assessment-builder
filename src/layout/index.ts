export interface StepInterface {
  icon: string
  title: string
  content: string
  isCompleted: boolean
}

export const steps: StepInterface[] = [
  {
    icon: 'iconamoon:check-circle-1-light',
    title: 'Details',
    content: 'Configure the details of your assessment',
    isCompleted: true
  },
  {
    icon: 'la:dot-circle',
    title: 'Assessment questions',
    content: 'Add questions to your assessment',
    isCompleted: false
  },
  {
    icon: 'la:dot-circle',
    title: 'Publish',
    content: 'Review and publish your assessment',
    isCompleted: false
  }
]
