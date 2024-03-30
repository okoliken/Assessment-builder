<script setup lang="ts">
import { ref, watchEffect } from 'vue'
// @ts-ignore
import { Progress } from '@/components/ui/progress'

const progress = ref(13)

watchEffect((cleanupFn) => {
    const timer = setTimeout(() => progress.value = 66, 500)
    cleanupFn(() => clearTimeout(timer))
})


const { icon, size, fileName} = defineProps({
    icon: String,
    size: String,
    fileName: String
})

</script>


<template>
    <div class="border border-[#DBDCDE] p-[16px] h-[96px] my-2">
        <div class="flex items-start gap-x-3 w-full">
            <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#BDFFC7]">
                <Icon :icon="icon" class="text-[#00AD1B]" />
            </div>
            <div class="w-full">
               <div class="flex items-center justify-between">
                <p class="text-[#101828] text-[14px] font-medium mb-px">{{fileName}}</p>
                <Icon icon="solar:trash-bin-minimalistic-linear" class="text-[22px] text-[#475467] cursor-pointer" />
               </div>
                <p class="text-[#404A5A]">{{size}}</p>
                <Progress v-model="progress" class="w-full my-2" />
            </div>

        </div>
    </div>
</template>


/* _File upload item base */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 16px;
gap: 4px;
isolation: isolate;

width: 600px;
height: 96px;

background: #FFFFFF;
border: 1px solid #DBDCDE;
border-radius: 0px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
