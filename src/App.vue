<script setup lang="ts">
// @ts-ignore
import { BuilderNav } from '@/components/ui/index'
// @ts-ignore
import BuilderLayout from './layout/BuilderLayout.vue'
// @ts-ignore
import Questions from './components/Questions.vue'
import draggable from 'vuedraggable'
// @ts-ignore
import QuestionBuilder from './components/QuestionBuilder.vue' 
</script>

<template>
  <BuilderNav />

  <BuilderLayout>
    <div class="col-span-3 bg-[#F2F4F7] p-[24px]">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold text-[16px] leading-[22px] tracking-[-2%]">QUESTIONS</h3>
        <p class="text-[#00AD1B] text-[14px] leading-[20px] cursor-pointer tracking-[-2%] font-medium">Add question</p>
      </div>

      <div class="my-6 overflow-y-scroll h-[80vh]">
        <Questions />
      </div>
    </div>

    <div class="col-span-7">
      <div class="py-[32px] px-[56px]">
          <div>
            <QuestionBuilder />
          </div>
      </div>
    </div>
  </BuilderLayout>
</template>
