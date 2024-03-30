<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
</script>

<!-- border-2 border-[#489955]  -->

<template>
    <Card class="mb-2 hover:bg-slate-50 cursor-pointer">
        <CardHeader>
            <div class="flex items-center justify-between border-b pb-[5px] border-[#DBDCDE]">
                <p class="text-[#00AD1B] font-medium text-[16px]">1</p>
                <Icon icon="line-md:grid-3-filled" class="text-[#98A2B3] cursor-pointer text-[18px]" />
            </div>
        </CardHeader>
        <CardContent>
            <div class="flex items-start gap-x-2">
                <Icon icon="material-symbols-light:check-box-outline" class="text-[#404a5a] cursor-pointer text-[36px] transform -translate-y-1" />
                <p>Which of the following are examples of an enterprise grade UI?</p>
            </div>
        </CardContent>
        <CardFooter>
            <div class="flex items-center justify-between w-full">
                <div
                    class="bg-[#F2F4F7] w-[62px] h-[24px] rounded-[16px] py-[2px] px-[8px] flex items-center justify-center">
                    <span class="text-[12px]">Choice</span>
                </div>
                <div class="flex items-center gap-x-2">
                    <Icon icon="lets-icons:copy-light" class="text-[16px] text-[#475467] cursor-pointer" />
                    <Icon icon="solar:trash-bin-minimalistic-linear"
                        class="text-[16px] text-[#475467] cursor-pointer" />
                </div>
            </div>
        </CardFooter>
    </Card>
</template>
