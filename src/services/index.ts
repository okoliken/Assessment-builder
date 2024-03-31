import type { Questions } from '@/utils/types';
import { supabase } from './supabase'

 export const addAssessment = async (assessmentData: Questions) =>  {
    const { data, error } = await supabase
      .from('assessments')
      .insert([
        {
          id: assessmentData.id,
          icon: assessmentData.icon,
          question: assessmentData.question,
          type: assessmentData.type,
          files: assessmentData.files,
          answers: assessmentData.answers, 
          points: assessmentData.points,
          duration: assessmentData.duration
        }
      ]);
  
    if (error) {
      console.error('Error inserting data', error);
      return null;
    }
  
    console.log('Inserted data:', data);
    return data;
  }