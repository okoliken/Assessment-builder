<script setup lang="ts">

// @ts-ignore
import StepperHeader from '../components/StepperHeader.vue'
// @ts-ignore
import StepperStep from '../components/StepperStep.vue'

import { steps } from '.'
</script>

<template>
    <div class="grid grid-cols-12 w-full">
        <div class="col-span-2 py-[24px] pl-[24px] pr-[6px] bg-[#F9FAFB] h-screen min-h-full">
            <h4 class="font-semibold text-[16px] leading-[22px] tracking-[-2%]">STEPS</h4>

            <div>
                <StepperHeader>
                    <ul class="mt-6 w-full">
                        <StepperStep v-for="(step, index) in steps" :key="index" :icon="step.icon"
                            :content="step.content" :isCompleted="step.isCompleted" :title="step.title"
                            :isActive="step.isActive" />
                    </ul>
                </StepperHeader>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
