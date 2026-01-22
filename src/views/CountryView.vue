<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.name as string
</script>

<template>
  <h1>{{ name }}</h1>
</template>
