<script setup lang="ts">
import { ref, watchEffect, computed, onBeforeMount } from 'vue'
import { useBuilderStore } from '../stores/builder'
import { storeToRefs } from 'pinia'

const { selectedQuestion } = storeToRefs(useBuilderStore())

import { Progress } from '@/components/ui/progress'
import { toast } from 'vue-sonner'
const progress = ref(13)
const isUploaded = ref(false)

watchEffect((cleanupFn) => {
  if (isUploaded.value) {
    const timer = setTimeout(() => (progress.value = 100), 500)
    cleanupFn(() => clearTimeout(timer))
  } else {
    const timer = setTimeout(() => (progress.value = 66), 500)
    cleanupFn(() => clearTimeout(timer))
  }
})

const fileSizeInKBOrMb = computed(() => {
  const oneKB = 1024
  const oneMB = 1024 * oneKB

  if (props.file) {
    const { size } = props.file
    if (typeof props.file?.size === 'number') {
      if (size >= oneMB) {
        return (size / oneMB).toFixed(2) + ' MB'
      } else if (size >= oneKB) {
        return (size / oneKB).toFixed(2) + ' KB'
      } else {
        return size + ' bytes'
      }
    }
  }
})

const props = defineProps({
  file: File,
  icon: String,
  index: Number
})

const uploadFiles = async (file: File) => {
  const file_info = file
  if (!file_info) return

  try {
    const formData = new FormData()
    formData.append('file', file_info)
    formData.append('upload_preset', 'sagyopec')

    const response = await fetch(`https://api.cloudinary.com/v1_1/dnhtq3hdg/image/upload`, {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      isUploaded.value = true
      toast.success(`${file.name} uploaded successfully`)
    }
  } catch (error) {
    return error
  }
}

onBeforeMount(() => {
  if (props.file) {
    uploadFiles(props.file)
  }
})

const deleteFile = (index: number) => {
  console.log(index)
  if (index > -1 && index < selectedQuestion.value.files.length) {
    const newFiles = [...selectedQuestion.value.files]
    newFiles.splice(index, 1)
    selectedQuestion.value.files = newFiles
  }
}
</script>

<template>
  <div class="border border-[#DBDCDE] hover:bg-slate-50 p-[16px] h-[96px] my-2">
    <div class="flex items-start gap-x-3 w-full">
      <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#BDFFC7]">
        <Icon :icon="icon" class="text-[#00AD1B]" />
      </div>
      <div class="w-full">
        <div class="flex items-center justify-between">
          <p class="text-[#101828] text-[14px] font-medium mb-px">{{ props.file?.name }}</p>
          <Icon
            @click="deleteFile(Number(props.index))"
            icon="solar:trash-bin-minimalistic-linear"
            class="text-[22px] text-[#475467] cursor-pointer"
          />
        </div>
        <p class="text-[#404A5A]">{{ fileSizeInKBOrMb }}</p>
        <Progress v-model="progress" class="w-full my-2" />
      </div>
    </div>
  </div>
</template>
