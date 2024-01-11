<template>
    <svg aria-hidden="true" class="cp-icon">
      <use :href="`#icon-${props.name}`" />
    </svg>
  </template>
  
  <script setup>
  const props = defineProps(['name'])
  </script>