import type { ValidationResult } from '../utils/types'
import { type Ref, ref } from 'vue'


export const useFileValidation = () => {
    const validationResult: Ref<ValidationResult | null> = ref(null);
  
    const validateFile = async (file: File): Promise<ValidationResult> => {
      return new Promise((resolve) => {
        if (file.type === 'image/svg+xml') {
          const result = { isValid: true, message: 'SVG file accepted.' };
          validationResult.value = result;
          resolve(result);
          return;
        }
        const img = new Image();
  
        img.onload = () => {
          const width = img.naturalWidth;
          const height = img.naturalHeight;
  
          URL.revokeObjectURL(img.src);
  
          const result = width > 800 || height > 400
            ? { isValid: false, message: 'The image dimensions must not exceed 800x400 pixels.' }
            : { isValid: true, message: 'File accepted: ' + file.name };
  
          validationResult.value = result;
          resolve(result);
        };
  
        img.onerror = () => {
          const result = { isValid: false, message: 'There was an error processing your file.' };
          validationResult.value = result;
          resolve(result);
        };
  
        img.src = URL.createObjectURL(file);
      });
    };
  
    return { validateFile, validationResult };
  };
