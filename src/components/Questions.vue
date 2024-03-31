<script setup lang="ts">
import type { Questions } from '@/utils/types';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card'

const { questions, index } = defineProps<{
    questions: Questions,
    index: number
}>()


import { useBuilderStore } from '../stores/builder'
import { storeToRefs } from 'pinia'


const { openBuilder, selectedQuestion, questions: assessmentQuestions } = storeToRefs(useBuilderStore())

const setSelectedQuestion = (question: Questions) => {
    openBuilder.value = false
    selectedQuestion.value = question
    openBuilder.value = true
}

const deleteQuestion = (id: string) => {
    assessmentQuestions.value = assessmentQuestions.value.filter((question) => question.id !== id)
}
</script>

<template>
    <Card class="mb-2 hover:bg-slate-50 cursor-pointer">
        <CardHeader>
            <div class="flex items-center justify-between border-b pb-[5px] border-[#DBDCDE]">
                <p class="text-[#00AD1B] font-medium text-[16px]">{{ index + 1 }}</p>
                <Icon icon="line-md:grid-3-filled" class="text-[#98A2B3] cursor-pointer text-[18px]" />
            </div>
        </CardHeader>
        <CardContent  @click="setSelectedQuestion(questions)">
            <div class="flex items-start gap-x-2">
                <Icon icon="material-symbols-light:check-box-outline"
                    class="text-[#404a5a] cursor-pointer text-[30px]" />
                <p class="text-[14px] flex-grow-0">{{ questions.question }}</p>
            </div>
        </CardContent>
        <CardFooter>
            <div class="flex items-center justify-between w-full">
                <div
                    class="bg-[#F2F4F7]  h-[24px] rounded-[16px] py-[2px] px-[8px] flex items-center justify-center">
                    <span class="text-[12px]">{{ questions.type }}</span>
                </div>
                <div class="flex items-center gap-x-2">
                    <Icon icon="lets-icons:copy-light" class="text-[16px] text-[#475467] cursor-pointer" />
                    <Icon @click="deleteQuestion(questions.id)" icon="solar:trash-bin-minimalistic-linear"
                        class="text-[16px] text-[#475467] cursor-pointer" />
                </div>
            </div>
        </CardFooter>
    </Card>
</template>
