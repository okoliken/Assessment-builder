<script setup lang="ts">
import { BuilderNav } from '@/components/ui/index'
import BuilderLayout from './layout/BuilderLayout.vue'
import Questions from './components/Questions.vue'
import draggable from 'vuedraggable'
import QuestionBuilder from './components/QuestionBuilder.vue'

import { Toaster } from '@/components/ui/sonner'

import { useBuilderStore } from './stores/builder'
import { storeToRefs } from 'pinia'

const { openBuilder, questions } = storeToRefs(useBuilderStore())



</script>

<template>
  <BuilderNav />

  <BuilderLayout>
    <div class="col-span-3 bg-[#F2F4F7] p-[24px]">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold text-[16px] leading-[22px] tracking-[-2%]">QUESTIONS</h3>
        <p @click="openBuilder = !openBuilder" class="text-[#00AD1B] text-[14px] leading-[20px] cursor-pointer tracking-[-2%] font-medium">Add question</p>
      </div>

      <div class="my-6 overflow-y-scroll h-[80vh]">
        <draggable v-model="questions" item-key="id">
          <template #item="{ element, index }">
            <Questions :questions="element" :index="index" />
          </template>
        </draggable>
      </div>
    </div>

    <div class="col-span-7">
      <div v-if="openBuilder" class="py-[32px] px-[56px]">
        <div>
          <QuestionBuilder />
        </div>
      </div>
    </div>
  </BuilderLayout>

  <Toaster rich-colors />
</template>
