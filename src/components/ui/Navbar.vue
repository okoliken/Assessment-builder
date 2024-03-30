<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>


<template>

    <header class="flex items-center justify-between py-[20px] px-[26px] h-[80px] bg-white border-b border-[#DBDCDE]">
        <div class="flex items-center gap-x-4">
            <div class="px-[12px] py-[8px] w-[77px] h-[36px] bg-[#F6FFF3] rounded-[99px] flex items-center gap-x-1"> 
                <Icon icon="iconamoon:arrow-left-2-light" class="text-[23px] font-bold text-[#00AD1B]" />
                <p class="font-medium text-[14px] leading-[20px] tracking-[-2%] text-[#00AD1B]">Exit</p>
            </div>
            <h3 class="font-medium text-[18px] leading-[24px] tracking-[-3%]">Assessment builder</h3>
        </div>

        <div class="flex items-center gap-x-4">
            <Button class="w-[101px] h-[50px] font-medium text-[#00AD1B] gap-x-1" variant="outline">
                <Icon icon="iconamoon:arrow-left-2-light" class="text-[23px] font-bold" />
                <span class="inline-block">Back</span>
            </Button>
            <Button class="w-[133px] h-[50px] font-medium flex-row-reverse gap-x-1 items-center">
                <Icon icon="iconamoon:arrow-right-2-light" class="text-[23px] font-bold" />
                <span class="inline-block">Continue</span>
            </Button>
        </div>
    </header>

</template>


