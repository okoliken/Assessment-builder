<script setup lang="ts">
// @ts-ignore
import { useDropzone } from "vue3-dropzone";
// @ts-ignore
import type { RejectedFile } from './index'
// @ts-ignore
import { useBuilderStore } from '../../stores/builder.ts'
import { storeToRefs } from 'pinia'
// @ts-ignore
import { useFileValidation } from '../../composables/useFileValidation.ts'

const { selectedQuestion } = storeToRefs(useBuilderStore())
const { validateFile, validationResult } = useFileValidation();


const onDrop = (acceptedFiles: File[], rejectedFiles: RejectedFile[]) => {

    if (acceptedFiles.length <= 0) {
        return
    }

    validateFile(acceptedFiles[0]);

    if (validationResult.value?.isValid) {
        selectedQuestion.value.files = [...selectedQuestion.value.files, ...acceptedFiles]
    }
    else {
        console.log(rejectedFiles, validationResult.value?.message);
    }


}

const { getRootProps, getInputProps, open: TriggerFileSelector, isDragActive } = useDropzone({ onDrop });


</script>



<template>
    <div @click="TriggerFileSelector"
        class="border border-[#DBDCDE] flex items-center justify-center flex-col w-full py-[16px] px-[24px] rounded-[4px] hover:bg-[#00AD1B]/10 cursor-pointer hover:border-dashed hover:border-2">
        <div class="flex items-center justify-center flex-col gap-y-3" v-bind="getRootProps()">
            <input type="file" accept=".svg, .png, .jpg, .jpeg, .gif" v-bind="getInputProps()" />
            <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F2F4F7]">
                <Icon icon="lucide:cloud-upload" />
            </div>
            <div>
                <p v-if="isDragActive">Drop the files here ...</p>
                <p v-else class="text-[#404A5A]  text-[14px]"><span class="text-[#00AD1B] font-semibold">Click to
                        upload</span> or drag and
                    drop</p>
                <p class="text-[#404A5A]  text-[12px]">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
        </div>

    </div>
</template>
