<script setup lang="ts">
import { ref } from 'vue'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const selected = ref('1 point')

const updateSelected = (value: string) => {
    selected.value = value
}


const props = defineProps({
    icon: String
})
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger class="hover:bg-slate-400/20">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-1">
                    <Icon :icon="props.icon"
                        class="text-[#404a5a] cursor-pointer text-[22px]" />
                    <span class="text-[14px] text-[#404A5A]">{{ selected }}</span>
                </div>
                <Icon icon="iconamoon:arrow-down-2-light" class="text-[22px] text-[#404A5A]" />
            </div>

        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem @click="updateSelected('Profile')">Profile</DropdownMenuItem>
            <DropdownMenuItem @click="updateSelected('Billing')">Billing</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
