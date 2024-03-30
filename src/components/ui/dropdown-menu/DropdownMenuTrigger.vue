<script setup lang="ts">
import { DropdownMenuTrigger, type DropdownMenuTriggerProps, useForwardProps } from 'radix-vue'

const props = defineProps<DropdownMenuTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger class="outline-none border border-[#DBDCDE] w-[170px] h-[44px] py-[11px] px-[14px]" v-bind="forwardedProps">
    <slot />
  </DropdownMenuTrigger>
</template>
