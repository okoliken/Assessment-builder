<script setup lang="ts">
// @ts-ignore
import type { Option } from '../utils/types'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const selected = defineModel()



const updateSelected = (value: string) => {
    selected.value = value
}


const props = defineProps<{
    icon: string,
    options: Option[]
}>()

</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger class="hover:bg-slate-400/20">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-1">
                    <Icon :icon="props.icon" class="text-[#404a5a] cursor-pointer text-[22px]" />
                    <span class="text-[14px] text-[#404A5A]">{{ selected }}</span>
                </div>
                <Icon icon="iconamoon:arrow-down-2-light" class="text-[22px] text-[#404A5A]" />
            </div>

        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem v-for="(option, index) in  props.options" :key="index"
                @click="updateSelected(option.value)">{{ option.key }}</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
