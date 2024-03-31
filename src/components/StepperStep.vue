
<script setup lang="ts">
import type { StepInterface } from '../layout'

 const { icon, title, content, isCompleted, isActive } = defineProps<StepInterface>()
</script>

<template>
    <li :class="[isCompleted ? 'mb-12' : 'mb-6']" class="flex items-start gap-x-3">
        <div class="relative">
            <div>
                <Icon class="text-[36px]" :class="[isCompleted || isActive ? 'text-[#00AD1B]' :'text-[#475467]']":icon="icon" />
            </div>

            <div v-if="isCompleted" class="absolute top-9 left-1/2 -ml-0.5 w-[2.5px]  bg-[#DBDCDE]" style="height: 4rem;"></div>
        </div>
        <div> 
            <h3 :class="[isActive ? '!text-[#489955]' : 'text-[#101828]']" class="font-semibold break-keep text-[14px]">{{ title }}</h3>
            <p  :class="[isActive ? '!text-[#489955]' : 'text-[#101828]']" class="font-light">{{ content }}</p>
        </div>
    </li>
</template>


