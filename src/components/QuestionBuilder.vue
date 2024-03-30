<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import MenuSelect from './MenuSelect.vue'
// @ts-ignore
import FileUploader from './uploader/FileUploader.vue'
// @ts-ignore
import QuestionType from './QuestionType.vue'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
// @ts-ignore
import File from './File.vue'
import type { Option } from '../utils/types'
import { Button } from '@/components/ui/button'
// @ts-ignore
import { useBuilderStore } from '../stores/builder.ts'
import { storeToRefs } from 'pinia'


const { selectedQuestion } = storeToRefs(useBuilderStore())


const points = ref<Option[]>([
    {
        key: '1 point',
        value: '1 point'
    },
    {
        key: '2 point',
        value: '2 point'
    },
    {
        key: '3 point',
        value: '3 point'
    },

])

const duration = ref<Option[]>([
    {
        key: '5 seconds',
        value: '5 seconds'
    },
    {
        key: '10 seconds',
        value: "10 seconds"
    },
    {
        key: '15 seconds',
        value: "15 seconds"
    },

])
const questionTypes = ref<Option[]>([
    {
        key: 'Choice',
        value: 'choice'
    },
    {
        key: 'Open ended',
        value: "open ended"
    },

])





</script>

<template>
    <div>
        <div class="flex items-center justify-between w-full">
            <div class="flex items-center gap-x-4">
                <MenuSelect v-model="selectedQuestion.points" :options="points" icon="material-symbols-light:check-box-outline" />
                <MenuSelect v-model="selectedQuestion.duration" :options="duration" icon="lets-icons:clock-light" />
            </div>

            <div
                class="w-[40px] h-[40px] border border-[#FECDCA] hover:bg-[#D92D20]/30 flex items-center justify-center">
                <Icon icon="solar:trash-bin-minimalistic-linear" class="text-[25px] text-[#D92D20] cursor-pointer" />
            </div>
        </div>

        <div class="p-[40px] border border-[#DBDCDE] rounded-[4px] flex items-start justify-start flex-col my-6">
            <div class="w-full">
                <h4 class="text-[14px] text-[#101828] font-semibold mb-4">Question type</h4>
                <QuestionType v-model="selectedQuestion.type" :options="questionTypes" />
            </div>

            <div class="my-6 flex items-center w-full">
                <div class="flex-grow bg-[#00AD1B] p-[16px] flex items-center gap-x-2 cursor-pointer">
                    <Icon icon="gravity-ui:text" class="text-white text-[28px]" />
                    <p class="text-white font-semibold">Text</p>
                </div>
                <div class="flex-grow p-[16px] flex items-center gap-x-2 cursor-pointer">
                    <Icon icon="mynaui:upload" class="text-[28px]" />
                    <p class="font-semibold">Upload</p>
                </div>
            </div>
            <div class="w-full flex items-start flex-col">
                <Label class="mb-2 text-[#667085]" for="question">Enter Question</Label>
                <Textarea v-model="selectedQuestion.question" id="question" placeholder="Type your question here." />
                <p class="self-end my-2 text-[14px] !text-[#667085]">150/400</p>
            </div>

            <div class="w-full my-6">
                <div class="flex items-start gap-x-1 mb-4">
                    <Icon icon="material-symbols-light:check-box-outline"
                        class="text-[#00AD1B] cursor-pointer text-[22px]" />
                    <div>
                        <Label class="mb-1 font-medium" for="question">Upload file</Label>
                        <p class="text-[#404A5A]">Upload images, documents, or video file.</p>
                    </div>
                </div>
                <FileUploader />

                <div class="mt-4 w-full">
                    <File icon="radix-icons:file" file-name="Tech design requirements.pdf" size="200 KB" />
                    <File icon="solar:video-frame-linear" file-name="Dashboard recording.mp4" size="16 MB" />
                    <Button variant="outline" class="h-[44px] text-[#00AD1B] my-3">Add upload</Button>
                </div>


                <div class="border-t-2 border-dashed border-[#D0D5DD] my-6 pt-4">
                    <div class="my-8">
                        <Label class="mb-1 font-medium" for="question">Answers</Label>
                    </div>

                    <template v-for="answer in selectedQuestion.answers">
                        
                        <div class="flex items-center gap-x-3">
                            <Textarea v-model="answer.answer" class="min-h-[140px]" id="question" placeholder="Type your Answer." />
                            <div class="w-[40px] h-[40px] border border-[#DBDCDE] flex items-center justify-center">
                                <Icon icon="solar:trash-bin-minimalistic-linear"
                                    class="text-[25px] text-[#DBDCDE] cursor-pointer" />
                            </div>
    
                        </div>
                        <div class="w-full flex items-start flex-col my-4">
                            <Label class="mb-px text-[#667085]" for="question">Answer explanation (optional)</Label>
                            <Textarea v-model="answer.optional_answer" id="question" placeholder="Type your question here." />
                            <p class="self-end my-2 text-[14px] !text-[#667085]">150/400</p>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <div class="border-t border-b border-[#DBDCDE] pb-4">
            <div class="flex items-center justify-between">
                <Button variant="outline" class="h-[44px] text-[#00AD1B] my-3">Save & duplicate</Button>
                <div class="flex items-center  gap-x-2">
                    <Button variant="outline" class="h-[44px] text-[#00AD1B] my-3">Save & add new</Button>
                    <Button class="h-[44px] text-white my-3">Save question</Button>
                </div>
            </div>
        </div>
    </div>
</template>
