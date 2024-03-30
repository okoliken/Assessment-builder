<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
</script>

<template>
  <Select class="w-full">
    <SelectTrigger class="w-full">
      <SelectValue placeholder="Select a question type" />
    </SelectTrigger>
    <SelectContent>
        <SelectLabel>Select Type</SelectLabel>
      <SelectGroup>
        <SelectItem value="Choice">
            Choice
        </SelectItem>
        <SelectItem value="Open ended">
            Open ended
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>