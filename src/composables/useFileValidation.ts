import type { ValidationResult } from '../utils/types'
import { type Ref, ref } from 'vue'

const validationResult: Ref<ValidationResult | null> = ref(null)

export const useFileValidation = () => {

  const validateFile = (file: File) => {
    validationResult.value = null

    if (file.type === 'image/svg+xml') {
      validationResult.value = { isValid: true, message: 'SVG file accepted.' }
      return
    }
    const img = new Image()

    img.onload = () => {
      const width = img.naturalWidth
      const height = img.naturalHeight

      URL.revokeObjectURL(img.src)

      if (width > 800 || height > 400) {
        validationResult.value = {
          isValid: false,
          message: 'The image dimensions must not exceed 800x400 pixels.'
        }
      } else {
        validationResult.value = { isValid: true, message: 'File accepted: ' + file.name }
      }
    }

    img.onerror = () => {
      validationResult.value = {
        isValid: false,
        message: 'There was an error processing your file.'
      }
    }

  }
  return {
    validateFile,
    validationResult
  }
}
