<script setup lang="ts">
// @ts-ignore
import type { Option } from '../utils/types'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const props = defineProps<{
  options: Option[],
  class?: string
}>()

const selectedType = defineModel<string>()

const updateSelected = (value: string) => {
  selectedType.value = value
}
</script>

<template>
  <Select class="w-full">
    <SelectTrigger :class="class" class="w-full">
      <SelectValue placeholder="Select a question type" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem
          @click="updateSelected(option.value)"
          v-for="(option, index) in props.options"
          :key="index"
          :value="option.value"
        >
          {{ option.key }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
